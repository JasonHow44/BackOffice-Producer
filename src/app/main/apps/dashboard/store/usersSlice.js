import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getUsers = createAsyncThunk(
	'dashboardApp/users/getUsers',
	() =>
	new Promise((resolve, reject) => {
		const belongTo = sessionStorage.getItem('@BELONGTO');
		var starCountRef = realDb.ref(`users/`);
		var agencyRef = realDb.ref(`agency/`);
		var adminRef = realDb.ref(`admin/${belongTo}`);
		var users = [];
		starCountRef.on('value', snapshot => {
			const data = snapshot.val();

			if (data) {
				users = Object.values(data).filter(item => item.belongTo === belongTo)
			}

			agencyRef.on('value', snap => {
				const agencyData = snap.val()
				if (agencyData) {
					users.push(...Object.values(agencyData).filter(item => item.belongTo === belongTo));
				}

				adminRef.on('value', adminSnap => {
					const adminData = adminSnap.val()
					if (adminData) {
						users.push(adminData);
					}
					resolve(users);
				})
			})
		});
	})
);

const usersAdapter = createEntityAdapter({});

export const { selectAll: selectUsers, selectById: selectUserById } = usersAdapter.getSelectors(
	state => state.dashboardApp.users
);

const usersSlice = createSlice({
	name: 'dashboardApp/users',
	initialState: usersAdapter.getInitialState({
		production: '',
	}),
	reducers: {
		setUser: {
			reducer: (state, action) => {
				state.production = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
	},
	extraReducers: {
		[getUsers.fulfilled]: usersAdapter.setAll
	}
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
