import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from '../store';
import Icon from '@material-ui/core/Icon';
import { Link, useParams } from 'react-router-dom';
import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { getEntries, selectEntries, saveProduct, updateProduct, cleanEditData } from '../store/entrySlice';
import { getBonus, selectBonus } from '../store/bonusSlice';
import { getMarketing, selectMarketing } from '../store/businessSlice';
import TextInput from '../../../components/TextField';
import FormattedInput from '../../../components/PriceInput';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SelectBox from '../../../components/SelectBox';
import MultiSelectBox from '../../../components/MultiSelectBox';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import { includes } from 'lodash';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getUsers, selectUsers } from '../store/userSlice';
import { showMessage } from 'app/store/fuse/messageSlice';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch'
		}
	},
	checkBox: {
		padding: '0',
		height: '40px'
	},
	datePicker: {
		width: 250,
		marginTop: '0'
	}
}));

const policyTypeLists = [
	{ item: 'Auto Entries', value: 'Entries' },
	{ item: 'Fire Entries', value: 'FireEntries' },
	{ item: 'Health Entries', value: 'HealthEntries' },
	{ item: 'Life Entries', value: 'LifeEntries' },
	{ item: 'Bank Entries', value: 'BankEntries' }
];

const policyholderTypeLists = [
	{ item: 'Household', value: 'household' },
	{ item: 'Individual', value: 'individual' }
	// { item: 'Multiline Policy', value: 'multiline_policy' }
];

const creditLists = [
	{ item: 'Solo Credit', value: 'solo_credit' },
	{ item: 'Split Credit', value: 'split_credit' }
];

const firePolicyTypeList = [
	{ item: 'Boatowners', value: 'Boatowners' },
	{ item: 'Condominium Unitowners', value: 'Condominium Unitowners' },
	{ item: 'Homeowners', value: 'Homeowners' },
	{ item: 'Manufactured Home', value: 'Manufactured Home' },
	{ item: 'Personal Articles Policy', value: 'Personal Articles Policy' },
	{ item: 'Personal Liability Umbrella Policy', value: 'Personal Liability Umbrella Policy' },
	{ item: 'Pet Medical Insurance', value: 'Pet Medical Insurance' },
	{ item: 'Rental Condominium Unit Owners', value: 'Rental Condominium Unit Owners' },
	{ item: 'Rental Dwelling', value: 'Rental Dwelling' },
	{ item: 'Renters', value: 'Renters' },
];

const alignBonus = bonus => {
	var tempBonusLists = {};
	if (bonus.length > 0) {
		Object.keys(bonus[0]).map(policy => {
			Object.keys(bonus[0][policy]).map(itemId => {
				tempBonusLists = {
					...tempBonusLists,

					[bonus[0][policy][itemId].name]: bonus[0][policy][itemId].percent
				};
			});
		});
	}
	return tempBonusLists;
};

function Products() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const products = useSelector(selectEntries);
	const bonus = useSelector(selectBonus);
	const bonusLists = alignBonus(bonus);
	const belongTo = localStorage.getItem('@BELONGTO');
	const marketing = useSelector(selectMarketing);
	const users = useSelector(selectUsers);
	const routeParams = useParams();
	const [route, setRoute] = useState(routeParams.id)
	const history = useHistory();
	const searchText = useSelector(({ eCommerceApp }) => eCommerceApp.products.searchText);
	const editData = useSelector(({ eCommerceApp }) => eCommerceApp.products.editData);
	const classes = useStyles();
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(products);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null
	});
	
	// const [usersList, setUserList] = useState([]);
	const [state, setState] = React.useState({
		policyHolderName: '',
		policyInformation: '',
		datePolicyIsWritten: new Date(),
		datePolicyIsIssued: null,
		percentOfSaleCredit: '',
		typeOfProduct: '',
		typeOfProductFire: '',
		typeOfProductHealth: '',
		typeOfProductLife: '',
		policyPremium: '',
		sourceOfBusiness: '',
		adjustments: '',
		dollarBonus: '',
		policyType: ['Entries'],
		policyHolderNameValidation:false,
		policyTypeValidation: false,
		percentOfSaleCreditValidation: false,
		typeOfProductValidation: false,
		typeOfProductFireValidation: false,
		typeOfProductHealthValidation: false,
		typeOfProductLifeValidation: false,
		policyPremiumValidation: false,
		previousPolicyNumberValidation: false,
		policyHolderType: 'individual',
		productLists: [],
		fireProductList: [],
		healthProductList: [],
		lifeProductList: [],
		marketings: [],
		usersList: [],
		polycies: [],
		creditTypeAuto: 'solo_credit',
		creditTypeFire: 'solo_credit',
		creditTypeHealth: 'solo_credit',
		creditTypeLife: 'solo_credit',
		creditTypeBank: 'solo_credit',
		creditPercentAuto: '',
		creditPercentFire: '',
		creditPercentHealth: '',
		creditPercentFire: '',
		creditUserAuto: '',
		creditUserFire: '',
		creditUserHealth: '',
		creditUserLife: ''
	});

	useEffect(() => {
		dispatch(getEntries()).then(() => setLoading(false));
		dispatch(getUsers());
		dispatch(getBonus());
		dispatch(getMarketing());
	}, [dispatch]);

	useEffect(() => {
		var tempBonus = [];
		var tempFireBonus = [];
		var tempHealthBonus = [];
		var tempLifeBonus = [];
		var tempBankBonus = [];
		var tempMarketing = [];
		var temp = [];
		if (marketing.length > 0) {
			Object.keys(marketing[0]).map(i => {
				tempMarketing.push({ item: marketing[0][i].marketingName, value: marketing[0][i].marketingName });
			});
		}
		if (users.length > 0) {
			users.map(item => {
				temp.push({ item: item.data.displayName, value: item.uid });
			});
			// temp.push({ item: 'Office Count', value: 'OfficeCount' });
		}

		if (routeParams.id === 'edit' && editData) {
			if (bonus.length > 0) {
				Object.keys(bonus[0]['autoBonus']).map(item => {
					tempBonus.push({
						item: bonus[0]['autoBonus'][item].name,
						value: bonus[0]['autoBonus'][item].name
					});
				});

				Object.keys(bonus[0]['fireBonus']).map(item => {
					tempFireBonus.push({
						item: bonus[0]['fireBonus'][item].name,
						value: bonus[0]['fireBonus'][item].name
					});
				});

				Object.keys(bonus[0]['healthBonus']).map(item => {
					tempHealthBonus.push({
						item: bonus[0]['healthBonus'][item].name,
						value: bonus[0]['healthBonus'][item].name
					});
				});

				Object.keys(bonus[0]['lifeBonus']).map(item => {
					tempLifeBonus.push({
						item: bonus[0]['lifeBonus'][item].name,
						value: bonus[0]['lifeBonus'][item].name
					});
				});

				Object.keys(bonus[0]['bankBonus']).map(item => {
					tempBankBonus.push({
						item: bonus[0]['bankBonus'][item].name,
						value: bonus[0]['bankBonus'][item].name
					});
				});

				setState({
					...state,
					...editData,
					marketings: tempMarketing,
					productLists: tempBonus,
					fireProductList: tempFireBonus,
					healthProductList: tempHealthBonus,
					lifeProductList: tempLifeBonus,
					bankProductList: tempBankBonus,
					policyInformationLife: editData.policyInformation,
					policyInformationFire: editData.policyInformation,
					policyInformationHealth: editData.policyInformation,
					policyInformationBank: editData.policyInformation,
					policyPremiumFire: editData.policyPremium,
					policyPremiumLife: editData.policyPremium,
					policyPremiumHealth: editData.policyPremium,
					policyPremiumBank: editData.policyPremium,
					creditTypeAuto: editData.creditType,
					creditTypeFire: editData.creditType,
					creditTypeHealth: editData.creditType,
					creditTypeLife: editData.creditType,
					creditTypeBank: editData.creditType,
					creditPercentAuto: editData.creditPercent,
					creditPercentFire: editData.creditPercent,
					creditPercentHealth: editData.creditPercent,
					creditPercentLife: editData.creditPercent,
					creditPercentBank: editData.creditPercent,
					creditUserAuto: editData.creditUser,
					creditUserFire: editData.creditUser,
					creditUserHealth: editData.creditUser,
					creditUserLife: editData.creditUser,
					creditUserBank: editData.creditUser,
					usersList: temp
				});
			}
		} else {
			if (bonus.length > 0) {
				Object.keys(bonus[0]['autoBonus']).map(item => {
					tempBonus.push({
						item: bonus[0]['autoBonus'][item].name,
						value: bonus[0]['autoBonus'][item].name
					});
				});

				Object.keys(bonus[0]['fireBonus']).map(item => {
					tempFireBonus.push({
						item: bonus[0]['fireBonus'][item].name,
						value: bonus[0]['fireBonus'][item].name
					});
				});

				Object.keys(bonus[0]['healthBonus']).map(item => {
					tempHealthBonus.push({
						item: bonus[0]['healthBonus'][item].name,
						value: bonus[0]['healthBonus'][item].name
					});
				});

				Object.keys(bonus[0]['lifeBonus']).map(item => {
					tempLifeBonus.push({
						item: bonus[0]['lifeBonus'][item].name,
						value: bonus[0]['lifeBonus'][item].name
					});
				});

				Object.keys(bonus[0]['bankBonus']).map(item => {
					tempBankBonus.push({
						item: bonus[0]['bankBonus'][item].name,
						value: bonus[0]['bankBonus'][item].name
					});
				});

				setState({
					...state,
					marketings: tempMarketing,
					productLists: tempBonus,
					fireProductList: tempFireBonus,
					healthProductList: tempHealthBonus,
					lifeProductList: tempLifeBonus,
					bankProductList: tempBankBonus,
					usersList: temp
				});
				getBonusArange();
			}
		}
	}, [editData, bonus, marketing]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(products, item => item.policyHolderName.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);

	function handleDateChange(date, id) {
		setState({ ...state, [id]: date });
	}

	function handleChangeValue(data) {
		if (Object.keys(data)[0] === 'type') {
			if (typeof data['type'] === 'object') {
				setState({ ...state, ...data });
			} else {
				setState({ ...state, type: [data['type']], typeValidation: data['typeValidation'] });
			}
		} else if (Object.keys(data)[0] === 'policyType') {
			var tempBonus = [];
			var tempFireBonus = [];
			var tempHealthBonus = [];
			var tempLifeBonus = [];
			var tempBankBonus = [];

			Object.keys(bonus[0]['autoBonus']).map(item => {
				tempBonus.push({
					item: bonus[0]['autoBonus'][item].name,
					value: bonus[0]['autoBonus'][item].name
				});
			});

			Object.keys(bonus[0]['fireBonus']).map(item => {
				tempFireBonus.push({
					item: bonus[0]['fireBonus'][item].name,
					value: bonus[0]['fireBonus'][item].name
				});
			});

			Object.keys(bonus[0]['healthBonus']).map(item => {
				tempHealthBonus.push({
					item: bonus[0]['healthBonus'][item].name,
					value: bonus[0]['healthBonus'][item].name
				});
			});

			Object.keys(bonus[0]['lifeBonus']).map(item => {
				tempLifeBonus.push({
					item: bonus[0]['lifeBonus'][item].name,
					value: bonus[0]['lifeBonus'][item].name
				});
			});

			Object.keys(bonus[0]['bankBonus']).map(item => {
				tempBankBonus.push({
					item: bonus[0]['bankBonus'][item].name,
					value: bonus[0]['bankBonus'][item].name
				});
			});

			setState({
				...state,
				...data,
				productLists: tempBonus,
				fireProductList: tempFireBonus,
				healthProductList: tempHealthBonus,
				lifeProductList: tempLifeBonus,
				bankProductList: tempBankBonus
			});
		} else {
			setState({ ...state, ...data });
		}
	}

	function checkValidation() {
		// if (
		// 	!state.percentOfSaleCreditValidation &&
		// 	state.percentOfSaleCredit &&
		// 	// !state.typeOfProductValidation &&
		// 	// state.typeOfProduct &&
		// 	// !state.policyPremiumValidation &&
		// 	// state.policyPremium
		// ) {
		// 	return true;
		// } else {
		// 	setState({
		// 		...state,
		// 		percentOfSaleCreditValidation: state.percentOfSaleCredit ? false : true,
		// 		// typeOfProductValidation: state.typeOfProduct ? false : true,
		// 		policyPremiumValidation: state.policyPremium ? false : true
		// 	});
		// 	return false;
		// }
		if(!state.policyHolderName){
			setState({...state, policyHolderNameValidation:state.policyHolderName?false:true})
			return false
		}
		if (state.policyType.length === 1&& state.policyHolderType==='household') {
			
				if (state.previousPolicyNumber) {
					return true;
				} else {
					setState({...state, previousPolicyNumberValidation:true})
					dispatch(showMessage({ message: 'Please Enter Previous Policy Number!' }))
					return false;
				}
	
		}

		if(state.policyType.includes('Entries')&&!state.typeOfProduct){
			setState({...state, typeOfProductValidation:state.typeOfProduct?false:true})
			return false
		}

		if(state.policyType.includes('Entries')&&!state.policyPremium){
			setState({...state, policyPremiumValidation:state.policyPremium?false:true})
			return false
		}

		if(state.policyType.includes('FireEntries')&&!state.typeOfProductFire){
			setState({...state, typeOfProductFireValidation:state.typeOfProductFire?false:true})
			return false
		}

		if(state.policyType.includes('FireEntries')&&!state.policyPremiumFire){
			setState({...state, policyPremiumFireValidation:state.policyPremiumFire?false:true})
			return false
		}

		if(state.policyType.includes('HealthEntries')&&!state.typeOfProductHealth){
			setState({...state, typeOfProductHealthValidation:state.typeOfProductHealth?false:true})
			return false
		}

		if(state.policyType.includes('HealthEntries')&&!state.policyPremiumHealth){
			setState({...state, policyPremiumHealthValidation:state.policyPremiumHealth?false:true})
			return false
		}

		if(state.policyType.includes('LifeEntries')&&!state.typeOfProductLife){
			setState({...state, typeOfProductLifeValidation:state.typeOfProductLife?false:true})
			return false
		}

		if(state.policyType.includes('LifeEntries')&&!state.policyPremiumLife){
			setState({...state, policyPremiumLifeValidation:state.policyPremiumLife?false:true})
			return false
		}

		if(state.policyType.includes('BankEntries')&&!state.typeOfProductBank){
			setState({...state, typeOfProductBankValidation:state.typeOfProductBank?false:true})
			return false
		}

		if(state.policyType.includes('BankEntries')&&!state.policyPremiumBank){
			setState({...state, policyPremiumBankValidation:state.policyPremiumBank?false:true})
			return false
		}
		return true
	}

	function getBonusArange() {
		var temp = { autoBonus: {}, fireBonus: {}, healthBonus: {}, lifeBonus: {} };
		if (bonus.length > 0) {
			Object.keys(bonus[0]).map(item => {
				Object.keys(bonus[0][item]).map(i => {
					temp = { ...temp, [item]: { ...temp[item], [bonus[0][item][i].name]: bonus[0][item][i].percent } };
				});
			});
		}
		return temp;
	}

	function onSave() {
		if (checkValidation()) {
			let bonusValues = getBonusArange();

			let uid = localStorage.getItem('@UID');
			var requestForm = [];
			console.log(route)
			let form = {
				id: state.id ? state.id : Date.now(),
				policyHolderName: state.policyHolderName,
				policyInformation: state.policyInformation,
				datePolicyIsWritten: state.datePolicyIsWritten ? state.datePolicyIsWritten : '',
				datePolicyIsIssued: state.datePolicyIsIssued ? state.datePolicyIsIssued : '',
				policyType: state.policyType,
				percentOfSaleCredit: parseFloat(state.percentOfSaleCredit),
				typeOfProduct: state.typeOfProduct,
				policyHolderType: state.policyHolderType,
				policyPremium: parseFloat(state.policyPremium),
				sourceOfBusiness: state.sourceOfBusiness,
				adjustments: state.adjustments,
				dollarBonus: state.dollarBonus,
				policies: route==="edit"?state.policies: state.policyType,
				previousPolicyNumber: state.previousPolicyNumber,
				uid,
				belongTo
			};

			if (state.datePolicyIsIssued) {
				if (state.typeOfProduct && state.policyType.includes('Entries')) {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremium) *
									parseInt(state.creditTypeAuto === 'solo_credit' ? 100 : state.creditPercentAuto)) /
									100) *
									(parseInt(bonusLists[state.typeOfProduct]) / 100) *
									100
							) / 100,
						policyType: ['Entries'],
						typeOfProduct: state.typeOfProduct,
						policyPremium: state.policyPremium,
						policyInformation: state.policyInformation,
						creditPercent: state.creditTypeAuto === 'solo_credit' ? 100 : state.creditPercentAuto,
						creditUser: state.creditUserAuto,
						creditType: state.creditTypeAuto
					};
					requestForm.push(form);
				}
				if (state.typeOfProductFire && state.policyType.includes('FireEntries')) {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremiumFire) *
									parseInt(state.creditTypeFire === 'solo_credit' ? 100 : state.creditPercentFire)) /
									100) *
									(parseInt(bonusLists[state.typeOfProductFire]) / 100) *
									100
							) / 100,
						policyType: ['FireEntries'],
						typeOfProductFire: state.typeOfProductFire,
						policyPremium: state.policyPremiumFire,
						policyInformation: state.policyInformationFire,
						creditPercent: state.creditTypeFire === 'solo_credit' ? 100 : state.creditPercentFire,
						creditUser: state.creditUserFire,
						creditType: state.creditTypeFire
					};
					requestForm.push(form);
				}

				if (state.typeOfProductHealth && state.policyType.includes('HealthEntries')) {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremiumHealth) *
									parseInt(
										state.creditTypeHealth === 'solo_credit' ? 100 : state.creditPercentHealth
									)) /
									100) *
									(parseInt(bonusLists[state.typeOfProductHealth]) / 100) *
									100
							) / 100,
						policyType: ['HealthEntries'],
						typeOfProductHealth: state.typeOfProductHealth,
						policyPremium: state.policyPremiumHealth,
						policyInformation: state.policyInformationHealth,
						creditPercent: state.creditTypeHealth === 'solo_credit' ? 100 : state.creditPercentHealth,
						creditUser: state.creditUserHealth,
						creditType: state.creditTypeHealth
					};
					requestForm.push(form);
				}
				if (state.typeOfProductLife && state.policyType.includes('LifeEntries')) {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremiumLife) *
									parseInt(state.creditTypeLife === 'solo_credit' ? 100 : state.creditPercentLife)) /
									100) *
									(parseInt(bonusLists[state.typeOfProductLife]) / 100) *
									100
							) / 100,
						policyType: ['LifeEntries'],
						typeOfProductLife: state.typeOfProductLife,
						policyPremium: state.policyPremiumLife,
						policyInformation: state.policyInformationLife,
						creditPercent: state.creditTypeLife === 'solo_credit' ? 100 : state.creditPercentLife,
						creditUser: state.creditUserLife,
						creditType: state.creditTypeLife
					};
					requestForm.push(form);
				}

				if (state.typeOfProductBank && state.policyType.includes('BankEntries')) {
					form = {
						...form,
						dollarBonus:
							Math.ceil(
								((parseFloat(state.policyPremiumBank) *
									parseInt(state.creditTypeBank === 'solo_credit' ? 100 : state.creditPercentBank)) /
									100) *
									(parseInt(bonusLists[state.typeOfProductBank]) / 100) *
									100
							) / 100,
						policyType: ['BankEntries'],
						typeOfProductBank: state.typeOfProductBank,
						policyPremium: state.policyPremiumBank,
						policyInformation: state.policyInformationBank,
						creditPercent: state.creditTypeBank === 'solo_credit' ? 100 : state.creditPercentBank,
						creditUser: state.creditUserBank,
						creditType: state.creditTypeBank
					};
					requestForm.push(form);
				}
			} else {
				if (state.typeOfProduct && state.policyType.includes('Entries')) {
					form = {
						...form,
						dollarBonus: '',
						policyType: ['Entries'],
						typeOfProduct: state.typeOfProduct,
						policyPremium: state.policyPremium,
						policyInformation: state.policyInformation,
						creditPercent: state.creditTypeAuto === 'solo_credit' ? 100 : state.creditPercentAuto,
						creditUser: state.creditUserAuto,
						creditType: state.creditTypeAuto
					};
					requestForm.push(form);
				}
				if (state.typeOfProductFire && state.policyType.includes('FireEntries')) {
					form = {
						...form,
						dollarBonus: '',
						policyType: ['FireEntries'],
						typeOfProductFire: state.typeOfProductFire,
						policyPremium: state.policyPremiumFire,
						policyInformation: state.policyInformationFire,
						creditPercent: state.creditTypeFire === 'solo_credit' ? 100 : state.creditPercentFire,
						creditUser: state.creditUserFire,
						creditType: state.creditTypeFire
					};
					requestForm.push(form);
				}
				if (state.typeOfProductHealth && state.policyType.includes('HealthEntries')) {
					form = {
						...form,
						dollarBonus: '',
						policyType: ['HealthEntries'],
						typeOfProductHealth: state.typeOfProductHealth,
						policyPremium: state.policyPremiumHealth,
						policyInformation: state.policyInformationHealth,
						creditPercent: state.creditTypeHealth === 'solo_credit' ? 100 : state.creditPercentHealth,
						creditUser: state.creditUserHealth,
						creditType: state.creditTypeHealth
					};
					requestForm.push(form);
				}
				if (state.typeOfProductLife && state.policyType.includes('LifeEntries')) {
					form = {
						...form,
						dollarBonus: '',
						policyType: ['LifeEntries'],
						typeOfProductLife: state.typeOfProductLife,
						policyPremium: state.policyPremiumLife,
						policyInformation: state.policyInformationLife,
						creditPercent: state.creditTypeLife === 'solo_credit' ? 100 : state.creditPercentLife,
						creditUser: state.creditUserLife,
						creditType: state.creditTypeLife
					};
					requestForm.push(form);
				}
				console.log('--------------------------------------')
				if (state.typeOfProductBank && state.policyType.includes('BankEntries')) {
					form = {
						...form,
						dollarBonus: '',
						policyType: ['BankEntries'],
						typeOfProductBank: state.typeOfProductBank,
						policyPremium: state.policyPremiumBank,
						policyInformation: state.policyInformationBank,
						creditPercent: state.creditTypeBank === 'solo_credit' ? 100 : state.creditPercentBank,
						creditUser: state.creditUserBank,
						creditType: state.creditTypeBank
					};
					requestForm.push(form);
				}
			}

			console.log(requestForm)
			console.log(state.datePolicyIsIssued, state.typeOfProductBank, state.policyType)

			// console.log(requestForm)
			if (belongTo && uid) {
				console.log(route)
				console.log(route, editData)
				if (route === 'edit' && editData) {
					console.log(routeParams.id, editData)
					dispatch(updateProduct(requestForm)).then(() => {
						history.goBack();
					});
				} else {
					dispatch(saveProduct(requestForm)).then(() => {
						history.goBack();
					});
				}
			}

			// setState({
			// 	...state,
			// 	id: '',
			// 	policyHolderName: '',
			// 	policyInformation: '',
			// 	datePolicyIsWritten: new Date(),
			// 	datePolicyIsIssued: null,
			// 	percentOfSaleCredit: '',
			// 	typeOfProduct: '',
			// 	typeOfProductFire: '',
			// 	typeOfProductHealth: '',
			// 	typeOfProductLife: '',
			// 	policyPremium: '',
			// 	sourceOfBusiness: '',
			// 	adjustments: '',
			// 	dollarBonus: '',
			// 	policyType: ['Entries'],
			// 	percentOfSaleCreditValidation: false,
			// 	typeOfProductValidation: false,
			// 	policyPremiumValidation: false,
			// 	typeOfProductFireValidation: false,
			// 	typeOfProductHealthValidation: false,
			// 	typeOfProductLifeValidation: false
			// });
		}
	}

	function handleChecked(e) {
		var temp = [...state.policyType];
		if (state.policyHolderType === 'individual') {
			if (e.target.checked) {
				var index = temp.indexOf(e.target.name);
				if (index === -1) {
					setState({
						...state,
						policyType: [e.target.name]
					});
				}
			}
		} else if (state.policyHolderType === 'household' || state.policyHolderType === 'multiline_policy') {
			if (e.target.checked) {
				var index = temp.indexOf(e.target.name);
				if (index === -1) {
					temp.push(e.target.name);
					setState({
						...state,
						policyType: [...temp]
					});
				}
			} else {
				var index = temp.indexOf(e.target.name);
				if (index !== -1) {
					temp.splice(index, 1);
					setState({
						...state,
						policyType: [...temp]
					});
				}
			}
		}
	}

	const addMultiAuto = () => {
		history.push('/apps/enter-sales/multi-auto-polices');
		dispatch(cleanEditData());
	};

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				contentCard: 'overflow-hidden',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136'
			}}
			header={
				<div className="flex flex-1 w-full items-center justify-between">
					<div className="flex flex-col items-start max-w-full">
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/enter-sales/auto-entry"
								color="inherit"
							>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
								</Icon>
								<span className="mx-4">Sales</span>
							</Typography>
						</FuseAnimate>

						<div className="flex items-center max-w-full">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								<img
									className="w-32 sm:w-48 rounded"
									src="assets/images/ecommerce/product-image-placeholder.png"
								/>
							</FuseAnimate>
							<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">{'New Sales'}</Typography>
								</FuseAnimate>
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">Sales Detail</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>
					<div>
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Button
								// component={Link}
								// to="/apps/enter-sales/entry/new"
								className="whitespace-nowrap normal-case mr-32"
								variant="contained"
								color="secondary"
								onClick={addMultiAuto}
							>
								<span className="sm:flex">Add Multi Auto Policies</span>
							</Button>
						</FuseAnimate>
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Button
								className="whitespace-nowrap normal-case"
								variant="contained"
								color="secondary"
								// disabled={!canBeSubmitted()}
								onClick={() => onSave()}
							>
								Save
							</Button>
						</FuseAnimate>
					</div>
				</div>
			}
			content={
				<div className="w-full flex flex-col">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<FuseScrollbars className="flex-grow overflow-x-auto flex justify-around">
							<div className="min-w-xl p-96 h-full w-5xl flex flex-row justify-around flex-wrap">
								<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
									<TextInput
										id="outlined-basic"
										label="Policy Holder Name"
										variant="outlined"
										value={state.policyHolderName}
										validation="policyHolderName"
										onChange={handleChangeValue}
										willvalidation={true}
										validate={state.policyHolderNameValidation}
										size={250}
									/>
									<KeyboardDatePicker
										margin="normal"
										id="date-picker-dialog"
										format="MM/dd/yyyy"
										className={classes.datePicker}
										label="Date Policy Is Written"
										value={state.datePolicyIsWritten}
										onChange={date => handleDateChange(date, 'datePolicyIsWritten')}
										KeyboardButtonProps={{
											'aria-label': 'change date'
										}}
									/>
									{/* </div>

								<div className="flex w-full justify-between items-center flex-wrap py-12"> */}
									<KeyboardDatePicker
										margin="normal"
										id="date-picker-dialog"
										format="MM/dd/yyyy"
										className={classes.datePicker}
										label="Date Policy Is Issued"
										value={state.datePolicyIsIssued}
										onChange={date => handleDateChange(date, 'datePolicyIsIssued')}
										KeyboardButtonProps={{
											'aria-label': 'change date'
										}}
									/>
								</div>
								<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
									{/* <TextInput
										id="outlined-basic"
										label="Percent of Sale Credit"
										variant="outlined"
										value={state.percentOfSaleCredit}
										validation="percentOfSaleCredit"
										type="percent"
										onChange={handleChangeValue}
										willvalidation={true}
										validate={state.percentOfSaleCreditValidation}
										size={250}
									/> */}

									<SelectBox
										id="outlined-basic"
										label="Type of Placeholder"
										disabled={routeParams.id === 'edit' ? true : false}
										data={policyholderTypeLists}
										variant="outlined"
										value={state.policyHolderType}
										validation="policyHolderType"
										handleChangeValue={handleChangeValue}
										willvalidation={true}
										validate={state.policyHolderTypeValidation}
									/>
									<SelectBox
										id="outlined-basic"
										label="Source of Business"
										data={state.marketings}
										variant="outlined"
										value={state.sourceOfBusiness}
										validation="sourceOfBusiness"
										handleChangeValue={handleChangeValue}
										willvalidation={false}
									/>

									<FormControlLabel
										className={classes.checkBox}
										disabled={routeParams.id === 'edit' ? true : false}
										control={
											<Checkbox
												checked={state.policyType.includes('Entries')}
												onChange={handleChecked}
												name="Entries"
												color="primary"
											/>
										}
										label="Auto"
									/>

									<FormControlLabel
										className={classes.checkBox}
										disabled={routeParams.id === 'edit' ? true : false}
										control={
											<Checkbox
												checked={state.policyType.includes('FireEntries')}
												onChange={handleChecked}
												name="FireEntries"
												color="primary"
											/>
										}
										label="Fire"
									/>

									<FormControlLabel
										className={classes.checkBox}
										disabled={routeParams.id === 'edit' ? true : false}
										control={
											<Checkbox
												checked={state.policyType.includes('HealthEntries')}
												onChange={handleChecked}
												name="HealthEntries"
												color="primary"
											/>
										}
										label="Health"
									/>

									<FormControlLabel
										className={classes.checkBox}
										disabled={routeParams.id === 'edit' ? true : false}
										control={
											<Checkbox
												checked={state.policyType.includes('LifeEntries')}
												onChange={handleChecked}
												name="LifeEntries"
												color="primary"
											/>
										}
										label="Life"
									/>

									<FormControlLabel
										className={classes.checkBox}
										disabled={routeParams.id === 'edit' ? true : false}
										control={
											<Checkbox
												checked={state.policyType.includes('BankEntries')}
												onChange={handleChecked}
												name="BankEntries"
												color="primary"
											/>
										}
										label="Bank"
									/>

									{state.policyType.length === 1 && state.policyHolderType === 'household' && (
										<TextInput
											id="outlined-basic"
											label="Previous Policy Number"
											variant="outlined"
											value={state.previousPolicyNumber}
											validation="previousPolicyNumber"
											onChange={handleChangeValue}
											willvalidation={true}
											validate={state.previousPolicyNumberValidation}
											size={200}
										/>
									)}
								</div>
								{state.policyType.includes('Entries') && (
									<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
										<SelectBox
											id="outlined-basic"
											label="Credit Type"
											data={creditLists}
											variant="outlined"
											value={state.creditTypeAuto}
											validation="creditTypeAuto"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											size={150}
										/>
										<FormattedInput
											id="outlined-basic"
											label="Auto Premium"
											variant="outlined"
											value={state.policyPremium}
											validation="policyPremium"
											type="percent"
											willvalidation={true}
											validate={state.policyPremiumValidation}
											handleChangeValue={handleChangeValue}
											size={150}
										/>

										<TextInput
											id="outlined-basic"
											label="Policy Information"
											variant="outlined"
											value={state.policyInformation}
											validation="policyInformation"
											onChange={handleChangeValue}
											willvalidation={false}
											validate={false}
											size={350}
										/>

										<SelectBox
											id="outlined-basic"
											label="Product Type of Auto"
											data={state.productLists}
											variant="outlined"
											value={state.typeOfProduct}
											validation="typeOfProduct"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeOfProductValidation}
											size={250}
										/>
										{state.creditTypeAuto === 'split_credit' && (
											<>
												<SelectBox
													id="outlined-basic"
													label="Credit User"
													data={state.usersList}
													variant="outlined"
													value={state.creditUserAuto}
													validation="creditUserAuto"
													handleChangeValue={handleChangeValue}
													willvalidation={false}
													validate={state.creditUserAutoValidation}
												/>
												<TextInput
													id="outlined-basic"
													label="Sale Credit"
													variant="outlined"
													value={state.creditPercentAuto}
													validation="creditPercentAuto"
													type="percent"
													onChange={handleChangeValue}
													willvalidation={true}
													validate={state.creditPercentAutoValidation}
													size={150}
												/>
											</>
										)}
									</div>
								)}

								{state.policyType.includes('FireEntries') && (
									<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
										<SelectBox
											id="outlined-basic"
											label="Credit Type"
											data={creditLists}
											variant="outlined"
											value={state.creditTypeFire}
											validation="creditTypeFire"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											size={150}
										/>
										<FormattedInput
											id="outlined-basic"
											label="Fire Policy Premium"
											variant="outlined"
											value={state.policyPremiumFire}
											validation="policyPremiumFire"
											type="percent"
											willvalidation={true}
											validate={state.policyPremiumFireValidation}
											handleChangeValue={handleChangeValue}
											size={150}
										/>

										
										<SelectBox
											id="outlined-basic"
											label="Policy Information"
											data={firePolicyTypeList}
											variant="outlined"
											value={state.policyInformationFire}
											validation="policyInformationFire"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											validate={false}
											size={350}
										/>

										<SelectBox
											id="outlined-basic"
											label="Product Type of Fire"
											data={state.fireProductList}
											variant="outlined"
											value={state.typeOfProductFire}
											validation="typeOfProductFire"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeOfProductFireValidation}
											size={250}
										/>
										{state.creditTypeFire === 'split_credit' && (
											<>
												<SelectBox
													id="outlined-basic"
													label="Credit User"
													data={state.usersList}
													variant="outlined"
													value={state.creditUserFire}
													validation="creditUserFire"
													handleChangeValue={handleChangeValue}
													willvalidation={false}
													validate={state.creditUserFireValidation}
												/>
												<TextInput
													id="outlined-basic"
													label="Sale Credit"
													variant="outlined"
													value={state.creditPercentFire}
													validation="creditPercentFire"
													type="percent"
													onChange={handleChangeValue}
													willvalidation={true}
													validate={state.creditPercentFireValidation}
													size={150}
												/>
											</>
										)}
									</div>
								)}

								{state.policyType.includes('HealthEntries') && (
									<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
										<SelectBox
											id="outlined-basic"
											label="Credit Type"
											data={creditLists}
											variant="outlined"
											value={state.creditTypeHealth}
											validation="creditTypeHealth"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											size={150}
										/>
										<FormattedInput
											id="outlined-basic"
											label="Health Premium"
											variant="outlined"
											value={state.policyPremiumHealth}
											validation="policyPremiumHealth"
											type="percent"
											willvalidation={true}
											validate={state.policyPremiumHealthValidation}
											handleChangeValue={handleChangeValue}
											size={150}
										/>

										<TextInput
											id="outlined-basic"
											label="Policy Information"
											variant="outlined"
											value={state.policyInformationHealth}
											validation="policyInformationHealth"
											onChange={handleChangeValue}
											willvalidation={false}
											validate={false}
											size={350}
										/>

										<SelectBox
											id="outlined-basic"
											label="Product Type of Health"
											data={state.healthProductList}
											variant="outlined"
											value={state.typeOfProductHealth}
											validation="typeOfProductHealth"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeOfProductHealthValidation}
											size={250}
										/>
										{state.creditTypeHealth === 'split_credit' && (
											<>
												<SelectBox
													id="outlined-basic"
													label="Credit User"
													data={state.usersList}
													variant="outlined"
													value={state.creditUserHealth}
													validation="creditUserHealth"
													handleChangeValue={handleChangeValue}
													willvalidation={false}
													validate={state.creditUserHealthValidation}
												/>
												<TextInput
													id="outlined-basic"
													label="Sale Credit"
													variant="outlined"
													value={state.creditPercentHealth}
													validation="creditPercentHealth"
													type="percent"
													onChange={handleChangeValue}
													willvalidation={true}
													validate={state.creditPercentHealthValidation}
													size={150}
												/>
											</>
										)}
									</div>
								)}

								{state.policyType.includes('LifeEntries') && (
									<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
										<SelectBox
											id="outlined-basic"
											label="Credit Type"
											data={creditLists}
											variant="outlined"
											value={state.creditTypeLife}
											validation="creditTypeLife"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											size={150}
										/>
										<FormattedInput
											id="outlined-basic"
											label="Life Premium"
											variant="outlined"
											value={state.policyPremiumLife}
											validation="policyPremiumLife"
											type="percent"
											willvalidation={true}
											validate={state.policyPremiumLifeValidation}
											handleChangeValue={handleChangeValue}
											size={150}
										/>

										<TextInput
											id="outlined-basic"
											label="Policy Information"
											variant="outlined"
											value={state.policyInformationLife}
											validation="policyInformationLife"
											onChange={handleChangeValue}
											willvalidation={false}
											validate={false}
											size={350}
										/>

										<SelectBox
											id="outlined-basic"
											label="Product Type of Life"
											data={state.lifeProductList}
											variant="outlined"
											value={state.typeOfProductLife}
											validation="typeOfProductLife"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeOfProductLifeValidation}
											size={250}
										/>
										{state.creditTypeLife === 'split_credit' && (
											<>
												<SelectBox
													id="outlined-basic"
													label="Credit User"
													data={state.usersList}
													variant="outlined"
													value={state.creditUserLife}
													validation="creditUserLife"
													handleChangeValue={handleChangeValue}
													willvalidation={false}
													validate={state.creditUserLifeValidation}
												/>
												<TextInput
													id="outlined-basic"
													label="Sale Credit"
													variant="outlined"
													value={state.creditPercentLife}
													validation="creditPercentLife"
													type="percent"
													onChange={handleChangeValue}
													willvalidation={true}
													validate={state.creditPercentLifeValidation}
													size={150}
												/>
											</>
										)}
									</div>
								)}

								{state.policyType.includes('BankEntries') && (
									<div className="min-w-xl w-full flex flex-row justify-around flex-wrap">
										<SelectBox
											id="outlined-basic"
											label="Credit Type"
											data={creditLists}
											variant="outlined"
											value={state.creditTypeBank}
											validation="creditTypeBank"
											handleChangeValue={handleChangeValue}
											willvalidation={false}
											size={150}
										/>
										<FormattedInput
											id="outlined-basic"
											label="Bank Premium"
											variant="outlined"
											value={state.policyPremiumBank}
											validation="policyPremiumBank"
											type="percent"
											willvalidation={true}
											validate={state.policyPremiumBankValidation}
											handleChangeValue={handleChangeValue}
											size={150}
										/>

										<TextInput
											id="outlined-basic"
											label="Policy Information"
											variant="outlined"
											value={state.policyInformationBank}
											validation="policyInformationBank"
											onChange={handleChangeValue}
											willvalidation={false}
											validate={false}
											size={350}
										/>

										<SelectBox
											id="outlined-basic"
											label="Product Type of Bank"
											data={state.bankProductList}
											variant="outlined"
											value={state.typeOfProductBank}
											validation="typeOfProductBank"
											handleChangeValue={handleChangeValue}
											willvalidation={true}
											validate={state.typeOfProductBankValidation}
											size={250}
										/>
										{state.creditTypeBank === 'split_credit' && (
											<>
												<SelectBox
													id="outlined-basic"
													label="Credit User"
													data={state.usersList}
													variant="outlined"
													value={state.creditUserBank}
													validation="creditUserBank"
													handleChangeValue={handleChangeValue}
													willvalidation={false}
													validate={state.creditUserBankValidation}
												/>
												<TextInput
													id="outlined-basic"
													label="Sale Credit"
													variant="outlined"
													value={state.creditPercentBank}
													validation="creditPercentBank"
													type="percent"
													onChange={handleChangeValue}
													willvalidation={true}
													validate={state.creditPercentBankValidation}
													size={150}
												/>
											</>
										)}
									</div>
								)}
							</div>
						</FuseScrollbars>
					</MuiPickersUtilsProvider>
				</div>
			}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Products);
