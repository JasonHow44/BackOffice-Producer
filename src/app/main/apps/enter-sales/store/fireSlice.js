import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = sessionStorage.getItem('@BELONGTO')

export const getFires = createAsyncThunk(
	'eCommerceApp/fireEntries/getProducts',
	() =>
	
		new Promise((resolve, reject) => {
			const uid = sessionStorage.getItem('@UID')
			var starCountRef = realDb.ref(`Sales/${belongTo}/FireEntries/${uid}`);
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						entries.push(data[item]);
					});
				}

				resolve(entries);
			});
		})
);

export const saveProduct = createAsyncThunk('eCommerceApp/fireEntry/saveProduct', async (product, { dispatch, getState }) => {

	const response = await axios.post('/api/fire-entry/product/save', product);
	const data = await response.data;
	dispatch(getFires());
	return data;
});

export const removeProducts = createAsyncThunk(
	'eCommerceApp/fireEntries/removeProducts',
	async (productIds, { dispatch, getState }) => {
		const response = await axios.post('/api/fire-entry/remove-products', { productIds });
		const data = await response.data;
		const uid = sessionStorage.getItem('@UID')
		productIds.map(item => {
			var starCountRef = realDb.ref(`Sales/${belongTo}/FireEntries/${uid}/${item}`);
			starCountRef.remove();
		});

		dispatch(getFires());

		return data;
	}
);

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectFires, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.eCommerceApp.fireEntries
);

const productsSlice = createSlice({
	name: 'eCommerceApp/fireEntries',
	initialState: productsAdapter.getInitialState({
		searchText: ''
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
		[getFires.fulfilled]: productsAdapter.setAll
	}
});

export const { setProductsSearchText } = productsSlice.actions;

export default productsSlice.reducer;
