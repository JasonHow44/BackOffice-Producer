import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = sessionStorage.getItem('@BELONGTO');

export const getBonus = createAsyncThunk(
	'eCommerceApp/bonus/getProducts',
	() =>
		new Promise((resolve, reject) => {
			var uid = sessionStorage.getItem('@UID');
			var starCountRef = realDb.ref(`BonusPlan/${belongTo}/${uid}/`);
			var bonusPlanTemplateRef = realDb.ref(`BonusPlanTemplate/${belongTo}`);

			var bonus = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();
				if (data) {
					bonusPlanTemplateRef.on('value', snap => {
						const snapData = snap.val();
						bonus.push(snapData[data.name]);
						resolve(bonus);
					});
				}
			});
		})
);

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectBonus, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.eCommerceApp.bonus
);

const productsSlice = createSlice({
	name: 'eCommerceApp/bonus',
	initialState: productsAdapter.getInitialState({
		searchText: '',
		editData: {}
	}),
	reducers: {
		setProductsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getBonus.fulfilled]: productsAdapter.setAll
	}
});

export const { setProductsSearchText } = productsSlice.actions;

export default productsSlice.reducer;
