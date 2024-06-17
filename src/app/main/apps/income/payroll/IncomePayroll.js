import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import FuseLoading from '@fuse/core/FuseLoading';
import withReducer from 'app/store/withReducer';
import { makeStyles } from '@material-ui/core/styles';
import _ from '@lodash';
import reducer from '../store';
import moment from 'moment';
import Table from '../../../components/widgets/Table';
import SpecialTable from '../../../components/widgets/SpecialTable';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getLapseRate, selectLapseRate } from '../store/lapseRateSlice';
import { getPolicyGrowth, selectPolicyGrowth } from '../store/policyGrowthSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { months, monthsAndQuarters, policiesAndBonuses,policiesAndCommissions, Options as options, policies } from '../../../utils/Globals';
import { getLevel, getMain } from '../../../utils/Function';

const belongTo = sessionStorage.getItem('@BELONGTO');
const UID = sessionStorage.getItem('@UID');

function IncomePayroll(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const bonusPlans = useSelector(selectBonusPlans);
	const lapseRate = useSelector(selectLapseRate);
	const policyGrowth = useSelector(selectPolicyGrowth);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [main, setMain] = useState({});
	const [tabValue, setTabValue] = useState(0);
	const [year, setYear] = useState(moment().format('yyyy'));
	const [production, setProduction] = useState("Show Issued Production");
	const [title, setTitle] = useState('Payroll Report');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getLapseRate(year));
		dispatch(getPolicyGrowth(year));	
		dispatch(getEntries(year));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {				
		if(users.length>0 && entries.length>0) {	
			const temp = getMain(entries, bonusPlans, [], users, [], lapseRate, policyGrowth);										
			setMain(temp);
		}
	}, [entries, bonusPlans, users, lapseRate, policyGrowth]);

	function allIndividualTargetBonus(period, userId) {
    return ['Auto', 'Fire', 'Life', 'Health', 'Bank'].reduce((sum, policy) => {
      const temp = main[production][period][userId][policy]
      const policyCount = temp["Policies"];
      const level = getLevel(policyCount, policy, bonusPlans, userId)

      if (policyCount > 0) {
        sum += temp["targetAmount"] ? parseFloat(level.dollar) : (parseFloat(
            temp["Premium"]) * level.amount / 100);
      }
      return sum
    }, 0)
  }

	useEffect(() => { 
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Income_Payroll_Table) {
				let tableContent = {};
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};
					let totalPolicies = 0;
					let totalBonuses = 0;	

					policiesAndCommissions.map((item, col) => {
						let value = 0;
						if(col < 8) {
							const colName = item.value.split(' ');
							let tempItem = colName[1];
							if(colName[1]==='Policies' || colName[1]==='Products') {
								tempItem = 'Policies';
							} 
							console.log(tempItem);
							
							value = main[production][month.value][UID][colName[0]][tempItem==='Commission'? "Bonuses": tempItem];
						} 
																		
						// getting IndividualTargetBonuses & Team Target Bonuses
						else if(item.value==='Individual Target Bonuses' || item.value==='Team Target Bonuses') {
							if (bonusPlans.length > 0) {
								const indTargetBonuses = allIndividualTargetBonus(month.value, UID)
								let teamTargetBonus = 0;
								policies.map((policy) => {
									if (policy.value !== "Total") {
										const policyCount =
											main[production][month.value][UID][
												policy.value
											]["Policies"];
										teamTargetBonus += parseFloat(
											getLevel(
												policyCount,
												`Team${policy.value}`,
												bonusPlans,
												UID
											).amount
										);
									}
								});
								if(item.value === 'Individual Target Bonuses') {
									value = indTargetBonuses;
								} else if (item.value === 'Team Target Bonuses') {
									value = teamTargetBonus;
								}
							}
						} 
						
						// getting Lapse Rate Bonus
						else if(item.value==='Lapse Rate % Bonus') { 					
							value = 
								parseFloat(main[production][month.value][UID]['Auto']['lapseBonus']) +
								parseFloat(main[production][month.value][UID]['Fire']['lapseBonus']);
						}

						// getting Policy Growth Bonus
						else if(item.value==='Policy Growth Bonuses') { 					
							value = 
								parseFloat(main[production][month.value][UID]['Auto']['growthBonus']) +
								parseFloat(main[production][month.value][UID]['Fire']['growthBonus']);
						}	
						
						// getting Special Promotion
						else if(item.value==='Special Promotion') { 					
							value = 
								parseFloat(main[production][month.value][UID]['Auto']['specialPromotion']) +
								parseFloat(main[production][month.value][UID]['Fire']['specialPromotion']);
						}	

						totalPolicies += col<12 && col%2===0 && parseFloat(value);
						totalBonuses += col<12 && col%2===1 && parseFloat(value);
						totalBonuses += col>11 && col<17 && parseFloat(value);

						tableContent[month.value][item.value] = value;	
						tableContent[month.value]['Total Policies'] = totalPolicies;
						tableContent[month.value]['Total Compensation'] = totalBonuses;																							
					});		
				});
				console.log(tableContent);
				Object.keys(widgets.Income_Payroll_Table.table.tableContent).map((month, rowNum) => {					
					widgets = {
						...widgets, Income_Payroll_Table: {
							...widgets.Income_Payroll_Table, table: {
								...widgets.Income_Payroll_Table.table, tableContent: 
									tableContent							
							}
						}
					}
				}); 			
			}

			if(widgets.Income_Payroll_Individual_Auto_Table) {					
				policies.map(policy => {
					let tempRows = [];
					let policiesCells = [{
						id: 'left_title',
						value: 'Policies',
						classes: 'bg-blue text-white',
						icon: ''
					}];
					let annualPremiumCells = [{
						id: 'left_title',
						value: 'Anual Preminum',
						classes: 'bg-green text-white',
						icon: ''
					}];
					let levelReachedCells = [{
						id: 'left_title',
						value: 'Level Reached',
						classes: 'bg-red text-white',
						icon: ''
					}];
					let flatSAmountCells = [{
						id: 'left_title',
						value: `% of ${policy.value} Premium`,
						classes: 'bg-pink text-white',
						icon: ''
					}];
					let targetBonusEarned = [{
						id: 'left_title',
						value: 'Target Bonus Earned',
						classes: 'bg-orange text-white',
						icon: ''
					}];
					if(policy.value !== 'Total') {
						months.map((month) => { 
							policiesCells.push({
								id: month.value,
								value: main[production][month.value][UID][policy.value]['Policies'],
								classes: '',
								icon: ''
							});
							annualPremiumCells.push({
								id: month.value,
								value: main[production][month.value][UID][policy.value]['Premium'],
								classes: '',
								icon: ''
							});
							levelReachedCells.push({
								id: month.value,
								value: getLevel(main[production][month.value][UID][policy.value]['Policies'], policy.value, bonusPlans).level,
								classes: '',
								icon: ''
							});
							flatSAmountCells.push({
								id: month.value,
								value: getLevel(main[production][month.value][UID][policy.value]['Policies'], policy.value, bonusPlans).amount,
								classes: '',
								icon: ''
							});
							targetBonusEarned.push({
								id: month.value,
								value: (
									(
										main[production][month.value][UID]['Auto']['Premium'] / 2 +
										main[production][month.value][UID]['Fire']['Premium']
									) * getLevel(main[production][month.value][UID][policy.value]['Policies'], policy.value, bonusPlans).amount / 100
								),
								classes: '',
								icon: ''
							});							
						});						
					
						tempRows.push({
							id: 1,
							cells: policiesCells
						});
						tempRows.push({
							id: 2,
							cells: annualPremiumCells
						});
						tempRows.push({
							id: 3,
							cells: levelReachedCells
						});
						tempRows.push({
							id: 4,
							cells: flatSAmountCells
						});
						tempRows.push({
							id: 5,
							cells: targetBonusEarned
						});
		
						widgets = {
							...widgets, [`Income_Payroll_Individual_${policy.value}_Table`]: {
								...widgets[`Income_Payroll_Individual_${policy.value}_Table`], title: 
									policy.value.toUpperCase()
							}				
						}
						widgets = {
							...widgets, [`Income_Payroll_Individual_${policy.value}_Table`]: {
								...widgets[`Income_Payroll_Individual_${policy.value}_Table`], table: {
									...widgets[`Income_Payroll_Individual_${policy.value}_Table`].table, rows: [
										...tempRows
									]
								}
							}				
						}
					}	
				});				
			}

			if(widgets.Income_Payroll_Team_Auto_Table) {					
				policies.map(policy => {
					let tempRows = [];
					let policiesCells = [{
						id: 'left_title',
						value: 'Policies',
						classes: 'bg-blue text-white',
						icon: ''
					}];
					let annualPremiumCells = [{
						id: 'left_title',
						value: 'Anual Preminum',
						classes: 'bg-green text-white',
						icon: ''
					}];
					let levelReachedCells = [{
						id: 'left_title',
						value: 'Level Reached',
						classes: 'bg-red text-white',
						icon: ''
					}];
					let flatSAmountCells = [{
						id: 'left_title',
						value: 'Avg Premium',
						classes: 'bg-pink text-white',
						icon: ''
					}];
					let targetBonusEarned = [{
						id: 'left_title',
						value: 'Target Bonus Earned',
						classes: 'bg-orange text-white',
						icon: ''
					}];
					if(policy.value !== 'Total') {						
						months.map((month) => { 
							let policySum = 0;
							let premiumSum = 0;		
							let bonusEarnedSum = 0;				
							users.map(user => {
								if(user.belongTo === belongTo) {
									const policyCount = parseFloat(main[production][month.value][user.id][policy.value]['Policies']);
									policySum += parseFloat(main[production][month.value][user.id][policy.value]['Policies']);
									premiumSum += parseFloat(main[production][month.value][user.id][policy.value]['Premium']);									
									bonusEarnedSum += parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount);
								}
							});
							policiesCells.push({
								id: month.value,
								value: policySum,
								classes: '',
								icon: ''
							});
							annualPremiumCells.push({
								id: month.value,
								value: premiumSum,
								classes: '',
								icon: ''
							});
							levelReachedCells.push({
								id: month.value,
								value: getLevel(policySum, `Team${policy.value}`, bonusPlans).level,
								classes: '',
								icon: ''
							});						
							targetBonusEarned.push({
								id: month.value,
								value: bonusEarnedSum,
								classes: '',
								icon: ''
							});							
						});						
					
						tempRows.push({
							id: 1,
							cells: policiesCells
						});
						tempRows.push({
							id: 2,
							cells: annualPremiumCells
						});
						tempRows.push({
							id: 3,
							cells: levelReachedCells
						});						
						tempRows.push({
							id: 4,
							cells: targetBonusEarned
						});
		
						widgets = {
							...widgets, [`Income_Payroll_Team_${policy.value}_Table`]: {
								...widgets[`Income_Payroll_Team_${policy.value}_Table`], title: 
									policy.value.toUpperCase()
							}				
						}
						widgets = {
							...widgets, [`Income_Payroll_Team_${policy.value}_Table`]: {
								...widgets[`Income_Payroll_Team_${policy.value}_Table`], table: {
									...widgets[`Income_Payroll_Team_${policy.value}_Table`].table, rows: [
										...tempRows
									]
								}
							}				
						}
					}	
				});				
			}
		}
		
		console.log('--------------------------widgets:', widgets)

		setData({ widgets });
	}, [widgets, main]);
	
	function handleChangeTab(event, value) { 		
		setTabValue(value);
	}

	if (loading) {
		return <FuseLoading />;
	}

	if (data.length === 0) {
		return (
			<FuseAnimate delay={100}>
				<div className="flex flex-1 items-center justify-center h-full">
					<Typography color="textSecondary" variant="h5">
						There are no data!
					</Typography>
				</div>
			</FuseAnimate>
		);
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<Header title={title} />				
			}
			contentToolbar={
				<Tabs
					value={tabValue}
					onChange={handleChangeTab}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
					classes={{ root: 'w-full h-64' }}
				>
					<Tab className="h-64 normal-case" label="PAYROLL" />
					<Tab className="h-64 normal-case" label="INDIVIDUAL TARGET BONUS" />
					<Tab className="h-64 normal-case" label="TEAM TARGET BONUS" />					
				</Tabs>
			}
			content={
				<div className="w-full p-12">
					{tabValue===0 &&
						<div>
							<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
								<div className="p-12">
									<Table data={data.widgets.Income_Payroll_Table} />
								</div>						
							</FuseAnimateGroup>
						</div>
					}		
					{tabValue===1 &&
						<div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Individual_Auto_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Individual_Fire_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Individual_Life_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Individual_Health_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Individual_Bank_Table} />						
								</FuseAnimateGroup>	
							</div>
						</div>
					}	
					{tabValue===2 &&
						<div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Team_Auto_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Team_Fire_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Team_Life_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Team_Health_Table} />						
								</FuseAnimateGroup>	
							</div>
							<div className='p-12'>
								<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>								
									<SpecialTable widget={data.widgets.Income_Payroll_Team_Bank_Table} />						
								</FuseAnimateGroup>	
							</div>
						</div>
					}			
				</div>				
			}
			innerScroll
		/>
	);
}

export default withReducer('incomeApp', reducer)(IncomePayroll);
