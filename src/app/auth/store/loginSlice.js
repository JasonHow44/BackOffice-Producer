import { createSlice } from '@reduxjs/toolkit';
import { showMessage } from 'app/store/fuse/messageSlice';
import firebaseService from 'app/services/firebaseService';
import {auth, realDb} from '../../../@fake-db/db/firebase'
import jwtService from 'app/services/jwtService';
import { setUserData } from './userSlice';
import { createLoginUserSettingsFirebase } from './userSlice';

import history from '@history';

export const submitLogin = ({ email, password }) => async dispatch => {
	return jwtService
		.signInWithEmailAndPassword(email, password)
		.then(user => {
			dispatch(setUserData(user));

			return dispatch(loginSuccess());
		})
		.catch(error => {
			return dispatch(loginError(error));
		});
};

export const submitLoginWithFireBase = ({ username, password }) => async dispatch => {
	if (!auth) {
		// console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}
	return auth
		.signInWithEmailAndPassword(username, password)
		.then((user) => {
			var teamRef = realDb.ref(`teams/`);
			teamRef.on('value', teamSnapshot => {
				const data = teamSnapshot.val();
				let belongTo = '';
				if (data) {
					Object.keys(data).map(item => {
						console.log(data)
						if(Object.keys(data[item]).includes("teamProducer")){
							if (data[item].teamProducer.includes(user.user.uid)) {
								belongTo = item;
							}
						}						
					});
					if(belongTo){
						dispatch(
							createLoginUserSettingsFirebase({
								...user.user,
								displayName:user.user.displayName,
								email:user.user.email,
								password,
								belongTo
							})						
						);
					}					
				}
			})
			
	
			return dispatch(loginSuccess());
		})
		.catch(error => {
			const usernameErrorCodes = [
				'auth/email-already-in-use',
				'auth/invalid-email',
				'auth/operation-not-allowed',
				'auth/user-not-found',
				'auth/user-disabled'
			];
			const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

			const response = {
				username: usernameErrorCodes.includes(error.code) ? error.message : null,
				password: passwordErrorCodes.includes(error.code) ? error.message : null
			};

			if (error.code === 'auth/invalid-api-key') {
				dispatch(showMessage({ message: error.message }));
			}

			return dispatch(loginError(response));
		});
};

const initialState = {
	success: false,
	error: {
		username: null,
		password: null
	}
};

const loginSlice = createSlice({
	name: 'auth/login',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.success = true;
		},
		loginError: (state, action) => {
			state.success = false;
			state.error = action.payload;
		}
	},
	extraReducers: {}
});

export const { loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
