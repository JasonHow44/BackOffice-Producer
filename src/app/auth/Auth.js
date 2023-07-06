import FuseSplashScreen from '@fuse/core/FuseSplashScreen';
import auth0Service from 'app/services/auth0Service';
import firebaseService from 'app/services/firebaseService';
import jwtService from 'app/services/jwtService';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { hideMessage, showMessage } from 'app/store/fuse/messageSlice';
import history from '@history';
import { realDb } from '@fake-db/db/firebase';
import axios from 'axios';
import { firebaseFunctionGetSubscrioption } from 'app/fuse-configs/endpointConfig';
import { Dialog, DialogContent, DialogContentText } from '@material-ui/core';
import { setUserDataFirebase, setUserDataAuth0, setUserData, logoutUser } from './store/userSlice';

const getAdmin = belongTo =>
	new Promise((resolve, reject) => {
		const adminRef = realDb.ref(`admin/${belongTo}/`);

		const users = [];
		adminRef.on('value', adminSnap => {
			const adminData = adminSnap.val();
			if (adminData) {
				users.push(adminData);
			}
			resolve(users[0]);
		});
	});

class Auth extends Component {
	state = {
		waitAuthCheck: true,
		open: false
	};

	componentDidMount() {
		return Promise.all([
			// Comment the lines which you do not use
			this.firebaseCheck(),
			this.auth0Check(),
			this.jwtCheck()
		]).then(() => {
			this.setState({ waitAuthCheck: false });
		});
	}

	jwtCheck = () =>
		new Promise(resolve => {
			jwtService.on('onAutoLogin', () => {
				this.props.showMessage({ message: 'Logging in with JWT' });

				/**
				 * Sign in and retrieve user data from Api
				 */
				jwtService
					.signInWithToken()
					.then(user => {
						this.props.setUserData(user);

						resolve();

						this.props.showMessage({ message: 'Logged in with JWT' });
					})
					.catch(error => {
						this.props.showMessage({ message: error.message });

						resolve();
					});
			});

			jwtService.on('onAutoLogout', message => {
				if (message) {
					this.props.showMessage({ message });
				}

				this.props.logout();

				resolve();
			});

			jwtService.on('onNoAccessToken', () => {
				resolve();
			});

			jwtService.init();

			return Promise.resolve();
		});

	auth0Check = () =>
		new Promise(resolve => {
			auth0Service.init(success => {
				if (!success) {
					resolve();
				}
			});

			if (auth0Service.isAuthenticated()) {
				this.props.showMessage({ message: 'Logging in with Auth0' });

				/**
				 * Retrieve user data from Auth0
				 */
				auth0Service.getUserData().then(tokenData => {
					this.props.setUserDataAuth0(tokenData);

					resolve();

					this.props.showMessage({ message: 'Logged in with Auth0' });
				});
			} else {
				resolve();
			}

			return Promise.resolve();
		});

	stripeCheck = async () => {
		const { belongTo } = this.props.user;
		const adminRef = await getAdmin(belongTo);
		if (adminRef) {
			const subscriptionID = adminRef.subscriptionInfo.response.id;
			const res = await axios.post(firebaseFunctionGetSubscrioption, { subscriptionID });

			if (res.data.status !== 'active') {
				realDb.ref(`admin/${belongTo}/subscriptionInfo`).set({
					...adminRef.subscriptionInfo,
					active: false,
					response: {
						plan: { id: '' }
					}
				});
				this.setState({ open: true });
			} else if (!this.props.user.active) {
				realDb.ref(`users/${this.props.user.uid}/active`).set(true);
				this.setState({ open: false });
			}

			console.log(res);
		}
	};

	firebaseCheck = () =>
		new Promise(resolve => {
			firebaseService.init(success => {
				if (!success) {
					resolve();
				}
			});

			firebaseService.onAuthStateChanged(authUser => {
				if (history.location.pathname.includes('agency-login')) {
					this.props.logout();
				}

				if (authUser) {
					this.props.showMessage({ message: 'Logging in with Firebase' });
					this.stripeCheck();
					/**
					 * Retrieve user data from Firebase
					 */
					firebaseService.getUserData(authUser.uid).then(
						user => {
							this.props.setUserDataFirebase(user, authUser);

							resolve();

							this.props.showMessage({ message: 'Logged in with Firebase' });
						},
						error => {
							resolve();
						}
					);
				} else {
					resolve();
				}
			});

			return Promise.resolve();
		});

	render() {
		return this.state.waitAuthCheck ? (
			<FuseSplashScreen />
		) : (
			<>
				{this.props.children}
				<Dialog open={this.state.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							OOPS... You're plan has expired.
						</DialogContentText>
					</DialogContent>
				</Dialog>
			</>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			logout: logoutUser,
			setUserData,
			setUserDataAuth0,
			setUserDataFirebase,
			showMessage,
			hideMessage
		},
		dispatch
	);
}

export default connect(({ auth }) => auth, mapDispatchToProps)(Auth);
