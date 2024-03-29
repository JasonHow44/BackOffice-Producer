import _ from '@lodash';
import mock from '../mock';

const activityAppDB = {
	widgets: [
		{
			id: 'Dashboard_Multiline_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				},
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Bank_Panel',
			title: 'Bank',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Auto_Panel',
			title: 'Auto',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				},
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Fire_Panel',
			title: 'Fire',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Life_Panel',
			title: 'Life',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Health_Panel',
			title: 'Health',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Bank_Panel',
			title: 'Bank',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Team_GoalAndActual_Total_Panel',
			title: 'Total',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-green',
					label: 'Goal',					
					fontSize: 72,
					endAdornment: ''
				},
				{
					title: '',
					count: 0,
					color: 'text-blue',
					label: 'Actual',					
					fontSize: 72,
					endAdornment: ''
				}
			]
		},
		{
			id: 'Dashboard_Multiline_Percentage_Panel',
			title: '',
			subTitle: '',
			cardData: [
				{
					title: '',
					count: 0,
					color: 'text-red',
					label: '',					
					fontSize: 72,
					endAdornment: '%'
				}
			]
		},
		{
			id: 'Dashboard_LapseRate_Auto_Panel',
			title: 'Auto',
			subTitle: '',
			cardData: [
				{
					title: 'CHANGE from Previous Month',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
				{
					title: 'Previous Month Lapse Rate',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
			]
		},
		{
			id: 'Dashboard_LapseRate_Fire_Panel',
			title: 'Fire',
			subTitle: '',
			cardData: [
				{
					title: 'CHANGE from Previous Month',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
				{
					title: 'Previous Month Lapse Rate',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
			]
		},
		{
			id: 'Dashboard_LapseRate_Life_Panel',
			title: 'Life',
			subTitle: '',
			cardData: [
				{
					title: 'CHANGE from Previous Month',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
				{
					title: 'Previous Month Lapse Rate',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
			]
		},
		{
			id: 'Dashboard_LapseRate_Health_Panel',
			title: 'Health',
			subTitle: '',
			cardData: [
				{
					title: 'CHANGE from Previous Month',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
				{
					title: 'Previous Month Lapse Rate',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
			]
		},
		{
			id: 'Dashboard_LapseRate_Bank_Panel',
			title: 'Bank',
			subTitle: '',
			cardData: [
				{
					title: 'CHANGE from Previous Month',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
				{
					title: 'Previous Month Lapse Rate',
					count: 0,
					color: 'text-red',
					label: '',
					fontSize: 72,
					endAdornment: '%'
				},
			]
		},
		{
			id: 'Dashboard_Personal_GoalVsActual_Chart',
			title: "Personal Product Goal Vs Actual",			
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},										
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'bottom'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								
								stacked: false,
								display: true,
								gridLines: {
									display: true
								},
								labels: [],
							}
						],
						yAxes: [
							{
								stacked: false,
								type: 'linear',
								display: true,
								position: 'left',
								gridLines: {
									display: true
								},
								labels: {
									show: true
								}
							}
						]
					}
				}
			},
			data: {},
		},
		{
			id: 'Dashboard_Team_GoalVsActual_Chart',
			title: "Team Product Goal Vs Actual",			
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar', 
							barPercentage: 0.5,
							label: 'Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},										
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'bottom'
					},
					tooltips: {
						mode: 'label'
					},
					scales: {
						xAxes: [
							{
								
								stacked: false,
								display: true,
								gridLines: {
									display: true
								},
								labels: [],
							}
						],
						yAxes: [
							{
								stacked: false,
								type: 'linear',
								display: true,
								position: 'left',
								gridLines: {
									display: true
								},
								labels: {
									show: true
								}
							}
						]
					}
				}
			},
			data: {},
		}

	],
};

mock.onGet('/api/dashboard-app/widgets').reply(() => {
	return [200, activityAppDB.widgets];
});



