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
import { monthsAndQuarters, policiesAndPremium2, Options as options, policies } from '../../../utils/Globals';
import { getMain } from '../../../utils/Function';

const belongTo = sessionStorage.getItem('@BELONGTO');
const UID = sessionStorage.getItem('@UID');

function SalesResults(props) {
	const dispatch = useDispatch();
	let widgets = useSelector(selectWidgets);
	const users = useSelector(selectUsers);
	const bonusPlans = useSelector(selectBonusPlans);
	const entries = useSelector(selectEntries);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [main, setMain] = useState({});
	const [tabValue, setTabValue] = useState(0);
	const [production, setProduction] = useState("Show Written Production");
	const [bonus, setBonus] = useState('Include Initial Commission Calculation');
	const [year, setYear] = useState(moment().format('yyyy')); 
	const [period, setPeriod] = useState(moment().format('MMMM'));
	const [title, setTitle] = useState('Production Summary');
	
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getEntries(year));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch]);

	useEffect(() => {		
		if(users.length>0 && entries.length>0) {
			const temp = getMain(entries, [], [], users);										
			setMain(temp);
		}	
	}, [entries, users]);

	useEffect(() => { 
		if(widgets.Production_SalesResults_Written_Table && Object.keys(main).length>0) {
			let tableContent = {};
			monthsAndQuarters.map((month, row) => {
				tableContent[month.value] = {};
				let totalPolicies = 0;
				let totalPremium = 0;	
				policiesAndPremium2.map((item, col) => {
					const policy = item.value.split(' ')[0];
					let colName = item.value.split(' ')[1];
					if(colName === 'Products') {
						colName = 'Policies'
					} else if (colName === 'Dollars') {
						colName = 'Premium'
					} 

					totalPolicies += col<8 && col%2===0 && parseFloat(main[production][month.value][UID][policy][colName]);
					totalPremium += col<8 && col%2===1 && parseFloat(main[production][month.value][UID][policy][colName]);
					 
					tableContent[month.value][item.value] = main[production][month.value][UID][policy][colName];	
					tableContent[month.value][policiesAndPremium2[10].value] = totalPolicies;
					tableContent[month.value][policiesAndPremium2[11].value] = totalPremium;															
				});		
			}); 
			Object.keys(widgets.Production_SalesResults_Written_Table.table.tableContent).map((month, rowNum) => {					
				widgets = {
					...widgets, Production_SalesResults_Written_Table: {
						...widgets.Production_SalesResults_Written_Table, table: {
							...widgets.Production_SalesResults_Written_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}); 			
		}

		if(widgets.Production_SalesResults_Issued_Table && Object.keys(main).length>0) {
			let tableContent = {};
			monthsAndQuarters.map((month, row) => {
				tableContent[month.value] = {};
				let totalPolicies = 0;
				let totalPremium = 0;	
				policiesAndPremium2.map((item, col) => {
					const policy = item.value.split(' ')[0];
					let colName = item.value.split(' ')[1];
					if(colName === 'Products') {
						colName = 'Policies'
					} else if (colName === 'Dollars') {
						colName = 'Premium'
					}

					totalPolicies += col<8 && col%2===0 && parseFloat(main[production][month.value][UID][policy][colName]);
					totalPremium += col<8 && col%2===1 && parseFloat(main[production][month.value][UID][policy][colName]);					

					tableContent[month.value][item.value] = main[production][month.value][UID][policy][colName];	
					tableContent[month.value][policiesAndPremium2[10].value] = totalPolicies;
					tableContent[month.value][policiesAndPremium2[11].value] = totalPremium;	
				});		
			}); 
			Object.keys(widgets.Production_SalesResults_Issued_Table.table.tableContent).map((month, rowNum) => {					
				widgets = {
					...widgets, Production_SalesResults_Issued_Table: {
						...widgets.Production_SalesResults_Issued_Table, table: {
							...widgets.Production_SalesResults_Issued_Table.table, tableContent: 
								tableContent							
						}
					}
				}
			}); 			
		}

		if(widgets.Production_SalesResults_Written_Chart && Object.keys(main).length>0) {		
			let tempDatasets = [];
			Object.keys(widgets.Production_SalesResults_Written_Chart.mainChart.TW.datasets).map((key) => {
				let temp = widgets.Production_SalesResults_Written_Chart.mainChart.TW.datasets[key];
				let tempData = [];
				widgets.Production_SalesResults_Written_Chart.mainChart.options.scales.xAxes[0].labels.map((month) => {
					tempData.push(main[production][month][UID][temp.label.split(' ')[0]][temp.label.split(' ')[1]]);
				})

				temp = {...temp, data: tempData}
				tempDatasets.push(temp);
			}); 
			widgets = {
				...widgets, Production_SalesResults_Written_Chart: 
					{...widgets.Production_SalesResults_Written_Chart, mainChart: {
						...widgets.Production_SalesResults_Written_Chart.mainChart, TW: {
							...widgets.Production_SalesResults_Written_Chart.mainChart.TW, datasets: [
								...tempDatasets
							] 
						}
					}
				}
			};
		} 

		if(widgets.Production_SalesResults_Issued_Chart && Object.keys(main).length>0) {		
			let tempDatasets = [];
			Object.keys(widgets.Production_SalesResults_Issued_Chart.mainChart.TW.datasets).map((key) => {
				let temp = widgets.Production_SalesResults_Issued_Chart.mainChart.TW.datasets[key];
				let tempData = [];
				widgets.Production_SalesResults_Issued_Chart.mainChart.options.scales.xAxes[0].labels.map((month) => {
					tempData.push(main[production][month][UID][temp.label.split(' ')[0]][temp.label.split(' ')[1]]);
				})

				temp = {...temp, data: tempData}
				tempDatasets.push(temp);
			}); 
			widgets = {
				...widgets, Production_SalesResults_Issued_Chart: 
					{...widgets.Production_SalesResults_Issued_Chart, mainChart: {
						...widgets.Production_SalesResults_Issued_Chart.mainChart, TW: {
							...widgets.Production_SalesResults_Issued_Chart.mainChart.TW, datasets: [
								...tempDatasets
							] 
						}
					}
				}
			};
		}
		console.log('--------------------------widgets:', widgets)

		setData({ widgets });
	}, [widgets, main]);
	
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
			content={
				<div className="w-full p-12">
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/3 p-12">
							<Table data={data.widgets.Production_SalesResults_Written_Table} />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chart widget={data.widgets.Production_SalesResults_Written_Chart} />
						</div>
					</FuseAnimateGroup>
					<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
						<div className="widget flex w-2/3 p-12">
							<Table data={data.widgets.Production_SalesResults_Issued_Table} />
						</div>
						<div className="widget flex w-1/3 p-12">
							<Chart widget={data.widgets.Production_SalesResults_Issued_Chart} />
						</div>
					</FuseAnimateGroup>
				</div>
				
			}
			innerScroll
		/>
	);
}

export default withReducer('productionApp', reducer)(SalesResults);
