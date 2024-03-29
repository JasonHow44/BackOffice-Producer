import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = sessionStorage.getItem('@BELONGTO')

export const getEntries = createAsyncThunk(
	'activityApp/entries/getEntries',
	(year) =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Sales/${year}/${belongTo}/`);
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						entries.push(data[item]);
					});
				}

				if(data) {
					resolve([data])
				} else {
					resolve([]);
				}
			});
		})
);

const entriesAdapter = createEntityAdapter({});

export const { selectAll: selectEntries, selectById: selectEntryById } = entriesAdapter.getSelectors(
	state => state.activityApp.entries
);

const entriesSlice = createSlice({
	name: 'activityApp/entries',
	initialState: entriesAdapter.getInitialState({
		searchText: ''
	}),
	reducers: {
		setSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
	},
	extraReducers: {
		[getEntries.fulfilled]: entriesAdapter.setAll
	}
});

export const { setSearchText } = entriesSlice.actions;

export default entriesSlice.reducer;
