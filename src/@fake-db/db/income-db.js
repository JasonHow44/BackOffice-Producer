import mock from '../mock';

const projectDashboardAppDB = {
	 
	widgets: [		
		{					
			id: 'Income_Payroll_Table',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: 'Month',
						color: '',
						align: 'center',
						rowSpan: 2
					},
					{
						id: 'auto',
						title: 'AUTO',
						colSpan: 2
					},
					{
						id: 'fire',
						title: 'FIRE',
						colSpan: 2
					},
					{
						id: 'life',
						title: 'LIFE',
						colSpan: 2
					},
					{
						id: 'health',
						title: 'HEALTH',
						colSpan: 2
					},
					{
						id: 'bank',
						title: 'BANK',
						colSpan: 2
					},
					{
						id: 'other',
						title: 'OTHER',
						colSpan: 2
					},
					{
						id: 'ind',
						title: 'IND',
						colSpan: 1
					},
					{
						id: 'team',
						title: 'TEAM',
						colSpan: 1
					},
					{
						id: 'grow',
						title: 'GROW',
						colSpan: 1
					},
					{
						id: 'lapse',
						title: 'LAPSE',
						colSpan: 1
					},
					{
						id: 'special',
						title: 'SPECIAL',
						colSpan: 1
					},
					{
						id: 'totals',
						title: 'TOTALS',
						colSpan: 2
					},
					{
						id: 'verified',
						title: 'VERIFIED',
						colSpan: 1
					}
				],
				headers: [
					{ id: 2, value: 'Auto Policies', type: true },
					{ id: 3, value: 'Auto Commissions', type: false },
					{ id: 4, value: 'Fire Policies', type: true },
					{ id: 5, value: 'Fire Commissions', type: false },
					{ id: 6, value: 'Life Policies', type: true },
					{ id: 7, value: 'Life Commissions', type: false },
					{ id: 8, value: 'Health Policies', type: true },
					{ id: 9, value: 'Health Commissions', type: false },
					{ id: 10, value: 'Bank Products', type: true },
					{ id: 11, value: 'Bank Commissions', type: false },
					{ id: 12, value: 'Other Activities', type: true },
					{ id: 13, value: 'Other Activity Bonuses', type: false },
					{ id: 14, value: 'Individual Target Commissions', type: false },
					{ id: 15, value: 'Team Target Commissions', type: false },
					{ id: 16, value: 'Policy Growth Commissions', type: false },
					{ id: 17, value: 'Lapse Rate % Commission', type: false },
					{ id: 18, value: 'Special Promotion', type: false },
					{ id: 19, value: 'Total Policies', type: true },
					{ id: 20, value: 'Total Compensation', type: false },
					{ id: 21, value: 'Bonus Verified?', type: true }
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
			id: 'Income_Payroll_Individual_Fire_Table',
			title: "Fire",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: '% of Auto & Fire Premium',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},	
		{
			id: 'Income_Payroll_Individual_Life_Table',
			title: "LIFE",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: '% of Auto & Fire Premium',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Individual_Auto_Table',
			title: "AUTO",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: '% of Auto & Fire Premium',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Individual_Health_Table',
			title: "HEALTH",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: '% of Auto & Fire Premium',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Individual_Bank_Table',
			title: "BANK",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: '% of Auto & Fire Premium',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Team_Fire_Table',
			title: "Fire",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					// {
					//     id: 4,
					//     cells: [
					//         {
					//             id: 'left_title',
					//             value: '% of Auto & Fire Premium',
					//             classes: 'bg-pink text-white',
					//             icon: ''
					//         },
					//         {
					//             id: 'January',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'February',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'March',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'April',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'May',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'June',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'July',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'August',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'September',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'October',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'November',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'December',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//     ]
					// },
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},	
		{
			id: 'Income_Payroll_Team_Life_Table',
			title: "LIFE",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					// {
					//     id: 4,
					//     cells: [
					//         {
					//             id: 'left_title',
					//             value: '% of Auto & Fire Premium',
					//             classes: 'bg-pink text-white',
					//             icon: ''
					//         },
					//         {
					//             id: 'January',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'February',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'March',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'April',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'May',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'June',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'July',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'August',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'September',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'October',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'November',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'December',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//     ]
					// },
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Team_Auto_Table',
			title: "AUTO",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					// {
					//     id: 4,
					//     cells: [
					//         {
					//             id: 'left_title',
					//             value: '% of Auto & Fire Premium',
					//             classes: 'bg-pink text-white',
					//             icon: ''
					//         },
					//         {
					//             id: 'January',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'February',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'March',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'April',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'May',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'June',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'July',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'August',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'September',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'October',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'November',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'December',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//     ]
					// },
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Team_Health_Table',
			title: "HEALTH",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					// {
					//     id: 4,
					//     cells: [
					//         {
					//             id: 'left_title',
					//             value: '% of Auto & Fire Premium',
					//             classes: 'bg-pink text-white',
					//             icon: ''
					//         },
					//         {
					//             id: 'January',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'February',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'March',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'April',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'May',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'June',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'July',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'August',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'September',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'October',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'November',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'December',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//     ]
					// },
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_Payroll_Team_Bank_Table',
			title: "BANK",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'January',
						title: 'January'
					},
					{
						id: 'February',
						title: 'February'
					},
					{
						id: 'March',
						title: 'March'
					},
					{
						id: 'April',
						title: 'April'
					},
					{
						id: 'May',
						title: 'May'
					},
					{
						id: 'June',
						title: 'June'
					},
					{
						id: 'July',
						title: 'July'
					},
					{
						id: 'August',
						title: 'August'
					},
					{
						id: 'September',
						title: 'September'
					},
					{
						id: 'October',
						title: 'October'
					},
					{
						id: 'November',
						title: 'November'
					},
					{
						id: 'December',
						title: 'December'
					},
					// {
					// 	id: 'Total',
					// 	title: 'Total'
					// }
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
							// {
							// 	id: 'total',
							// 	value: '',
							// 	classes: '',
							// 	icon: ''
							// }
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					},
					// {
					//     id: 4,
					//     cells: [
					//         {
					//             id: 'left_title',
					//             value: '% of Auto & Fire Premium',
					//             classes: 'bg-pink text-white',
					//             icon: ''
					//         },
					//         {
					//             id: 'January',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'February',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'March',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'April',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'May',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'June',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'July',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'August',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'September',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'October',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'November',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//         {
					//             id: 'December',
					//             value: '',
					//             classes: '',
					//             icon: ''
					//         },
					//     ]
					// },
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'January',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'February',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'March',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'April',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'May',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'June',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'July',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'August',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'September',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'October',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'November',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'December',
								value: '',
								classes: '',
								icon: ''
							},
						]
					}
				]
			}
		},
		{
			id: 'Income_PossibleMoney_Current_Level_Table',
			title: "This is what you're making at your Current Level of Production",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'auto',
						title: 'AUTO'
					},
					{
						id: 'fire',
						title: 'FIRE'
					},
					{
						id: 'life',
						title: 'LIFE'
					},
					{
						id: 'health',
						title: 'HEALTH'
					},
					{
						id: 'bank',
						title: 'BANK'
					},
					{
						id: 'total',
						title: 'TOTAL'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'total',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Annual Premium',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Avg Premium',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'Income_PossibleMoney_Next_Level_Table',
			title: "If you are reached the Next Target, this is what you could at the Next Level of Production",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'auto',
						title: 'AUTO'
					},
					{
						id: 'fire',
						title: 'FIRE'
					},
					{
						id: 'life',
						title: 'LIFE'
					},
					{
						id: 'health',
						title: 'HEALTH'
					},
					{
						id: 'bank',
						title: 'BANK'
					},
					{
						id: 'total',
						title: 'TOTAL'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'total',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Annual Premium',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Avg Premium',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'Income_PossibleMoney_Max_Level_Table',
			title: "This is what you could at the Max Level of Production",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'auto',
						title: 'AUTO'
					},
					{
						id: 'fire',
						title: 'FIRE'
					},
					{
						id: 'life',
						title: 'LIFE'
					},
					{
						id: 'health',
						title: 'HEALTH'
					},
					{
						id: 'bank',
						title: 'BANK'
					},
					{
						id: 'total',
						title: 'TOTAL'
					}
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'total',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Annual Premium',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Avg Premium',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Level Reached',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'Income_PossibleMoney_BonusPlan_Table',
			title: "",
			table: {
				columns: [
					{
						id: 'id',
						title: ''
					},
					{
						id: 'auto',
						title: 'Auto Policies'
					},
					{
						id: 'fire',
						title: 'Fire Policies'
					},
					{
						id: 'life',
						title: 'Life Policies'
					},
					{
						id: 'health',
						title: 'Health Policies'
					},
					{
						id: 'bank',
						title: 'Bank Products'
					},					
				],
				rows: [
					{
						id: 1,
						cells: [
							{
								id: 'left_title',
								value: 'Level1',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							},							
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'left_title',
								value: 'Level2',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'left_title',
								value: 'Level3',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'left_title',
								value: 'Level4',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'left_title',
								value: 'Level5',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'auto',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'fire',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'life',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'health',
								value: '',
								classes: '',
								icon: ''
							},
							{
								id: 'bank',
								value: '',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'Income_PossibleMoney_Chart',
			title: "POLICY PRODUCTION BY PERSON",
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
							label: 'Auto',
							data: [],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Fire',
							data: [],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Life',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Health',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},	
						{
							type: 'bar',
							label: 'Bank',
							barPercentage: 0.5,
							data: [],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},													
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: true,
						position: 'right'
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
								labels: ['Current Bonus', 'Next Level', 'Max Level']
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
	],	
};

mock.onGet('/api/income-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

