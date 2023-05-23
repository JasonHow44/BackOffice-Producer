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
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getLapseRate, selectLapseRate } from '../store/lapseRateSlice';
import { getPolicyGrowth, selectPolicyGrowth } from '../store/policyGrowthSlice';
import { getMarketings, selectMarketings } from '../store/marketingsSlice';
import { getEntries, selectEntries } from '../store/entriesSlice';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision } from '../store/visionSlice';
import { policies, Options as options } from '../../../utils/Globals';
import { dividing, getLevel, getMain } from '../../../utils/Function';

const belongTo = sessionStorage.getItem('@BELONGTO');
const UID = sessionStorage.getItem('@UID');

function Multiline(props) {
	const dispatch = useDispatch();
	const routeParams = useParams();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const marketings = useSelector(selectMarketings);
	const bonusPlans = useSelector(selectBonusPlans);
	const lapseRate = useSelector(selectLapseRate);
	const policyGrowth = useSelector(selectPolicyGrowth);
	const entries = useSelector(selectEntries);
	const vision = useSelector(selectVision);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [main, setMain] = useState({});
	const [period, setPeriod] = useState(moment().format('MMMM'));
	const [year, setYear] = useState(moment().format('yyyy')); 
	const [production, setProduction] = useState("Show Written Production");
	const [title, setTitle] = useState('Production Report');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getLapseRate(year));
		dispatch(getPolicyGrowth(year));
		dispatch(getMarketings());
		dispatch(getEntries(year));
		dispatch(getVision(year));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {				
		if(users.length>0 && entries.length>0) {	
			const temp = getMain(entries, bonusPlans, marketings, users, vision, lapseRate, policyGrowth);										
			setMain(temp);
		}
	}, [entries, bonusPlans, marketings, users, vision, lapseRate, policyGrowth]);
	
	useEffect(() => {
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Production_Multiline_Individual_Table) {
				let tableContent = {};	
				let total = { "Sales Goal": 0, "Number of Policies": 0, "Policy Premium": 0, "Average Premium": 0 };
				policies.map(policy => {					
					tableContent[policy.value] = { 'Sales Goal': 0, 'Actual Sales': 0, 'Total Premium / Dollars': 0, 'Average Premium / Dollars': 0 };
					if(policy.value!=='Total') {
						users.map(user => {
							if(user.id === UID) {								
								total["Sales Goal"] += main[production][period][user.id][policy.value]["Goals"]; 
								total["Number of Policies"] += main[production][period][user.id][policy.value]["Policies"];
								total["Policy Premium"] += main[production][period][user.id][policy.value]["Premium"];
								total["Average Premium"] = dividing(total['Policy Premium'], total['Number of Policies']);

								tableContent[policy.value]['Sales Goal'] = main[production][period][user.id][policy.value]['Goals'];	
								tableContent[policy.value]['Actual Sales'] = main[production][period][user.id][policy.value]['Policies'];										
								tableContent[policy.value]['Total Premium / Dollars'] = main[production][period][user.id][policy.value]['Premium'];										
								tableContent[policy.value]['Average Premium / Dollars'] =  main[production][period][user.id][policy.value]['Averages'];	
							}																								
						});					
					}
				});	
				tableContent['Total']['Sales Goal'] = total['Sales Goal'];	
				tableContent['Total']['Actual Sales'] = total['Number of Policies'];										
				tableContent['Total']['Total Premium / Dollars'] = total['Policy Premium'];										
				tableContent['Total']['Average Premium / Dollars'] = dividing(total['Policy Premium'], total['Number of Policies']);	

				widgets = {
					...widgets, Production_Multiline_Individual_Table: {
						...widgets.Production_Multiline_Individual_Table, table: {
							...widgets.Production_Multiline_Individual_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}

			if(widgets.Production_Multiline_Agency_Table) {
				let tableContent = {};	
				let total = { "Sales Goal": 0, "Number of Policies": 0, "Policy Premium": 0, "Average Premium": 0 };
				policies.map(policy => {					
					tableContent[policy.value] = { 'Sales Goal': 0, 'Actual Sales': 0, 'Total Premium / Dollars': 0, 'Average Premium / Dollars': 0 };
					if(policy.value!=='Total') {
						users.map(user => {
							if(user.belongTo === belongTo) {
								
								total["Sales Goal"] += main[production][period][user.id][policy.value]["Goals"]; 
								total["Number of Policies"] += main[production][period][user.id][policy.value]["Policies"];
								total["Policy Premium"] += main[production][period][user.id][policy.value]["Premium"];
								total["Average Premium"] = dividing(total['Policy Premium'], total['Number of Policies']);

								tableContent[policy.value]['Sales Goal'] += main[production][period][user.id][policy.value]['Goals'];	
								tableContent[policy.value]['Actual Sales'] += main[production][period][user.id][policy.value]['Policies'];										
								tableContent[policy.value]['Total Premium / Dollars'] += main[production][period][user.id][policy.value]['Premium'];										
								tableContent[policy.value]['Average Premium / Dollars'] = dividing(tableContent[policy.value]['Total Premium / Dollars'], tableContent[policy.value]['Actual Sales']);	
							}																								
						});					
					}
				});	
				tableContent['Total']['Sales Goal'] = total['Sales Goal'];	
				tableContent['Total']['Actual Sales'] = total['Number of Policies'];										
				tableContent['Total']['Total Premium / Dollars'] = total['Policy Premium'];										
				tableContent['Total']['Average Premium / Dollars'] = dividing(total['Policy Premium'], total['Number of Policies']);

				widgets = {
					...widgets, Production_Multiline_Agency_Table: {
						...widgets.Production_Multiline_Agency_Table, table: {
							...widgets.Production_Multiline_Agency_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}
		
			if(widgets.Production_Multiline_Individual_Chart) {		
				let tempDatasets = [];
				Object.keys(widgets.Production_Multiline_Individual_Chart.mainChart.TW.datasets).map((key, n) => {
					users.map(user => {
						if(user.id === UID) {
							let temp = widgets.Production_Multiline_Individual_Chart.mainChart.TW.datasets[key];
							let tempData = [];
							if(n === 0)
								widgets.Production_Multiline_Individual_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
									tempData.push(main[production][period][user.id][policy]["Goals"]);
								})
							else if(n === 1)
								widgets.Production_Multiline_Individual_Chart.mainChart.options.scales.xAxes[0].labels.map((policy) => {
									tempData.push(main[production][period][user.id][policy]["Policies"]);
								})

							temp = {...temp, data: tempData}
							tempDatasets.push(temp);
						}
					})
				}); 
				widgets = {
					...widgets, Production_Multiline_Individual_Chart: 
						{...widgets.Production_Multiline_Individual_Chart, mainChart: {
							...widgets.Production_Multiline_Individual_Chart.mainChart, TW: {
								...widgets.Production_Multiline_Individual_Chart.mainChart.TW, datasets: [
									...tempDatasets
								] 
							}
						}
					}
				};
			} 

			if(widgets.Production_Multiline_Team_Chart) {		
				let tempDatasets = [];
				let tempData1 = [];
				let tempData2 = [];
				let temp1 = widgets.Production_Multiline_Team_Chart.mainChart.TW.datasets[0];	
				let temp2 = widgets.Production_Multiline_Team_Chart.mainChart.TW.datasets[1];
				const tableContent = widgets.Production_Multiline_Agency_Table.table.tableContent;
				const labels = widgets.Production_Multiline_Team_Chart.mainChart.options.scales.xAxes[0].labels;					
				labels.map(label => {				
					tempData1.push(tableContent[label]['Sales Goal']);
					tempData2.push(tableContent[label]['Actual Sales']);
				});
				temp1 = { ...temp1, data: tempData1 };
				temp2 = { ...temp2, data: tempData2 };
				tempDatasets.push(temp1);				
				tempDatasets.push(temp2);

				widgets = {
					...widgets, Production_Multiline_Team_Chart: {
						...widgets.Production_Multiline_Team_Chart, mainChart: {
							...widgets.Production_Multiline_Team_Chart.mainChart, TW: {
								...widgets.Production_Multiline_Team_Chart.mainChart.TW, datasets: [
									...tempDatasets
								] 
							}
						}
					}
				};
			}

			if(widgets.Production_Multiline_Soueces_Table) {
				let headers = [];
				let total = {};
				Object.keys(marketings).map((key) => {
					const marketing = marketings[key];
					headers.push({ 
						id: marketing.id, 
						value: marketing.marketingName, 
						color: "" 
					});	
					total[marketing.marketingName] = 0;
				}); 
				Object.keys(widgets.Production_Multiline_Soueces_Table.table.tableContent).map((policy) => {							
					widgets = {
						...widgets, Production_Multiline_Soueces_Table: {
							...widgets.Production_Multiline_Soueces_Table, table: {
									...widgets.Production_Multiline_Soueces_Table.table, headers: [...headers]							
							}
						}
					};			
				}); 
				
				Object.keys(widgets.Production_Multiline_Soueces_Table.table.tableContent).map((policy) => {
					Object.keys(marketings).map((key) => {
						users.map(user => {
							if(user.id === UID) {
								const marketing = marketings[key];
								total[marketing.marketingName] += main[production][period][user.id][policy][marketing.marketingName];	
								widgets = policy!=="Total" ?
								{
									...widgets, Production_Multiline_Soueces_Table: {
										...widgets.Production_Multiline_Soueces_Table, table: {
											...widgets.Production_Multiline_Soueces_Table.table, tableContent: {
												...widgets.Production_Multiline_Soueces_Table.table.tableContent, [policy]: {
													...widgets.Production_Multiline_Soueces_Table.table.tableContent[policy], [marketing.marketingName]: 
														main[production][period][user.id][policy][marketing.marketingName]										
												}
											}
										}
									}
								} :
								{
									...widgets, Production_Multiline_Soueces_Table: {
										...widgets.Production_Multiline_Soueces_Table, table: {
											...widgets.Production_Multiline_Soueces_Table.table, tableContent: {
												...widgets.Production_Multiline_Soueces_Table.table.tableContent, [policy]: {
													...widgets.Production_Multiline_Soueces_Table.table.tableContent[policy], [marketing.marketingName]: 
														total[marketing.marketingName]									
												}
											}
										}
									}
								}
							}
						})			
					}); 				
				}); 
			}

			if(widgets.Production_Multiline_Bonuses_Table) {				
				let tableContent = {};
				const tableRows = widgets.Production_Multiline_Bonuses_Table.table.rows;
				const tableHeaders = widgets.Production_Multiline_Bonuses_Table.table.headers;
				tableRows.map(row => {
					tableContent[row.value] = {};
					tableHeaders.map(header => {
						tableContent[row.value][header.value] = 0;
					});
				});		
				policies.map((policy) => {	
					users.map(user => {
						if(user.id === UID) {
							const policyCount = main[production][period][user.id][policy.value]["Policies"];
							if(policy.value !== 'Total') {
								tableContent[policy.value]["Initial Item Bonuses"] = parseFloat(main[production][period][user.id][policy.value]["Bonuses"]);
								tableContent[policy.value]["Individual Target Bonuses"] = parseFloat(
									(
										main[production][period][user.id]['Auto']['Premium'] / 2 +
										main[production][period][user.id]['Fire']['Premium']
									) * getLevel(policyCount, policy.value, bonusPlans).amount / 100
								);	
								tableContent[policy.value]["Team Target Bonuses"] = parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount);
								tableContent[policy.value]["Policy Growth Bonuses"] = main[production][period][user.id][policy.value]['growthBonus'];
								tableContent[policy.value]["Lapse Rate Bonuses"] = main[production][period][user.id][policy.value]['lapseBonus'];
								tableContent[policy.value]["Special Promotion"] = main[production][period][user.id][policy.value]['specialPromotion'];

								tableContent['Total']["Initial Item Bonuses"] += parseFloat(main[production][period][user.id][policy.value]["Bonuses"]);
								tableContent['Total']["Individual Target Bonuses"] += parseFloat(
									(
										main[production][period][user.id]['Auto']['Premium'] / 2 +
										main[production][period][user.id]['Fire']['Premium']
									) * getLevel(policyCount, policy.value, bonusPlans).amount / 100
								);	
								tableContent['Total']["Team Target Bonuses"] += (parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount));
								tableContent['Total']["Policy Growth Bonuses"] += parseFloat(main[production][period][user.id][policy.value]['growthBonus']);
								tableContent['Total']["Lapse Rate Bonuses"] += parseFloat(main[production][period][user.id][policy.value]['lapseBonus']);
								tableContent['Total']["Special Promotion"] += parseFloat(main[production][period][user.id][policy.value]['specialPromotion']);

								tableContent[policy.value]['Total Bonus'] = 
									parseFloat(main[production][period][user.id][policy.value]["Bonuses"]) +
									parseFloat(
										(
											main[production][period][user.id]['Auto']['Premium'] / 2 +
											main[production][period][user.id]['Fire']['Premium']
										) * getLevel(policyCount, policy.value, bonusPlans).amount / 100
									) +
									parseFloat(getLevel(policyCount, `Team${policy.value}`, bonusPlans).amount) +
									parseFloat(main[production][period][user.id][policy.value]['growthBonus']) +
									parseFloat(main[production][period][user.id][policy.value]['lapseBonus']) +
									parseFloat(main[production][period][user.id][policy.value]['specialPromotion']);
									
								tableContent['Total']['Total Bonus'] +=tableContent[policy.value]['Total Bonus'];	
							} 
						}
					});
				});	
				
				widgets = {
					...widgets, Production_Multiline_Bonuses_Table: {
						...widgets.Production_Multiline_Bonuses_Table, table: {
							...widgets.Production_Multiline_Bonuses_Table.table, tableContent: 
								tableContent							
						}
					}
				}				
			}

			if(widgets.Production_Multiline_Product_PieChart) {						
				let tempDatasets = [];							
				const tableContent = widgets.Production_Multiline_Bonuses_Table.table.tableContent;	
				Object.keys(widgets.Production_Multiline_Product_PieChart.mainChart.datasets).map((key) => {
					let temp = widgets.Production_Multiline_Product_PieChart.mainChart.datasets[key];
					let tempData = [];
					widgets.Production_Multiline_Product_PieChart.mainChart.labels.map((policy) => {
						tempData.push(
							Math.round(
								dividing(
									tableContent[policy]['Total Bonus'],
									tableContent['Total']['Total Bonus']
								) * 100
							)
						);
					})

					temp = {...temp, data: tempData}
					tempDatasets.push(temp);
				}); 
				widgets = {
					...widgets, Production_Multiline_Product_PieChart: 
						{...widgets.Production_Multiline_Product_PieChart, mainChart: {
							...widgets.Production_Multiline_Product_PieChart.mainChart, datasets: [
								...tempDatasets
							] 
						}
					}
				};
			} 

			if(widgets.Production_Multiline_Bonus_PieChart) {		
				let tempDatasets = [];
				const tableContent = widgets.Production_Multiline_Bonuses_Table.table.tableContent;					
				Object.keys(widgets.Production_Multiline_Bonus_PieChart.mainChart.datasets).map((key) => {
					let temp = widgets.Production_Multiline_Bonus_PieChart.mainChart.datasets[key];
					let tempData = [];
					widgets.Production_Multiline_Bonus_PieChart.mainChart.labels.map((label) => {
						tempData.push(
							Math.round(
								dividing(
									tableContent['Total'][label],
									tableContent['Total']['Total Bonus']
								) * 100
							)
						);
					})

					temp = {...temp, data: tempData}
					tempDatasets.push(temp);
				}); 
				widgets = {
					...widgets, Production_Multiline_Bonus_PieChart: 
						{...widgets.Production_Multiline_Bonus_PieChart, mainChart: {
							...widgets.Production_Multiline_Bonus_PieChart.mainChart, datasets: [
								...tempDatasets
							] 
						}
					}
				};
			} 
		}
		
		console.log('--------------------------widgets:', widgets)
		setData({ widgets });
	}, [widgets, main, period, production]);

	function handleChangePeriod(event) { 
		setPeriod(event.target.value);
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
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={period}
								onChange={ev => handleChangePeriod(ev)}
								label="Report Period"
								data={options.period.data}
							/>
						</FuseAnimate>
					</div>
				</Header>
			}
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/2 p-12">
							<Table data={data.widgets.Production_Multiline_Individual_Table} />
						</div>						
						<div className="widget flex w-1/2 p-12">
							<Table data={data.widgets.Production_Multiline_Agency_Table} />
						</div>						
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>						
						<div className="widget flex w-1/2 p-12">
							<Chart widget={data.widgets.Production_Multiline_Individual_Chart} />
						</div>						
						<div className="widget flex w-1/2 p-12">
							<Chart widget={data.widgets.Production_Multiline_Team_Chart} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-full p-12">
							<Table data={data.widgets.Production_Multiline_Soueces_Table} />
						</div>					
					</FuseAnimateGroup>	
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-1/4 p-12">
							<PieChart widget={data.widgets.Production_Multiline_Product_PieChart} />
						</div>	
						<div className="widget flex w-2/4 p-12">
							<Table data={data.widgets.Production_Multiline_Bonuses_Table} />
						</div>	
						<div className="widget flex w-1/4 p-12">
							<PieChart widget={data.widgets.Production_Multiline_Bonus_PieChart} />
						</div>					
					</FuseAnimateGroup>					
				</div>				
			}
			innerScroll
		/>
	);
}

export default withReducer('productionApp', reducer)(Multiline);

