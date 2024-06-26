import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Table from '../../../components/widgets/Table';
import Chart from '../../../components/widgets/BarChart';
import PieChart from '../../../components/widgets/PieChart';
import SelectBox from '../../../components/CustomSelectBox';
import Header from '../../../components/widgets/Header';
import { getUsers, selectUsers } from '../store/usersSlice';
import { getVision, selectVision, saveVision } from '../store/visionSlice';
import { getBonusPlans, selectBonusPlans } from '../store/bonusPlansSlice';
import { getWidgets, selectWidgets } from '../store/widgetsSlice';
import { months1, policies, incomeGoalsColumns, incomeBonusesColumns, incomeAvgsRows, incomeGoalsRows, incomeGoalsHeaders, incomeBonusesHeaders, toUntrimed } from '../../../utils/Globals';
import { ceil, swap, getLevel, getOtherActivityBonus } from '../../../utils/Function';
import { dateComparer } from '@material-ui/data-grid';

const belongTo = sessionStorage.getItem('@BELONGTO');
const UID = sessionStorage.getItem('@UID');

const goalsTableColumns = incomeGoalsColumns;
const bonusesTableColumns = incomeBonusesColumns;
const goalsTableHeader = incomeGoalsHeaders;
const bonusesTableHeader = incomeBonusesHeaders;

let avgsTableContent = {};
let goalsTableContent = {};
let bonusesTableContent = {};

function IncomeGoals(props) {
	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const vision = useSelector(selectVision);
	let widgets = useSelector(selectWidgets);
	const bonusPlans = useSelector(selectBonusPlans);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({ widgets });
	const [cell, setCell] = useState({});
	const [main, setMain] = useState({});
	const [date, setDate] = useState(moment());
	const [user, setUser] = useState(UID);
	const [userList, setUserList] = useState([]);
	const [tabValue, setTabValue] = useState(0);
	const [title, setTitle] = useState('Income Goals');	

	function onSave() {	
		const toTrimed = swap(toUntrimed);
		let tempAvgs = {};
		let tempGoals = {}; 
		let tempBonuses = {};
		tempAvgs = { ...tempAvgs, id: 'averages' }
		tempGoals = { ...tempGoals, id: 'goals' }
		tempBonuses = { ...tempBonuses, id: 'bonuses' }
		
		Object.keys(avgsTableContent).map((row) => {
			Object.keys(avgsTableContent[row]).map((col) => {
				tempAvgs = { 
					...tempAvgs, [toTrimed[row]]: { 
						...tempAvgs[toTrimed[row]], [col]: 
							avgsTableContent[row][col] 
					} 
				} 
			});
		});
		Object.keys(goalsTableContent).map((row) => {
			Object.keys(goalsTableContent[row]).map((col) => {
				tempGoals = { 
					...tempGoals, [row]: { 
						...tempGoals[row], [toTrimed[col]]: 
							goalsTableContent[row][col] 
					} 
				} 
			});
		});
		Object.keys(bonusesTableContent).map((row) => {
			Object.keys(bonusesTableContent[row]).map((col) => {
				tempBonuses = { 
					...tempBonuses, [row]: { 
						...tempBonuses[row], [toTrimed[col]]: 
							bonusesTableContent[row][col] 
					} 
				} 
			});
		});
		dispatch(saveVision({ Averages: tempAvgs, Goals: tempGoals, Bonuses: tempBonuses, year: moment(date).format('yyyy') }));
	}

	useEffect(() => {
		dispatch(getUsers());
		dispatch(getBonusPlans());
		dispatch(getVision(moment(date).format('yyyy')));
		dispatch(getWidgets()).then(() => setLoading(false));
	}, [dispatch, date]);

	useEffect(() => {
		var temp = [];
		if (users.length > 0) {
			users.map(user => {
				if(user.belongTo === UID)
					temp.push({ item: user.data.displayName, value: user.id });
			});
			setUserList(temp);
		}
	}, [users]);

	useEffect(() => {
		let otherActivityBonus = {};
		if (bonusPlans.length > 0 && bonusPlans[0].hasOwnProperty('otherActivityBonus')) {
			otherActivityBonus = bonusPlans[0].otherActivityBonus;
			// console.log('OtherActivityBonus===', otherActivityBonus);
		}

		if (!_.isEmpty(otherActivityBonus)) {
			if (goalsTableColumns.length > 3) {
				goalsTableColumns.pop()
				bonusesTableColumns.splice(bonusesTableColumns.length - 2, 1)
				goalsTableHeader.splice(12, goalsTableHeader.length - 12)
				bonusesTableHeader.splice(10, bonusesTableHeader.length - 10)
			}
			goalsTableColumns.push({
				id: 'otherActivityGoals',
				title: 'OTHER ACTIVY GOALS',
				color: '',
				colSpan: Object.keys(otherActivityBonus).length
			});

			bonusesTableColumns.splice(bonusesTableColumns.length - 1, 0, {
				id: 'otherActivityBonuses',
				title: 'Other Activity Bonuses',
				color: '',
				colSpan: Object.keys(otherActivityBonus).length
			});

			Object.keys(otherActivityBonus).map(key => {
				const item = otherActivityBonus[key];
				goalsTableHeader.push({
					id: item.id,
					value: item.name,
					type: false,
					color: '',
					startAdornment: '$'
				});
				bonusesTableHeader.push({
					id: item.id,
					value: item.name,
					type: false,
					color: '',
					startAdornment: '$'
				});
			});

			bonusesTableHeader.push({
				id: 'totalBonusGoal',
				value: 'Total Bonus Goal',
				type: false,
				hidden: true,
				color: '',
				startAdornment: '$'
			});
		}

		// avg table content
		incomeAvgsRows.map(row => {
			avgsTableContent[row.value] = {};
			policies.map(policy => {
				avgsTableContent[row.value][policy.value] = 0;
			});
			delete avgsTableContent[row.value].Total;
		});

		if (user != '') {
			if (vision.length > 0) {
				if (vision[0].hasOwnProperty(user)) {
					const visionData = vision[0][user];
					// averages
					Object.keys(visionData.Averages).map(key => {
						if (key !== 'id')
							Object.keys(visionData.Averages[key]).map(valKey => {
								avgsTableContent[toUntrimed[key]][valKey] = parseFloat(
									visionData.Averages[key][valKey]
								);
							});
					});
					// bonuses
					months1.map(month => {
						bonusesTableContent[month] = {};
					});
					// goals
					if (bonusPlans.length > 0){
						months1.map((month, row) => {
							goalsTableContent[month] = {};
							goalsTableHeader.map((header, col) => {
								calculateBounses({
									row,
									col,
									rowKey: month,
									colKey: header.value,
									value: visionData.Goals[month][header.id]
								})
								goalsTableContent[month][header.value] = visionData.Goals[month][header.id];
							});
						});
					}
					// bonuses
					months1.map(month => {
						const total = bonusesTableHeader.reduce((sum, header) => {
							if (header.value !== 'Total Bonus Goal') {
								sum += bonusesTableContent[month][header.value] || 0
							}
							return sum
						}, 0);

						if (bonusesTableHeader.find(item => item.value === 'Total Bonus Goal')) {
							bonusesTableContent[month]['Total Bonus Goal'] = total
						}
					});
				}
			} else {
				// goals table content
				months1.map(month => {
					goalsTableContent[month] = {};
					goalsTableHeader.map(header => {
						goalsTableContent[month][header.value] = 0;
					});
				});

				// bonuses table content
				months1.map(month => {
					bonusesTableContent[month] = {};
					bonusesTableHeader.map(header => {
						bonusesTableContent[month][header.value] = 0;
					});
				});
			}
		}

		setMain({
			avgsTableContent,
			goalsTableColumns,
			goalsTableHeader,
			goalsTableContent,
			bonusesTableColumns,
			bonusesTableHeader,
			bonusesTableContent
		});
	}, [vision, user, bonusPlans]);
	
	useEffect(() => { 
		if(!_.isEmpty(widgets) && !_.isEmpty(main)) {
			if(widgets.Vision_IncomeGoals_Averages_Table) {
				widgets = { 
					...widgets, Vision_IncomeGoals_Averages_Table: { 
						...widgets.Vision_IncomeGoals_Averages_Table, table: {
							...widgets.Vision_IncomeGoals_Averages_Table.table, tableContent: 
								main.avgsTableContent					
						}
					}	
				};
				widgets = { 
					...widgets, Vision_IncomeGoals_Goals_Table: { 
						...widgets.Vision_IncomeGoals_Goals_Table, table: {
							...widgets.Vision_IncomeGoals_Goals_Table.table,
							columns: main.goalsTableColumns,
							headers: main.goalsTableHeader,
							tableContent: main.goalsTableContent
						}						
					}
				};
				widgets = { 
					...widgets, Vision_IncomeGoals_Bonuses_Table: { 
						...widgets.Vision_IncomeGoals_Bonuses_Table, table: {
							...widgets.Vision_IncomeGoals_Bonuses_Table.table,
							columns: main.bonusesTableColumns,
							headers: main.bonusesTableHeader,
							tableContent: main.bonusesTableContent
						}						
					}
				}		
			}
		}		
		
		console.log('----widgets=', widgets)
		
		setData({ widgets });
	}, [widgets, main]);

	useEffect(() => { 	
		const tableName = cell.tableName;
		const row = cell.row;
		const col = cell.col;
		const rowKey = cell.rowKey;
		const colKey = cell.colKey;
		const value = parseFloat(cell.value === '' ? 0 : cell.value);
		let value1 = 0;	
		let r = row;	
		const maxRow = 16;
		const skipCol = 5;

		if(tableName === "AVERAGES") {
			avgsTableContent = { 				
				...avgsTableContent, [rowKey]: { 
					...avgsTableContent[rowKey], [colKey]: value 
				} 					
			};
			r = 0;	
		}
			
		const avgCols = Object.keys(avgsTableContent["Average Annual Premium"]);
		const goalCols = Object.keys(goalsTableContent["January"]);
		const bonusCols = Object.keys(bonusesTableContent["January"]);
		for (let i = r; i < 12; i++) {
			const t = (i - i % 3) / 3 + 12; 
			if(tableName==="AVERAGES")
				value1 = parseFloat(goalsTableContent[months1[i]][goalCols[col]] * value);
			else 						
				value1 = parseFloat(value * avgsTableContent["Average Annual Premium"][avgCols[col]]);

			if(tableName === "GOALS") {	
				// Policies				
				goalsTableContent[months1[i]][colKey] = value
				// Total Policies				
				goalsTableContent[months1[i]][goalCols[skipCol]] = 
					goalsTableContent[months1[i]][goalCols[0]]+
					goalsTableContent[months1[i]][goalCols[1]]+
					goalsTableContent[months1[i]][goalCols[2]]+
					goalsTableContent[months1[i]][goalCols[3]]+
					goalsTableContent[months1[i]][goalCols[4]]; 
				// Quarter Policies				
				goalsTableContent[months1[t]][goalCols[col]] = 	
					goalsTableContent[months1[(t-12)*3]][goalCols[col]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[col]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[col]]; 		
				// Total Policies				
				goalsTableContent[months1[t]][goalCols[skipCol]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[skipCol]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[skipCol]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[skipCol]];
				// Annual Total Policies				
				goalsTableContent[months1[maxRow]][goalCols[col]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[col]]+
					goalsTableContent[months1[maxRow-3]][goalCols[col]]+
					goalsTableContent[months1[maxRow-2]][goalCols[col]]+
					goalsTableContent[months1[maxRow-1]][goalCols[col]];
				// Total				
				goalsTableContent[months1[maxRow]][goalCols[skipCol]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-3]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-2]][goalCols[skipCol]]+
					goalsTableContent[months1[maxRow-1]][goalCols[skipCol]];
			}	

			if((tableName==='GOALS' &&  col<6) || tableName==='AVERAGES' && row===1) {
				// Premium				
				goalsTableContent[months1[i]][goalCols[col+skipCol+1]] = value1;
				if(col === 0) {
					bonusesTableContent[months1[i]][bonusCols[col]] = value1 * avgsTableContent["Average Commission"][avgCols[col]] / (2 * 100);						
				}					
				else {
					bonusesTableContent[months1[i]][bonusCols[col]] = value1 * avgsTableContent["Average Commission"][avgCols[col]] / 100;					
				}	
				const level = getLevel(goalsTableContent[months1[i]][goalCols[col]], policies[col].value, bonusPlans);
				bonusesTableContent[months1[i]][bonusCols[col+skipCol]] = Math.round(
					(
						goalsTableContent[months1[i]]['Annual Auto Premium'] / 2 +
						goalsTableContent[months1[i]]['Annual Fire Premium']
					) * level.amount / 100
				);
																			
				// Total Premium				
				goalsTableContent[months1[i]][goalCols[2*skipCol+1]] = 
					goalsTableContent[months1[i]][goalCols[skipCol+1]]+
					goalsTableContent[months1[i]][goalCols[skipCol+2]]+
					goalsTableContent[months1[i]][goalCols[skipCol+3]]+
					goalsTableContent[months1[i]][goalCols[skipCol+4]];				
				// Quarter Premium				
				goalsTableContent[months1[t]][goalCols[col+skipCol+1]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[col+skipCol+1]];
				bonusesTableContent[months1[t]][bonusCols[col]] = 	
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col]]; 	
				bonusesTableContent[months1[t]][bonusCols[col+skipCol]] = 	
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col+skipCol]]; 	
				// Total Premium				
				goalsTableContent[months1[t]][goalCols[2*skipCol+1]] = 
					goalsTableContent[months1[(t-12)*3]][goalCols[2*skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+1]][goalCols[2*skipCol+1]]+
					goalsTableContent[months1[(t-12)*3+2]][goalCols[2*skipCol+1]];			
				bonusesTableContent[months1[t]][bonusCols[col+skipCol]] = 
					bonusesTableContent[months1[(t-12)*3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+1]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[(t-12)*3+2]][bonusCols[col+skipCol]];
				// Annual Total Premium				
				goalsTableContent[months1[maxRow]][goalCols[col+skipCol+1]] = 
					goalsTableContent[months1[maxRow-4]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-3]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-2]][goalCols[col+skipCol+1]]+
					goalsTableContent[months1[maxRow-1]][goalCols[col+skipCol+1]];
				bonusesTableContent[months1[maxRow]][bonusCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-3]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-2]][bonusCols[col]]+
					bonusesTableContent[months1[maxRow-1]][bonusCols[col]];	
				bonusesTableContent[months1[maxRow]][bonusCols[col+skipCol]] = 
					bonusesTableContent[months1[maxRow-4]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-3]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-2]][bonusCols[col+skipCol]]+
					bonusesTableContent[months1[maxRow-1]][bonusCols[col+skipCol]];	
				// Total
				goalsTableContent = { 				
					...goalsTableContent, [months1[maxRow]]: { 
						...goalsTableContent[months1[maxRow]], [goalCols[2*skipCol+1]]: 
							goalsTableContent[months1[maxRow-4]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-3]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-2]][goalCols[2*skipCol+1]]+
							goalsTableContent[months1[maxRow-1]][goalCols[2*skipCol+1]] 
					} 						
				};					
			}
			if(tableName==='GOALS' &&  col>11) { 
				bonusesTableContent[months1[i]][goalCols[col]] =  value * getOtherActivityBonus(goalCols[col], bonusPlans);	
				bonusesTableContent[months1[t]][goalCols[col]] = 
					bonusesTableContent[months1[(t-12)*3]][goalCols[col]]+
					bonusesTableContent[months1[(t-12)*3+1]][goalCols[col]]+
					bonusesTableContent[months1[(t-12)*3+2]][goalCols[col]];
				bonusesTableContent[months1[maxRow]][goalCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-3]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-2]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-1]][goalCols[col]];	
				bonusesTableContent[months1[maxRow]][goalCols[col]] = 
					bonusesTableContent[months1[maxRow-4]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-3]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-2]][goalCols[col]]+
					bonusesTableContent[months1[maxRow-1]][goalCols[col]];										
			}
		} 
		
		console.log('---main', main)
		setMain({
			avgsTableContent,
			goalsTableColumns,
			goalsTableHeader,
			goalsTableContent,
			bonusesTableColumns,
			bonusesTableHeader,
			bonusesTableContent
		});
	}, [cell]);

	function calculateBounses(cell) {
		let {row} = cell;
		const {col} = cell;
		let {rowKey} = cell;
		const {colKey} = cell;
		let value = parseFloat(cell.value === '' ? 0 : cell.value);
		let value1 = 0;
		let r = row;
		const rr = 12;
		const maxRow = 16;
		const skipCol = 5;

		if (col >= 5 && col <= 11) {
			return;
		}
		if (row >= 12 && row < 16) {
			row = (row % 12) * 3;
			rowKey = months1[row];
			value = parseFloat(cell.value === '' ? 0 : cell.value / 3);
			r = row;
		}

		if (row >= 16 && cell.row < 17) {
			row = 0;
			rowKey = months1[row];
			value = parseFloat(cell.value === '' ? 0 : cell.value / 12);
			r = row;
		}

		const avgCols = Object.keys(avgsTableContent['Average Annual Premium']);
		const goalCols = _.map(goalsTableHeader, item => item.value);
		const bonusCols = _.map(bonusesTableHeader, item => item.value);

		for (let i = r; i < rr; i++) {
			let step = 3;
			if (cell.row === 16) {
				step = 12;
			}
			const startQuarterIndex = (r - (r % step)) / step;
			const quarterIndex = (i - (i % 3)) / 3;

			if (cell.row !== 16 && quarterIndex > startQuarterIndex) break;

			const t = quarterIndex + 12;
			value1 = parseFloat(value * avgsTableContent['Average Annual Premium'][avgCols[col]]);

			if (col < 6) {
				if (col === 0) {
					bonusesTableContent[months1[i]][bonusCols[col]] =
						(value1 * avgsTableContent['Average Commission'][avgCols[col]]) / (2 * 100);
				} else {
					bonusesTableContent[months1[i]][bonusCols[col]] =
						(value1 * avgsTableContent['Average Commission'][avgCols[col]]) / 100;
				}
				const level = getLevel(goalsTableContent[months1[i]][goalCols[col]], policies[col].value, bonusPlans, user);

				bonusesTableContent[months1[i]][bonusCols[col + skipCol]] = bonusPlans[0][`show${policies[col].value}TargetAmount`] ? 
					parseFloat(level.dollar) : 
					(parseFloat(goalsTableContent[months1[i]][`Annual ${policies[col].value} Premium`]) * level.amount / 100)

				bonusesTableContent[months1[t]][bonusCols[col]] =
					bonusesTableContent[months1[(t - 12) * 3]][bonusCols[col]] +
					bonusesTableContent[months1[(t - 12) * 3 + 1]][bonusCols[col]] +
					bonusesTableContent[months1[(t - 12) * 3 + 2]][bonusCols[col]];
				bonusesTableContent[months1[t]][bonusCols[col + skipCol]] =
					bonusesTableContent[months1[(t - 12) * 3]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[(t - 12) * 3 + 1]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[(t - 12) * 3 + 2]][bonusCols[col + skipCol]];

				bonusesTableContent[months1[t]][bonusCols[col + skipCol]] =
					bonusesTableContent[months1[(t - 12) * 3]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[(t - 12) * 3 + 1]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[(t - 12) * 3 + 2]][bonusCols[col + skipCol]];

				bonusesTableContent[months1[maxRow]][bonusCols[col]] =
					bonusesTableContent[months1[maxRow - 4]][bonusCols[col]] +
					bonusesTableContent[months1[maxRow - 3]][bonusCols[col]] +
					bonusesTableContent[months1[maxRow - 2]][bonusCols[col]] +
					bonusesTableContent[months1[maxRow - 1]][bonusCols[col]];
				bonusesTableContent[months1[maxRow]][bonusCols[col + skipCol]] =
					bonusesTableContent[months1[maxRow - 4]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[maxRow - 3]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[maxRow - 2]][bonusCols[col + skipCol]] +
					bonusesTableContent[months1[maxRow - 1]][bonusCols[col + skipCol]];

			}
			if (col > 11) {
				bonusesTableContent[months1[i]][goalCols[col]] =
					value * getOtherActivityBonus(goalCols[col], bonusPlans);
				bonusesTableContent[months1[t]][goalCols[col]] =
					bonusesTableContent[months1[(t - 12) * 3]][goalCols[col]] +
					bonusesTableContent[months1[(t - 12) * 3 + 1]][goalCols[col]] +
					bonusesTableContent[months1[(t - 12) * 3 + 2]][goalCols[col]];
				bonusesTableContent[months1[maxRow]][goalCols[col]] =
					bonusesTableContent[months1[maxRow - 4]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 3]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 2]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 1]][goalCols[col]];
				bonusesTableContent[months1[maxRow]][goalCols[col]] =
					bonusesTableContent[months1[maxRow - 4]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 3]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 2]][goalCols[col]] +
					bonusesTableContent[months1[maxRow - 1]][goalCols[col]];
			}
		}

		setMain({
			bonusesTableColumns,
			bonusesTableHeader,
			bonusesTableContent
		});
	}

	function handleInputChange(property) {
		setCell(property);
	}

	function handleChangeYear(date) {  
		setDate(date);
	}

	function handleChangeUser(event) {
		setUser(event.target.value);
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
					{/* <div className="flex flex-1 items-center justify-center px-12 w-40">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<SelectBox
								value={user}
								onChange={ev => handleChangeUser(ev)}
								label="Users"
								data={userList}
							/>
						</FuseAnimate>
					</div>	 */}
					<div className="flex flex-1 items-center justify-center px-12">
						<FuseAnimate animation="transition.slideUpIn" delay={300}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									disableToolbar
									variant="inline"
									format="yyyy"
									margin="normal"
									id="date-picker-inline"
									label="Year"
									value={date}
									onChange={handleChangeYear}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
									views={['year']}
								/>	
							</MuiPickersUtilsProvider>	
						</FuseAnimate>
					</div>
					{/* <FuseAnimate animation="transition.slideRightIn" delay={300}>
						<Button
							component={Link}
							className="whitespace-nowrap normal-case"
							variant="contained"
							color="secondary"
							onClick={onSave}
						>
							<span className="hidden sm:flex">Edit</span>
							<span className="flex sm:hidden">New</span>
						</Button>
					</FuseAnimate> */}
				</Header>
			}
			content={
				<div className="w-full flex flex-col p-12">
					<div className='flex items-center justify-center p-12'>
						<FuseAnimateGroup className="flex flex-wrap w-1/2" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="AVERAGES" data={data.widgets.Vision_IncomeGoals_Averages_Table} onInputChange={handleInputChange} endAdornment="" />
						</FuseAnimateGroup>
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="GOALS" data={data.widgets.Vision_IncomeGoals_Goals_Table} onInputChange={handleInputChange} startAdornment="" />
						</FuseAnimateGroup>
					</div>
					<div className='p-12'>
						<FuseAnimateGroup className="flex flex-wrap" enter={{ animation: 'transition.slideUpBigIn' }}>
							<Table tableName="BONUSES" data={data.widgets.Vision_IncomeGoals_Bonuses_Table} startAdornment="" />
						</FuseAnimateGroup>
					</div>
				</div>				
			}
			innerScroll
		/>		
	);
}

export default withReducer('visionApp', reducer)(IncomeGoals);