import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import {realDb} from '../../../../../@fake-db/db/firebase'

var belongTo = sessionStorage.getItem('@BELONGTO')
var UID = sessionStorage.getItem('@UID')

export const getBonusPlans = createAsyncThunk(
	'dashboardApp/bonusPlans/getBonusPlans', 
	(routeParams) =>
		new Promise((resolve, reject) => {
			const starCountRef = realDb.ref(`BonusPlan/${belongTo}`)
			const bonusPlans = [];
			starCountRef.on("value", (snapshot) => {
				const data = snapshot.val();
			
				if (data) {
					Object.keys(data).forEach(item => {
						bonusPlans.push({user: item, ...data[item]});
					});
				}
			
				if (data) {
					var templateRef = realDb.ref(
						`BonusPlanTemplate/${belongTo}`
					);
					templateRef.on("value", (snapshot) => {
						const templatePlan = snapshot.val();
					
						if (templatePlan) {
							resolve(bonusPlans.map(item => ({ ...templatePlan[item.name], id: item.user })));
						} else {
							resolve([]);
						}
					});
				} else {
					resolve([]);
				}
			});
		})
);

const bonusPlansAdapter = createEntityAdapter({});

export const { selectAll: selectBonusPlans, selectById: selectBonusPlansById } = bonusPlansAdapter.getSelectors(
	state => state.dashboardApp.bonusPlans
);

const bonusPlansSlice = createSlice({
	name: 'dashboardApp/bonusPlans',
	initialState: bonusPlansAdapter.getInitialState({
		searchText: '',
	}),
	reducers: {},
	extraReducers: {
		[getBonusPlans.fulfilled]: bonusPlansAdapter.setAll
	}
});

export const {} = bonusPlansSlice.actions;

export default bonusPlansSlice.reducer;
