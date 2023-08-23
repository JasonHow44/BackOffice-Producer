import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
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
import Table from '../../../components/widgets/Table';
import SpecialTable from '../../../components/widgets/SpecialTable';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { monthsAndQuarters, bonusPlanDbNames, policiesAndPremium1, Options as options, policies } from '../../../utils/Globals';
import { dividing, getMain } from '../../../utils/Function';

const belongTo = sessionStorage.getItem('@BELONGTO');
const UID = sessionStorage.getItem('@UID');

function ProductLine(props) {
	const dispatch = useDispatch();	
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [year, setYear] = useState(moment().format('yyyy')); 
	const [period, setPeriod] = useState(moment().format('MMMM'));
	const [production, setProduction] = useState("Show Written Production");
	const [report, setReport] = useState("Policies");
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Product & Activity Summary');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getMarketings());
		dispatch(getEntries(year));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {				
		if(users.length>0 && Object.keys(marketings).length>0 && entries.length>0) {	
			const temp = getMain(entries, bonusPlans, marketings, users);										
			setMain(temp);
		}
	}, [entries, bonusPlans, marketings, users]);

	useEffect(() => { 
		let policy = '';
		if(tabValue === 0)
			policy = 'Auto';
		if(tabValue === 1)
			policy = 'Fire';
		if(tabValue === 2)
			policy = 'Life';
		if(tabValue === 3)
			policy = 'Health';
		if(tabValue === 4)
			policy = 'Bank';
		
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			const bonusPlan = bonusPlans.length > 0 && bonusPlans[0].hasOwnProperty(bonusPlanDbNames[policy].db) ? bonusPlans[0][bonusPlanDbNames[policy].db] : {};
			if(widgets.Production_ProductLine_Table_1) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(bonusPlan).map((key) => {		
					const item = bonusPlan[key];
					headers.push({
						id: item.name,
						value: item.name,
						color: '' 
					});
				});	
				headers.push({
					id: 'bonus',
					value: 'Bonus',
					color: '',
					startAdornment: '$'
				});

				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item, col) => {	
						let itemValue = '';
						if(item.value === 'Average Premium') {
							itemValue = 'Averages';
						} else if (item.value === 'Number of Policies') {
							itemValue = 'Policies';
						} else if(item.value === 'Policy Premium') {
							itemValue = 'Premium';
						}
						tableContent[month.value][item.value] = main[production][month.value][UID][policy][itemValue];								
					});	
					Object.keys(bonusPlan).map((key) => {		
						const item = bonusPlan[key];			
						tableContent[month.value][item.name] = main[production][month.value][UID][policy][item.name];		
					});	
					
					tableContent[month.value]['Bonus'] = main[production][month.value][UID][policy]['Bonuses'];	
				}); 
				widgets = {
					...widgets, Production_ProductLine_Table_1: {
						...widgets.Production_ProductLine_Table_1, table: {
							...widgets.Production_ProductLine_Table_1.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Production_ProductLine_Table_1: {
						...widgets.Production_ProductLine_Table_1, table: {
							...widgets.Production_ProductLine_Table_1.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Production_ProductLine_Table_2) {
				let headers = [ ...policiesAndPremium1 ];
				let tableContent = {};

				Object.keys(marketings).map((key) => {		
					const item = marketings[key];
					headers.push({
						id: item.marketingName,
						value: item.marketingName,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};			
					policiesAndPremium1.map((item, col) => {	
						let itemValue = '';
						if(item.value === 'Average Premium') {
							itemValue = 'Averages';
						} else if (item.value === 'Number of Policies') {
							itemValue = 'Policies';
						} else if(item.value === 'Policy Premium') {
							itemValue = 'Premium';
						}			
						tableContent[month.value][item.value] = main[production][month.value][UID][policy][itemValue];								
					});	
					Object.keys(marketings).map((key) => {		
						const item = marketings[key];			
						tableContent[month.value][item.marketingName] = main[production][month.value][UID][policy][item.marketingName];		
					});	
				}); 
				widgets = {
					...widgets, Production_ProductLine_Table_2: {
						...widgets.Production_ProductLine_Table_2, table: {
							...widgets.Production_ProductLine_Table_2.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Production_ProductLine_Table_2: {
						...widgets.Production_ProductLine_Table_2, table: {
							...widgets.Production_ProductLine_Table_2.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Production_ProductLine_Table_3) {
				let headers = [];
				let tableContent = {};

				Object.keys(bonusPlan).map((key) => {		
					const item = bonusPlan[key];
					headers.push({
						id: item.name,
						value: item.name,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};						
					Object.keys(bonusPlan).map((key) => {		
						const item = bonusPlan[key];			
						tableContent[month.value][item.name] = main[production][month.value][UID][policy][item.name];		
					});	
				}); 
				widgets = {
					...widgets, Production_ProductLine_Table_3: {
						...widgets.Production_ProductLine_Table_3, table: {
							...widgets.Production_ProductLine_Table_3.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Production_ProductLine_Table_3: {
						...widgets.Production_ProductLine_Table_3, table: {
							...widgets.Production_ProductLine_Table_3.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Production_ProductLine_Table_4) {
				let headers = [];
				let tableContent = {};

				Object.keys(marketings).map((key) => {		
					const item = marketings[key];
					headers.push({
						id: item.marketingName,
						value: item.marketingName,
						color: '' 
					});
				});	
				monthsAndQuarters.map((month, row) => {
					tableContent[month.value] = {};							
					Object.keys(marketings).map((key) => {		
						const item = marketings[key];			
						tableContent[month.value][item.marketingName] = main[production][month.value][UID][policy][item.marketingName];		
					});	
				}); 
				widgets = {
					...widgets, Production_ProductLine_Table_4: {
						...widgets.Production_ProductLine_Table_4, table: {
							...widgets.Production_ProductLine_Table_4.table, headers: 
								headers							
						}
					}
				}
				widgets = {
					...widgets, Production_ProductLine_Table_4: {
						...widgets.Production_ProductLine_Table_4, table: {
							...widgets.Production_ProductLine_Table_4.table, tableContent: 
								tableContent							
						}
					}
				}
			}
		}
		console.log('--------------------------widgets:', widgets)

		setData({ widgets });
	}, [widgets, main, production, tabValue]);

	function handleChangeTab(event, value) { 		
		setTabValue(value);
	}

	function handleChangeProduction(event) {
		setProduction(event.target.value);
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
				<Header title={title}>
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={production}
								onChange={ev => handleChangeProduction(ev)}
								label="Production"
								data={options.production.data}
							/>
						</FuseAnimate>
					</div>
				</Header>
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
					<Tab className="h-64 normal-case" label="Auto" />
					<Tab className="h-64 normal-case" label="Fire" />
					<Tab className="h-64 normal-case" label="Life" />
					<Tab className="h-64 normal-case" label="Health" />
					{/* <Tab className="h-64 normal-case" label="Bank" /> */}
					{/* <Tab className="h-64 normal-case" label="Other" /> */}
				</Tabs>
			}
			content={
				<div className="w-full p-12">					
					<div>
						<div className='p-12'>
							<Table data={data.widgets.Production_ProductLine_Table_1} />							
						</div>
						<div className='p-12'>
							<Table data={data.widgets.Production_ProductLine_Table_2} />
						</div>	
						<div className='p-12'>
							<Table data={data.widgets.Production_ProductLine_Table_3} />							
						</div>
						<div className='p-12'>
							<Table data={data.widgets.Production_ProductLine_Table_4} />
						</div>
					</div>					
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('productionApp', reducer)(ProductLine);
