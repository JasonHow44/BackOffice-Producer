import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, useParams } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import FuseAnimate from '@fuse/core/FuseAnimate/FuseAnimate';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { showMessage } from 'app/store/fuse/messageSlice';
import { getUsers, selectUsers } from '../store/userSlice';
import { getProductType, selectProductType } from '../store/productTypeSlice';
import { getMarketing, selectMarketing } from '../store/businessSlice';
import { getBonus, selectBonus } from '../store/bonusSlice';
import TextInput from '../../../components/TextField';
import FormattedInput from '../../../components/PriceInput';
import SelectBox from '../../../components/SelectBox';
import MultiSelectBox from '../../../components/MultiSelectBox';
import reducer from '../store';
import { getEntries, selectEntries, saveProduct, saveMultiAutoProduct, cleanEditData } from '../store/entrySlice';

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

const productLists = [
	{ item: 'Personally Produced', value: 'Personally Produced' },
	{ item: 'Raw New', value: 'Raw New' },
	{ item: 'Add On', value: 'Add On' },
	{ item: 'Transfer In', value: 'Transfer In' }
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

const alignBonus = bonus => {
	var tempBonusLists = {};
	if (bonus.length > 0) {
		Object.keys(bonus[0]).map(policy => {
			Object.keys(bonus[0][policy]).map(itemId => {
				tempBonusLists = {
					...tempBonusLists,
					[bonus[0][policy][itemId].name]: bonus[0][policy][itemId].percent,
					[bonus[0][policy][itemId].name + '@Dollar']: bonus[0][policy][itemId].dollar
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
	const users = useSelector(selectUsers);
	const bonus = useSelector(selectBonus);
	const bonusLists = alignBonus(bonus);
	const productType = useSelector(selectProductType);
	const marketing = useSelector(selectMarketing);
	const routeParams = useParams();
	const [route, setRoute] = useState(routeParams.id);
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

	const [state, setState] = React.useState({
		policyHolderName: '',
		autos: [
			{
				referenceName: '',
				datePolicyIsIssued: null,
				policyPremium: '',
				creditTypeAuto: 'solo_credit',
				creditPercentAuto: '',
				policyInformation: '',
				typeOfProduct: '',
				creditUserAuto: ''
			}
		],
		datePolicyIsWritten: new Date(),
		policyType: ['Entries'],
		sourceOfBusiness: '',
		otherActivity: '',
		adjustments: '',
		dollarBonus: '',
		policyHolderNameValidation: false,
		policyTypeValidation: false,
		policyHolderTypeValidation: false,
		typeOfProductValidation: false,
		previousPolicyNumberValidation: false,
		marketings: [],
		policyHolderType: 'household',
		tempUserList: [],
		productLists: [],
		othersList: []
	});

	useEffect(() => {
		dispatch(getEntries()).then(() => setLoading(false));
		dispatch(getProductType());
		dispatch(getUsers());
		dispatch(getBonus());
		dispatch(getMarketing());
	}, [dispatch]);

	useEffect(() => {}, [editData]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(_.filter(products, item => item.policyHolderName.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(products);
		}
	}, [products, searchText]);

	useEffect(() => {
		const tempUsers = [];
		const tempMarketing = [];
		const tempProductList = [];
		let tempOthers = [];
		const tempBonus = [];
		const tempFireBonus = [];
		const tempHealthBonus = [];
		const tempLifeBonus = [];
		const tempBankBonus = [];
		if (productType.length > 0) {
			Object.keys(productType[0]).map(i => {
				tempProductList.push({
					item: productType[0][i].productTypeName,
					value: productType[0][i].productTypeName
				});
			});
		}
		if (marketing.length > 0) {
			Object.keys(marketing[0]).map(i => {
				tempMarketing.push({
					item: marketing[0][i].marketingName,
					value: marketing[0][i].marketingName
				});
			});
		}
		if (users.length > 0) {
			users.map(item => {
				tempUsers.push({ item: item.data.displayName, value: item.id });
			});
		}

		if (bonus.length > 0) {
			tempOthers = Object.values(bonus[0].otherActivityBonus);
			Object.keys(bonus[0].autoBonus).map(item => {
				tempBonus.push({
					item: bonus[0].autoBonus[item].name,
					value: bonus[0].autoBonus[item].name
				});
			});
		}
		setState({
			...state,

			tempUserList: tempUsers,
			marketings: tempMarketing,
			productLists: tempBonus,
			othersList: tempOthers,
			fireProductList: tempFireBonus,
			healthProductList: tempHealthBonus,
			lifeProductList: tempLifeBonus,
			bankProductList: tempBankBonus
		});
	}, [users, marketing, productType, editData, bonus]);

	function handleDateChange(date, id) {
		setState({ ...state, [id]: date });
	}

	function handleChangeValue(data) {
		if (Object.keys(data)[0] === 'policyHolderType') {
			setState({
				...state,
				...data,
				policyType: [state.policyType[0]]
			});
		} else {
			setState({ ...state, ...data });
		}
	}

	function checkValidation() {
		let validate = false;
		state.autos = state.autos.map(item => {
			validate = item.policyPremium && item.policyPremium;
			return {
				...item,
				policyPremiumValidation: !item.policyPremium,
				typeOfProductValidation: !item.typeOfProduct
			};
		});

		validate = validate && state.policyHolderName;
		setState({
			...state,
			policyHolderNameValidation: !state.policyHolderName
		});
		return validate;
	}

	function addAutoPolicies() {
		setState({
			...state,

			autos: [
				...state.autos,
				{
					referenceName: '',
					datePolicyIsIssued: null,
					policyPremium: '',
					creditTypeAuto: 'solo_credit',
					creditPercentAuto: '',
					policyInformation: '',
					typeOfProduct: '',
					creditUserAuto: ''
				}
			]
		});
	}

	function removeAutoPolicy(index) {
		const tempAuto = [...state.autos];
		tempAuto.splice(index, 1);
		setState({
			...state,
			autos: [...tempAuto]
		});
	}

	function dollarBonus(policyPremium, creditType, creditPercent, typeOfProduct) {
		let result = 0

		if (bonusLists[typeOfProduct]) {
			result = parseFloat(policyPremium) * parseFloat(creditType === 'solo_credit' ? 100 : creditPercent) / 100
			result *= (parseFloat(bonusLists[typeOfProduct]) / 100)
		} else if (bonusLists[typeOfProduct + '@Dollar']) {
			result = parseFloat(bonusLists[typeOfProduct + '@Dollar'])
		}

		if (state.otherActivity) {
			const activity = state.othersList.find(item => item.name === state.otherActivity)
			result += activity.dollar || 0;
		}

		return Math.round(result * 100) / 100
	}

	function onSave() {
		console.log(checkValidation());
		if (checkValidation()) {
			const belongTo = sessionStorage.getItem('@BELONGTO');
			const uid = sessionStorage.getItem('@UID');
			const requestForm = [];
			let form = {
				id: Date.now(),
				policyHolderName: state.policyHolderName,
				policyInformation: state.policyInformation,
				policyHolderType: state.policyHolderType,
				policyType: state.policyType,
				datePolicyIsWritten: state.datePolicyIsWritten ? state.datePolicyIsWritten : '',
				datePolicyIsIssued: state.datePolicyIsIssued ? state.datePolicyIsIssued : '',
				// percentOfSaleCredit: parseFloat(state.percentOfSaleCredit),
				previousPolicyNumber: state.previousPolicyNumber,
				policies: route === 'edit' ? state.policies : state.policyType,
				typeOfProduct: state.typeOfProduct,
				policyPremium: parseFloat(state.policyPremium),
				sourceOfBusiness: state.sourceOfBusiness,
				otherActivity: state.otherActivity,
				adjustments: state.adjustments,
				dollarBonus: state.dollarBonus,
				belongTo,
				uid
			};
			console.log(form);
			state.autos.map((item, index) => {
				if (item.datePolicyIsIssued) {
					form = {
						...form,
						dollarBonus: dollarBonus(item.policyPremium, item.creditTypeAuto, item.creditPercentAuto, item.typeOfProduct),
						policyType: ['Entries'],
						typeOfProduct: item.typeOfProduct,
						policyPremium: item.policyPremium,
						referenceName: item.referenceName,
						policyInformation: item.policyInformation,
						datePolicyIsIssued: item.datePolicyIsIssued,
						creditPercent: item.creditTypeAuto === 'solo_credit' ? 100 : item.creditPercentAuto,
						creditUser: item.creditUserAuto,
						creditType: item.creditTypeAuto,
						id: Date.now() + index
					};
					requestForm.push(form);
				} else {
					form = {
						...form,
						dollarBonus: item.datePolicyIsIssued ? dollarBonus(item.policyPremium, item.creditTypeAuto, item.creditPercentAuto, item.typeOfProduct) : '',
						policyType: ['Entries'],
						typeOfProduct: item.typeOfProduct,
						policyPremium: item.policyPremium,
						referenceName: item.referenceName,
						policyInformation: item.policyInformation,
						datePolicyIsIssued: item.datePolicyIsIssued,
						creditPercent: item.creditTypeAuto === 'solo_credit' ? 100 : item.creditPercentAuto,
						creditUser: item.creditUserAuto,
						creditType: item.creditTypeAuto,
						id: Date.now() + index
					};
					requestForm.push(form);
				}
			});
			console.log(requestForm);
			if (uid && belongTo) {
				dispatch(saveMultiAutoProduct(requestForm)).then(() => {
					history.push('/apps/enter-sales/auto-entry');
				});
			}
		}
	}

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
								<span className="mx-4">Sale</span>
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
									<Typography className="text-16 sm:text-20 truncate">Multi Auto Policies</Typography>
								</FuseAnimate>
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography variant="caption">Sales Detail</Typography>
								</FuseAnimate>
							</div>
						</div>
					</div>

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
			}
			content={
				<div className="w-full flex flex-col relative">
					<Fab
						color="secondary"
						aria-label="add"
						className="absolute right-4 top-4 z-50"
						onClick={addAutoPolicies}
					>
						<Icon>add</Icon>
					</Fab>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<FuseScrollbars className="flex-grow overflow-x-auto flex justify-around">
							<div className="min-w-xl p-96 h-full w-5xl flex flex-row flex-wrap relative">
								{/* <div className="flex w-full justify-between items-center flex-wrap py-12"> */}

								<div className="min-w-md w-full flex flex-row justify-around flex-wrap">
									<TextInput
										id="outlined-basic"
										label="Policy Holder Name"
										variant="outlined"
										value={state.policyHolderName}
										validation="policyHolderName"
										onChange={handleChangeValue}
										willvalidation
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
								</div>
								<div className="min-w-md w-full flex flex-row justify-around flex-wrap">
									<SelectBox
										id="outlined-basic"
										label="Type of Placeholder"
										disabled={routeParams.id === 'edit'}
										data={policyholderTypeLists}
										variant="outlined"
										value={state.policyHolderType}
										validation="policyHolderType"
										handleChangeValue={handleChangeValue}
										willvalidation
										validate={state.policyHolderTypeValidation}
									/>
									<SelectBox
										id="outlined-basic"
										label="Marketing Source"
										data={state.marketings}
										variant="outlined"
										value={state.sourceOfBusiness}
										validation="sourceOfBusiness"
										handleChangeValue={handleChangeValue}
										willvalidation={false}
									/>
									<SelectBox
										id="outlined-basic"
										label="Other Activity"
										data={state.othersList.map(item => ({
											item: item.name,
											value: item.name
										}))}
										variant="outlined"
										value={state.otherActivity}
										validation="otherActivity"
										handleChangeValue={handleChangeValue}
										willvalidation={false}
									/>
									{state.policyType.length === 1 && state.policyHolderType === 'household' && (
										<TextInput
											id="outlined-basic"
											label="Previous Policy Number"
											variant="outlined"
											value={state.previousPolicyNumber}
											validation="previousPolicyNumber"
											onChange={handleChangeValue}
											willvalidation
											validate={state.previousPolicyNumberValidation}
											size={200}
										/>
									)}
								</div>
								{state.policyType.includes('Entries') &&
									state.autos.map((item, index) => {
										return (
											<div className="min-w-md w-full flex flex-row justify-around flex-wrap">
												{index !== 0 && (
													<Fab
														color="secondary"
														aria-label="add"
														className="absolute right-4 z-50"
														onClick={() => removeAutoPolicy(index)}
													>
														<Icon>remove</Icon>
													</Fab>
												)}
												<SelectBox
													id="outlined-basic"
													label="Credit Type"
													data={creditLists}
													variant="outlined"
													value={item.creditTypeAuto}
													validation="creditTypeAuto"
													handleChangeValue={data => {
														const tempAuto = [...state.autos];
														tempAuto[index].creditTypeAuto = data.creditTypeAuto;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													willvalidation={false}
													size={150}
												/>
												<TextInput
													id="outlined-basic"
													label="Reference Name"
													variant="outlined"
													value={item.referenceName}
													validation="referenceName"
													onChange={data => {
														const tempAuto = [...state.autos];
														tempAuto[index].referenceName = data.referenceName;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													willvalidation={false}
													validate={false}
													size={150}
												/>
												<FormattedInput
													id="outlined-basic"
													label="Auto Premium"
													variant="outlined"
													value={item.policyPremium}
													validation="policyPremium"
													type="percent"
													willvalidation
													validate={item.policyPremiumValidation}
													handleChangeValue={data => {
														const tempAuto = [...state.autos];
														tempAuto[index].policyPremium = data.policyPremium;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													size={150}
												/>

												<TextInput
													id="outlined-basic"
													label="Policy Information"
													variant="outlined"
													value={state.policyInformation}
													validation="policyInformation"
													onChange={data => {
														const tempAuto = [...state.autos];
														tempAuto[index].policyInformation = data.policyInformation;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													willvalidation={false}
													validate={false}
													size={350}
												/>

												<SelectBox
													id="outlined-basic"
													label="Product Type of Auto"
													data={state.productLists}
													variant="outlined"
													value={item.typeOfProduct}
													validation="typeOfProduct"
													handleChangeValue={data => {
														const tempAuto = [...state.autos];
														tempAuto[index].typeOfProduct = data.typeOfProduct;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													willvalidation
													validate={item.typeOfProductValidation}
												/>

												{item.creditTypeAuto === 'split_credit' && (
													<>
														<SelectBox
															id="outlined-basic"
															label="Credit User"
															data={state.tempUserList}
															variant="outlined"
															value={item.creditUserAuto}
															validation="creditUserAuto"
															handleChangeValue={data => {
																const tempAuto = [...state.autos];
																tempAuto[index].creditUserAuto = data.creditUserAuto;
																setState({
																	...state,
																	autos: [...tempAuto]
																});
															}}
															willvalidation={false}
															validate={state.creditUserAutoValidation}
														/>
														<TextInput
															id="outlined-basic"
															label="Sale Credit"
															variant="outlined"
															value={item.creditPercentAuto}
															validation="creditPercentAuto"
															type="percent"
															onChange={data => {
																const tempAuto = [...state.autos];
																tempAuto[index].creditPercentAuto =
																	data.creditPercentAuto;
																setState({
																	...state,
																	autos: [...tempAuto]
																});
															}}
															willvalidation
															validate={state.creditPercentAutoValidation}
															size={150}
														/>
													</>
												)}
												<KeyboardDatePicker
													margin="normal"
													id="date-picker-dialog"
													format="MM/dd/yyyy"
													className={classes.datePicker}
													label="Date Policy Is Issued"
													value={item.datePolicyIsIssued}
													onChange={date => {
														const tempAuto = [...state.autos];
														tempAuto[index].datePolicyIsIssued = date;
														setState({
															...state,
															autos: [...tempAuto]
														});
													}}
													KeyboardButtonProps={{
														'aria-label': 'change date'
													}}
												/>
											</div>
										);
									})}
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
