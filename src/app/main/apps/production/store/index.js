import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import users from './usersSlice';
import bonusPlans from './bonusPlansSlice';
import lapseRate from './lapseRateSlice';
import policyGrowth from './policyGrowthSlice';
import marketings from './marketingsSlice';
import entries from './entriesSlice';
import vision from './visionSlice';

const reducer = combineReducers({
	widgets,
	users,
	bonusPlans,
	lapseRate,
	policyGrowth,
	marketings,
	entries,
	vision,
});

export default reducer;
