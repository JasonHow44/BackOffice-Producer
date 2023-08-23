import mock from '../mock';
import { db, realDb } from './firebase';

const productioAppDB = {
	widgets: [
		{
			id: 'Production_Multiline_Individual_Chart',
			title: "Individual Sales Goals vs Actual Production",		
			mainChart: {
				TW: {					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Sales Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual Sales',
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
								labels: ['Auto', 'Fire', 'Life', 'Health', 'Bank']
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
			
		},
		{
			id: 'Production_Multiline_Team_Chart',
			title: "Team Sales Goals vs Actual Production",
			ranges: {
				TW: 'As A Team',
				IN: 'Individually',
				IC: 'Include Initial Bonus',
				DI: "Don't Include Initial Bonus"
			},
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Sales Goal',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual Sales',
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
								labels: ['Auto', 'Fire', 'Life', 'Health', 'Bank']
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
			
		},
		{
			id: 'Production_SalesResults_Written_Chart',
			title: "WRITTEN SALES ACTIVITY BY MONTH",
			ranges: {
				TW: 'As A Team',
				IN: 'Individually',
				IC: 'Include Initial Bonus',
				DI: "Don't Include Initial Bonus"
			},
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Auto Policies',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Fire Policies',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Life Policies',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Health Policies',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Bank Products',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#92dafc',
							hoverBackgroundColor: '#d1eefc',
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
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
							}
						],
						yAxes: [
							{
								stacked: true,
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
		},
		{
			id: 'Production_SalesResults_Issued_Chart',
			title: "ISSUED SALES ACTIVITY BY MONTH",
			ranges: {
				TW: 'As A Team',
				IN: 'Individually',
				IC: 'Include Initial Bonus',
				DI: "Don't Include Initial Bonus"
			},
			mainChart: {
				TW: {
					
					labels: [],
					datasets: [
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Auto Policies',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Fire Policies',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Life Policies',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Health Policies',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Bank Products',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#92dafc',
							hoverBackgroundColor: '#d1eefc',
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
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
							}
						],
						yAxes: [
							{
								stacked: true,
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
		},
		{
			id: 'Production_Multiline_Product_PieChart',
			title: 'Producer Bonus Income by Product Type',
			mainChart: {
				labels: ['Auto', 'Fire', 'Life', 'Health', 'Bank'],
				datasets: [
					{
						data: [],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: false,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		{
			id: 'Production_Multiline_Bonus_PieChart',
			title: 'Producer Bonus Income by Bonus Type',
			mainChart: {				
				labels: [
					'Initial Item Bonuses', 
					'Individual Target Bonuses', 
					'Team Target Bonuses', 
					'Policy Growth Bonuses', 
					'Lapse Rate Bonuses', 
					'Special Promotion'],
				datasets: [
					{
						data: [],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: false,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			}
		},
		{
			id: 'Production_SalesResults_Written_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'WRITTEN',
						color: '',
						align: 'center',
						rowSpan: 2
					},										
				],
				headers: [
					{ id: "Auto Policies", value: "Auto Policies", color: "" },
					{ id: "Auto Premium", value: "Auto Premium", color: "", startAdornment: "$" },
					{ id: "Fire Policies", value: "Fire Policies", color: "" },
					{ id: "Fire Premium", value: "Fire Premium", color: "", startAdornment: "$" },
					{ id: "Life Policies", value: "Life Policies", color: "" },
					{ id: "Life Premium", value: "Life Premium", color: "", startAdornment: "$" },
					{ id: "Health Policies", value: "Health Policies", color: "" },
					{ id: "Health Premium", value: "Health Premium", color: "", startAdornment: "$" },
					{ id: "Bank Products", value: "Bank Products", color: "" },
					{ id: "Bank Dollars", value: "Bank Dollars", color: "", startAdornment: "$" },
					{ id: "Total Policies", value: "Total Policies", color: "" },
					{ id: "Total Premium", value: "Total Premium", color: "", startAdornment: "$" },
				],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January": {},
					"February": {},
					"March": {},
					"April": {},
					"May": {},
					"June": {},
					"July": {},
					"August": {},
					"September": {},
					"October": {},
					"November": {},
					"December": {},
					"Quarter 1 Totals": {},
					"Quarter 2 Totals": {},
					"Quarter 3 Totals": {},
					"Quarter 4 Totals": {},
					"Annual Totals": {},
					"Projected for Year": {}					
				},
			}
		},
		{
			id: 'Production_SalesResults_Issued_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'ISSUED',
						color: '',
						align: 'center',
						rowSpan: 2
					},										
				],
				headers: [
					{ id: "Auto Policies", value: "Auto Policies", color: "" },
					{ id: "Auto Premium", value: "Auto Premium", color: "", startAdornment: "$" },
					{ id: "Fire Policies", value: "Fire Policies", color: "" },
					{ id: "Fire Premium", value: "Fire Premium", color: "", startAdornment: "$" },
					{ id: "Life Policies", value: "Life Policies", color: "" },
					{ id: "Life Premium", value: "Life Premium", color: "", startAdornment: "$" },
					{ id: "Health Policies", value: "Health Policies", color: "" },
					{ id: "Health Premium", value: "Health Premium", color: "", startAdornment: "$" },
					{ id: "Bank Products", value: "Bank Products", color: "" },
					{ id: "Bank Dollars", value: "Bank Dollars", color: "", startAdornment: "$" },
					{ id: "Total Policies", value: "Total Policies", color: "" },
					{ id: "Total Premium", value: "Total Premium", color: "", startAdornment: "$" },
				],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January": {},
					"February": {},
					"March": {},
					"April": {},
					"May": {},
					"June": {},
					"July": {},
					"August": {},
					"September": {},
					"October": {},
					"November": {},
					"December": {},
					"Quarter 1 Totals": {},
					"Quarter 2 Totals": {},
					"Quarter 3 Totals": {},
					"Quarter 4 Totals": {},
					"Annual Totals": {},
					"Projected for Year": {}					
				},
			}
		},
		{
			id: 'Production_ProductLine_Table_1',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 3
					},
					{
						id: 'policySalesByPolicyType',
						title: 'Policy Sales by Policy Type',
						color: '',
						colSpan: 100
					},													
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Production_ProductLine_Table_2',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: '',
						colSpan: 3
					},				
					{
						id: 'policySalesBySourcesBusiness',
						title: 'Policy Sales by Sources of Business',
						color: '',
						colSpan: 100
					},					
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Production_ProductLine_Table_3',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},					
					{
						id: 'PremiumSalesByPolicyType',
						title: 'Premium Sales by Policy Type(In Thousands)',
						color: '',
						colSpan: 100
					},									
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},
		{
			id: 'Production_ProductLine_Table_4',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						colSpan: 1,
						rowSpan: 2
					},					
					{
						id: 'policySalesBySourcesBusiness',
						title: 'Premium Sales by Sources of Business(In Thousands)',
						color: '',
						colSpan: 100
					},					
				],
				headers: [],
				rows: [
					{ id: "January", value: "January", color: "" },
					{ id: "February", value: "February", color: "" },
					{ id: "March", value: "March", color: "" },
					{ id: "April", value: "April", color: "" },
					{ id: "May", value: "May", color: "" },
					{ id: "June", value: "June", color: "" },
					{ id: "July", value: "July", color: "" },
					{ id: "August", value: "August", color: "" },
					{ id: "September", value: "September", color: "" },
					{ id: "October", value: "October", color: "" },
					{ id: "November", value: "November", color: "" },
					{ id: "December", value: "December", color: "" },
					{ id: "Quarter 1 Totals", value: "Quarter 1 Totals", border: "border-t-4" },
					{ id: "Quarter 2 Totals", value: "Quarter 2 Totals" },
					{ id: "Quarter 3 Totals", value: "Quarter 3 Totals" },
					{ id: "Quarter 4 Totals", value: "Quarter 4 Totals" },
					{ id: "Annual Totals", value: "Annual Totals", border: "border-t-4" },
					{ id: "Projected for Year", value: "Projected for Year", border: "border-t-4" },
				],
				tableContent : {
					"January":{},
					"February":{},
					"March":{},
					"April":{},
					"May":{},
					"June":{},
					"July":{},
					"August":{},
					"September":{},
					"October":{},
					"November":{},
					"December":{},
					"Quarter 1 Totals":{},
					"Quarter 2 Totals":{},
					"Quarter 3 Totals":{},
					"Quarter 4 Totals":{},
					"Annual Totals":{},
					"Projected for Year":{}					
				},
			}
		},	
		{
			id: 'Production_Multiline_Individual_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'individualGoalsAndProduction',
						title: 'Individual Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				headers: [
					{id:'Sales Goal', value:'Sales Goal', type:false, color:''},
					{id:'Actual Sales', value:'Actual Sales', type:false, color:''},
					{id:'Total Premium / Dollars', value:'Total Premium / Dollars', type:true, color:'', startAdornment: '$'},
					{id:'Average Premium / Dollars', value:'Average Premium / Dollars', type:false, color:'', startAdornment: '$'},
				],
				rows: [
					{ id: "Auto", value: "Auto", color: "" },
					{ id: "Fire", value: "Fire", color: "" },
					{ id: "Life", value: "Life", color: "" },
					{ id: "Health", value: "Health", color: "" },
					{ id: "Bank", value: "Bank", color: "" },
					{ id: "Total", value: "Total", color: "" },
				],
				tableContent : {
					Auto:{},
					Fire:{},
					Life:{},
					Health:{},
					Bank:{},
					Total:{},											
				},
			}
		},
		{
			id: 'Production_Multiline_Agency_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'AgencyGoalsAndProduction',
						title: 'Agency Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				headers: [
					{id:'Sales Goal', value:'Sales Goal', type:false, color:''},
					{id:'Actual Sales', value:'Actual Sales', type:false, color:''},
					{id:'Total Premium / Dollars', value:'Total Premium / Dollars', type:true, color:'', startAdornment: '$'},
					{id:'Average Premium / Dollars', value:'Average Premium / Dollars', type:false, color:'', startAdornment: '$'},
				],
				rows: [
					{ id: "Auto", value: "Auto", color: "" },
					{ id: "Fire", value: "Fire", color: "" },
					{ id: "Life", value: "Life", color: "" },
					{ id: "Health", value: "Health", color: "" },
					{ id: "Bank", value: "Bank", color: "" },
					{ id: "Total", value: "Total", color: "" },
				],
				tableContent : {
					Auto: {},
					Fire: {},
					Life: {},
					Health: {},
					Bank: {},
					Total: {},											
				},
			}
		},		
		{
			id: 'Production_Multiline_Soueces_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: '*',
						title: 'Where your Individual Production Came From - Sources of Business',
						color: '',
						colSpan: 100,
					},
				],
				headers: [],
				rows: [
					{ id: "Auto", value: "Auto", color: "" },
					{ id: "Fire", value: "Fire", color: "" },
					{ id: "Life", value: "Life", color: "" },
					{ id: "Health", value: "Health", color: "" },
					{ id: "Bank", value: "Bank", color: "" },
					{ id: "Total", value: "Total", color: "" },
				],
				tableContent : {
					Auto: {},
					Fire: {},
					Life: {},
					Health: {},
					Bank: {},
					Total: {},											
				},
			}
		},			
		{
			id: 'Production_ProductLine_Other_Table',
			title: '',
			table: {
				columns: [],
				rows: [],
				tableContent : {
					January:{},
					February:{},
					March:{},
					April:{},
					May:{},
					June:{},
					July:{},
					August:{},
					September:{},
					October:{},
					November:{},
					December:{},
					Quarter_1_Totals:{},
					Quarter_2_Totals:{},
					Quarter_3_Totals:{},
					Quarter_4_Totals:{},
					AnnualTotals:{},
					ProjectedForYear:{}					
				},
			}
		},
		{
			id: 'Production_Multiline_Bonuses_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'GOALS',
						color: '',
						align: 'center',
						rowSpan: 2,
					},
					{
						id: 'bonusesEarnedThisPeriod',
						title: 'BONUSES EARNED THIS PERIOD',
						color: '',
						colSpan: 7,
					},
				],
				headers: [
					{ id: "Initial Item Bonuses", value: "Initial Item Bonuses", color: "" },
					{ id: "Individual Target Bonuses", value: "Individual Target Bonuses", color: "" },
					{ id: "Team Target Bonuses", value: "Team Target Bonuses", color: "" },
					{ id: "Policy Growth Bonuses", value: "Policy Growth Bonuses", color: "" },
					{ id: "Lapse Rate Bonuses", value: "Lapse Rate Bonuses", color: "" },
					{ id: "Special Promotion", value: "Special Promotion", color: "" },
					{ id: "Total Bonus", value: "Total Bonus", color: "" },
				],
				rows: [
					{ id: "Auto", value: "Auto", color: "" },
					{ id: "Fire", value: "Fire", color: "" },
					{ id: "Life", value: "Life", color: "" },
					{ id: "Health", value: "Health", color: "" },
					{ id: "Bank", value: "Bank", color: "" },
					{ id: "Total", value: "Total", color: "" },
				],
				tableContent : {
					Auto: {},
					Fire: {},
					Life: {},
					Health: {},
					Bank: {},
					Total: {},											
				},
			}
		},	
	],
	projects: [
		{
			id: 1,
			name: 'ACME Corp. Backend App'
		},
		{
			id: 2,
			name: 'ACME Corp. Frontend App'
		},
		{
			id: 3,
			name: 'Creapond'
		},
		{
			id: 4,
			name: 'Withinpixels'
		}
	],
	users: [],
};

mock.onGet('/api/production-app/widgets').reply(config => {
	return [200, productioAppDB.widgets];
});

mock.onGet('/api/production-app/projects').reply(config => {
	return [200, productioAppDB.projects];
});

mock.onGet('/api/production-app/users').reply(() => new Promise((resolve, reject) => { 
	var starCountRef = realDb.ref(`users/`);
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();
		
		if(data) {
			Object.keys(data).map(item => {
				productioAppDB.users.push(data[item])
			});
		}

		resolve(productioAppDB.users);
	})
}));