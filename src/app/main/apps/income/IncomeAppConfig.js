import React from 'react';
import { Redirect } from 'react-router-dom';

const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/income/payroll',
			component: React.lazy(() => import('./payroll/IncomePayroll'))
		},
		{
			path: '/apps/income/possible-money',
			component: React.lazy(() => import('./possibleMoney/IncomePossibleMoney'))
		},
		{
			path: '/apps/income',
			component: () => <Redirect to="/apps/income/payroll" />
		}
	]
};

export default ProjectDashboardAppConfig;
