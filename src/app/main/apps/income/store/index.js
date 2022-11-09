import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import entries from './entriesSlice';
import bonusPlans from './bonusPlansSlice';
import lapseRate from './lapseRateSlice';
import policyGrowth from './policyGrowthSlice';
import users from './usersSlice';

const reducer = combineReducers({
	widgets,
	bonusPlans,
	lapseRate,
	policyGrowth,
	entries,
	users,
});

export default reducer;
