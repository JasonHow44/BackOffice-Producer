import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getUsers = createAsyncThunk(
	'incomeApp/users/getUsers', 
	() =>
		new Promise((resolve, reject) => {
			const belongTo = sessionStorage.getItem('@BELONGTO');
			const starCountRef = realDb.ref(`users/`);
			let users = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					users = Object.values(data).filter(item => item.belongTo === belongTo);
				}

				const adminStarCountRef = realDb.ref(`admin/${belongTo}`);

				adminStarCountRef.on('value', adminSnapshot => {
					const adminData = adminSnapshot.val();

					if (adminData) {
						users.push(adminData);
					}

					resolve(users);
				});
			});
		})
);

// export const getUsers = createAsyncThunk('producerApp/users/getUsers', async () => {
// 	const response = await axios.get('/api/producer-app/users');
// 	const data = await response.data;

// 	return data;
// });

const usersAdapter = createEntityAdapter({});

export const { selectAll: selectUsers, selectById: selectUserById } = usersAdapter.getSelectors(
	state => state.incomeApp.users
);

const usersSlice = createSlice({
	name: 'incomeApp/users',
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
