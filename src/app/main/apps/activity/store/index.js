import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import entries from './entriesSlice';

const reducer = combineReducers({
	entries,
	widgets,
});

export default reducer;
