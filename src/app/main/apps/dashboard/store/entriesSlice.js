import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = sessionStorage.getItem('@BELONGTO')

export const getEntries = createAsyncThunk(
	'dashboardApp/entries/getEntries',
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
	state => state.dashboardApp.entries
);

const entriesSlice = createSlice({
	name: 'dashboardApp/entries',
	initialState: entriesAdapter.getInitialState({
	}),
	reducers: {},
	extraReducers: {
		[getEntries.fulfilled]: entriesAdapter.setAll
	}
});

export const {} = entriesSlice.actions;

export default entriesSlice.reducer;
