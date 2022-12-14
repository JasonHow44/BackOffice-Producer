import mock from '../mock';

const projectDashboardAppDB = {
	 
	widgets: [
		{
			id: 'widget1',
			ranges: {
				DY: 'Yesterday',
				DT: 'Today',
				DTM: 'Tomorrow'
			},
			currentRange: 'DT',
			data: {
				label: 'DUE TASKS',
				count: {
					DY: 21,
					DT: 25,
					DTM: 19
				},
				extra: {
					label: 'Completed',
					count: {
						DY: 6,
						DT: 7,
						DTM: '-'
					}
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget2',
			title: 'Overdue',
			data: {
				label: 'TASKS',
				count: 4,
				extra: {
					label: "Yesterday's overdue",
					count: 2
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget3',
			title: 'Issues',
			data: {
				label: 'OPEN',
				count: 32,
				extra: {
					label: 'Closed today',
					count: 0
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget4',
			title: 'Features',
			data: {
				label: 'PROPOSALS',
				count: 42,
				extra: {
					label: 'Implemented',
					count: 8
				}
			},
			detail: 'You can show some detailed information about this widget in here.'
		},
		{
			id: 'widget15',
			title: "INDIVIDUAL Sales Goals vs Actual Production",
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
							data: [ 20, 25, 22, 12],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual Sales',
							data: [11, 8, 10, 50],
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
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['Fire', 'Life', 'Health', 'Bank']
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
			id: 'widget16',
			title: "TEAM Sales Goals vs Actual Production",
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
							data: [ 20, 25, 22, 12],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Actual Sales',
							data: [11, 8, 10, 50],
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
								stacked: true,
								display: true,
								gridLines: {
									display: true
								},
								labels: ['Fire', 'Life', 'Health', 'Bank']
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
			id: 'widget5',
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
							data: [ 20, 25, 22, 12, 12, 50, 45, 7, 8, 10, 56, 22],
							backgroundColor: '#42BFF7',
							hoverBackgroundColor: '#87CDF7',
							categoryPercentage: 1,
						},
						{
							type: 'bar',
							barPercentage: 0.5,
							label: 'Fire Policies',
							data: [11, 8, 10, 50, 45, 7, 8, 10, 17, 45, 56, 22],
							backgroundColor: '#C6ECFD',
							hoverBackgroundColor: '#D7EFFD',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Life Policies',
							barPercentage: 0.5,
							data: [45, 7, 8, 10, 17, 45, 76, 23, 77, 31, 56, 22],
							backgroundColor: '#f9cfcf',
							hoverBackgroundColor: '#ffcece',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Health Policies',
							barPercentage: 0.5,
							data: [67, 34, 34, 20, 25, 34, 20, 25, 56, 22, 56, 22],
							backgroundColor: '#77ff99',
							hoverBackgroundColor: '#c9ffd6',
							categoryPercentage: 1
						},
						{
							type: 'bar',
							label: 'Bank Products',
							barPercentage: 0.5,
							data: [78, 33, 34, 20, 25, 56, 22, 45, 76, 23, 77, 31],
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
			supporting: {
				created: {
					label: 'CREATED',
					count: {
						'2W': 48,
						LW: 46,
						TW: 54
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 8, 5, 6, 7, 8, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				closed: {
					label: 'CLOSED',
					count: {
						'2W': 27,
						LW: 31,
						TW: 26
					},
					chart: {
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				reOpened: {
					label: 'RE-OPENED',
					count: {
						'2W': 4,
						LW: 5,
						TW: 2
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [3, 2, 1, 4, 8, 8, 4],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW2: [
							{
								name: 'RE-OPENED',
								series: [
									{
										name: 'Mon',
										value: 3
									},
									{
										name: 'Tue',
										value: 2
									},
									{
										name: 'Wed',
										value: 1
									},
									{
										name: 'Thu',
										value: 4
									},
									{
										name: 'Fri',
										value: 8
									},
									{
										name: 'Sat',
										value: 8
									},
									{
										name: 'Sun',
										value: 4
									}
								]
							}
						],
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				wontFix: {
					label: "WON'T FIX",
					count: {
						'2W': 6,
						LW: 3,
						TW: 4
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				needsTest: {
					label: 'NEEDS TEST',
					count: {
						'2W': 10,
						LW: 7,
						TW: 8
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 3, 7, 5, 5, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				},
				fixed: {
					label: 'FIXED',
					count: {
						'2W': 21,
						LW: 17,
						TW: 14
					},
					chart: {
						'2W': {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 8, 8, 6, 4, 1],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						LW: {
							datasets: [
								{
									label: 'Created',
									data: [6, 5, 4, 5, 7, 4, 7],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						TW: {
							datasets: [
								{
									label: 'Created',
									data: [5, 7, 4, 6, 5, 3, 2],
									fill: true,
									backgroundColor: '#42BFF7',
									pointRadius: 0,
									pointHitRadius: 20,
									borderWidth: 0
								}
							],
							labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
						},
						options: {
							legend: {
								display: false
							},
							maintainAspectRatio: false,
							scales: {
								xAxes: [
									{
										display: false
									}
								],
								yAxes: [
									{
										display: false
									}
								]
							}
						}
					}
				}
			}
		},
		{
			id: 'widget6',
			title: 'Task Distribution',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			mainChart: {
				labels: ['Frontend', 'Backend', 'API', 'Issues'],
				datasets: {
					TW: [
						{
							data: [15, 20, 38, 27],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					LW: [
						{
							data: [19, 16, 42, 23],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					],
					'2W': [
						{
							data: [18, 17, 40, 25],
							backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63'],
							hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F']
						}
					]
				},
				options: {
					cutoutPercentage: 66,
					spanGaps: false,
					legend: {
						display: true,
						position: 'bottom',
						labels: {
							padding: 16,
							usePointStyle: true
						}
					},
					maintainAspectRatio: false
				}
			},
			footerLeft: {
				title: 'Tasks Added',
				count: {
					'2W': 487,
					LW: 526,
					TW: 594
				}
			},
			footerRight: {
				title: 'Tasks Completed',
				count: {
					'2W': 193,
					LW: 260,
					TW: 287
				}
			}
		},
		{
			id: 'widget7',
			title: 'Schedule',
			currentRange: 'T',
			ranges: {
				T: 'Today',
				TM: 'Tomorrow'
			},
			schedule: {
				T: [
					{
						id: 1,
						title: 'Group Meeting',
						time: 'In 32 minutes'
					},
					{
						id: 2,
						title: 'Coffee Break',
						time: '10:30 AM'
					},
					{
						id: 3,
						title: 'Public Beta Release',
						time: '11:00 AM'
					},
					{
						id: 4,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 5,
						title: 'Dinner with David',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: "Jane's Birthday Party",
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "Overseer's Retirement Party",
						time: '21:30 PM'
					}
				],
				TM: [
					{
						id: 1,
						title: 'Marketing Meeting',
						time: '09:00 AM'
					},
					{
						id: 2,
						title: 'Public Announcement',
						time: '11:00 AM'
					},
					{
						id: 3,
						title: 'Lunch',
						time: '12:10 PM'
					},
					{
						id: 4,
						title: 'Meeting with Beta Testers',
						time: '15:00 AM'
					},
					{
						id: 5,
						title: 'Live Stream',
						time: '17:30 PM'
					},
					{
						id: 6,
						title: 'Release Party',
						time: '19:30 PM'
					},
					{
						id: 7,
						title: "CEO's Party",
						time: '22:30 PM'
					}
				]
			}
		},
		{
			id: 'widget8',
			title: 'Budget Distribution',
			mainChart: {
				labels: ['Wireframing', 'Design', 'Coding', 'Marketing', 'Extra'],
				datasets: [
					{
						data: [12, 17, 28, 25, 15],
						backgroundColor: ['#F44336', '#9C27B0', '#03A9F4', '#E91E63', '#FFC107'],
						hoverBackgroundColor: ['#F45A4D', '#A041B0', '#25B6F4', '#E9487F', '#FFD341']
					}
				],
				options: {
					cutoutPercentage: 0,
					spanGaps: false,
					legend: {
						display: true,
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
			id: 'widget9',
			title: 'Spent',
			ranges: {
				TW: 'This Week',
				LW: 'Last Week',
				'2W': '2 Weeks Ago'
			},
			currentRange: 'TW',
			weeklySpent: {
				title: 'WEEKLY SPENT',
				count: {
					'2W': '2,682.85',
					LW: '1,445.34',
					TW: '3,630.15'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [4, 6, 2, 2, 1, 3, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 6, 5, 4, 5, 3, 6],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalSpent: {
				title: 'TOTAL SPENT',
				count: {
					'2W': '29,682.85',
					LW: '31,128.19',
					TW: '34,758.34'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 2, 4, 7, 7, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [5, 7, 8, 8, 6, 4, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [6, 4, 7, 5, 5, 4, 7],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			remaining: {
				title: 'REMAINING',
				count: {
					'2W': '94.317,15',
					LW: '92.871,81',
					TW: '89.241,66'
				},
				chart: {
					'2W': {
						datasets: [
							{
								label: 'Created',
								data: [1, 4, 5, 7, 8, 2, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					LW: {
						datasets: [
							{
								label: 'Created',
								data: [3, 2, 1, 4, 8, 8, 4],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					TW: {
						datasets: [
							{
								label: 'Created',
								data: [2, 4, 8, 6, 2, 5, 1],
								fill: true,
								backgroundColor: '#42BFF7',
								pointRadius: 0,
								pointHitRadius: 20,
								borderWidth: 0
							}
						],
						labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					options: {
						legend: {
							display: false
						},
						maintainAspectRatio: false,
						scales: {
							xAxes: [
								{
									display: false
								}
							],
							yAxes: [
								{
									display: false
								}
							]
						}
					}
				}
			},
			totalBudget: {
				title: 'TOTAL BUDGET',
				count: '124.000,00'
			}
		},
		{
			id: 'widget10',
			title: "This is what you're making at your Current Level of Production",
			table: {
				columns: [
					{
						id: 'budget_type',
						title: ''
					},
					{
						id: 'total_budget',
						title: 'AUTO'
					},
					{
						id: 'spent_usd',
						title: 'FIRE'
					},
					{
						id: 'spent_perc',
						title: 'LIFE'
					},
					{
						id: 'remaining_usd',
						title: 'HEALTH'
					},
					{
						id: 'remaining_perc',
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
								id: 'budget_type',
								value: 'Policies',
								classes: 'bg-blue text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$14,880.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$14,000.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '$94.08',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_usd',
								value: '$880.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '$5.92',
								classes: '',
								icon: ''
							},
							{
								id: 'total',
								value: '$100.00',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 2,
						cells: [
							{
								id: 'budget_type',
								value: 'Anual Preminum',
								classes: 'bg-green text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$21,080.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$17,240.34',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '$81.78',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_usd',
								value: '$3,839.66',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '$8.22',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 3,
						cells: [
							{
								id: 'budget_type',
								value: 'Avg Premium',
								classes: 'bg-red text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$3,518.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '$81.78',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_usd',
								value: '$31,202.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '$89.87',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 4,
						cells: [
							{
								id: 'budget_type',
								value: 'Level Reached',
								classes: 'bg-pink text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$34,720.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '$81.78',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '$100.00',
								classes: '',
								icon: ''
							}
						]
					},
					{
						id: 5,
						cells: [
							{
								id: 'budget_type',
								value: 'Target Bonus Earned',
								classes: 'bg-orange text-white',
								icon: ''
							},
							{
								id: 'total_budget',
								value: '$18,600.00',
								classes: 'font-bold',
								icon: ''
							},
							{
								id: 'spent_usd',
								value: '$0.00',
								classes: '',
								icon: ''
							},
							{
								id: 'spent_perc',
								value: '$81.78',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_usd',
								value: '$34,720.00',
								classes: '',
								icon: ''
							},
							{
								id: 'remaining_perc',
								value: '$100.00',
								classes: '',
								icon: ''
							}
						]
					}
				]
			}
		},
		{
			id: 'widget11',
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
						id: 'xxx',
						title: '',
						colSpan: 1
					},
					{
						id: 'totals',
						title: 'TOTALS',
						colSpan: 2
					},
					{
						id: 'ext',
						title: '',
						colSpan: 1
					}
				],
				headers: [
					{ id: 2, value: 'Auto Policies', type: true },
					{ id: 3, value: 'Auto Bonuses', type: false },
					{ id: 4, value: 'Fire Policies', type: true },
					{ id: 5, value: 'Fire Bonuses', type: false },
					{ id: 6, value: 'Life Policies', type: true },
					{ id: 7, value: 'Life Bonuses', type: false },
					{ id: 8, value: 'Health Policies', type: true },
					{ id: 9, value: 'Health Bonuses', type: false },
					{ id: 10, value: 'Bank Products', type: true },
					{ id: 11, value: 'Bank Bonuses', type: false },
					{ id: 12, value: 'Other Activities', type: true },
					{ id: 13, value: 'Other Activity Bonuses', type: false },
					{ id: 14, value: 'Individual Target Bonuses', type: false },
					{ id: 15, value: 'Team Target Bonuses', type: false },
					{ id: 16, value: 'Policy Growth Bonuses', type: false },
					{ id: 17, value: 'Lapse Rate % Bonus', type: false },
					{ id: 18, value: 'Special Promotion', type: false },
					{ id: 19, value: 'Total Policies', type: true },
					{ id: 20, value: 'Total Bonuses', type: false },
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
			id: 'widget12',
			title: '',
			table: {
				columns: [],
				rows: [],
				tableContent : {
					January:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					February:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					March:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					April:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					May:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					June:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					July:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					August:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					September:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					October:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					November:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					December:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					Quarter_1_Totals:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					Quarter_2_Totals:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					Quarter_3_Totals:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					Quarter_4_Totals:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					AnnualTotals:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					},
					ProjectedForYear:{
						autoPolicies:'-',
						autoPremium:'-',
						firePolicies:'-',
						firePremium:'-',
						lifePolicies:'-',
						lifePremium:'-',
						healthPolicies:'-',
						healthPremium:'-',
						bankProducts:'-',
						bankDollars:'-',					
						totalProducts:'-',
						totalPremium:'-',
					}					
				},
			}
		},
		{
			id: 'widget13',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						colSpan: 1
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: 'bg-green-300',
						colSpan: 3
					},
					{
						id: 'policySalesByPolicyType',
						title: 'POLICY SALES by Policy Type',
						color: 'bg-yellow-500',
						colSpan: 13
					},
					// {
					// 	id: 'policySalesBySourcesBusiness',
					// 	title: 'POLICY SALES by Sources of Business',
					// 	color: 'bg-indigo-200',
					// 	colSpan: 20
					// },					
				],
				rows: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					},
					ProjectedForYear:{
						// autoPolicies:'-',
						// autoPremium:'-',
						// firePolicies:'-',
						// firePremium:'-',
						// lifePolicies:'-',
						// lifePremium:'-',
						// healthPolicies:'-',
						// healthPremium:'-',
						// bankProducts:'-',
						// bankDollars:'-',					
						// totalProducts:'-',
						// totalPremium:'-',
						averagePremium:'-',
						numberOfPolicies:'-',
						policiPremium:'-',
						personallyProduced:'-',
						rawNew:'-',
						addOn:'-',
						transferIn:'-',
						label1:'-',
						label2:'-',
						label3:'-',
						label4:'-',					
						label5:'-',
						label6:'-',
						label7:'-',
						label8:'-',
						Bonus:'-',
					}					
				},
			}
		},
		{
			id: 'productionLineWidget2',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						colSpan: 1
					},
					{
						id: 'policiesAndPremium',
						title: 'Policies & Premium',
						color: 'bg-green-300',
						colSpan: 3
					},
					// {
					// 	id: 'policySalesByPolicyType',
					// 	title: 'POLICY SALES by Policy Type',
					// 	color: 'bg-yellow-500',
					// 	colSpan: 13
					// },
					{
						id: 'policySalesBySourcesBusiness',
						title: 'POLICY SALES by Sources of Business',
						color: 'bg-indigo-200',
						colSpan: 23
					},					
				],
				rows: [],
				tableContent : {
					January:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					February:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					March:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					April:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					May:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					June:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					July:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					August:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					September:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					October:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					November:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					December:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_1_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_2_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_3_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Quarter_4_Totals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					AnnualTotals:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					ProjectedForYear:{
						averagePremium:'-',
						numberOfPolicies:'-',
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						networkingMeeting:'-',
						callIn:'-',
						outboundCalling:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					}					
				},
			}
		},
		{
			id: 'Production_Multiline_Widget1',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						rowSpan: 1,
					},
					{
						id: 'individualGoalsAndProduction',
						title: 'Individual Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				rows: [],
				tableContent : {
					Auto:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Fire:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Life:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Health:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Bank:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Totals:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},											
				},
			}
		},
		{
			id: 'Production_Multiline_Widget3',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						rowSpan: 1,
					},
					{
						id: 'AgencyGoalsAndProduction',
						title: 'Agency Goals and Production',
						color: '',
						colSpan: 4,
					},
				],
				rows: [],
				tableContent : {
					Auto:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Fire:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Life:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Health:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Bank:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},
					Totals:{
						salesGoal:'-',
						actualSales:'-',
						totalPremium:'-',
						averagePrenium:'-',	
					},											
				},
			}
		},		
		{
			id: 'Production_Multiline_Widget5',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						rowSpan: 1,
					},
					{
						id: '*',
						title: 'Where your Individual Production Came From - Sources of Business',
						color: '',
						colSpan: 20,
					},
				],
				rows: [],
				tableContent : {
					Auto:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Fire:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Life:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Health:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Bank:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},
					Totals:{
						centerOfInfluences:'-',
						clientRequest:'-',
						directMailLetter:'-',
						internetLead:'-',	
						multilineReview:'-',
						label1:'-',
						label:'-',
						parkBench:'-',
						personalVisit:'-',
						postcard:'-',
						referral:'-',
						salespersonPivot:'-',
						sign:'-',
						television:'-',
						transfer:'-',
						walkIn:'-',
						website:'-',
						webSearch:'-',
						yellowPages:'-',
						other:'-',
					},											
				},
			}
		},		
		{
			id: 'Production_Multiline_Widget6',
			title: '',
			table: {
				columns: [
					{
						id: 'avatar',
						title: '',
						color: '',
						rowSpan: 1,
					},
					{
						id: 'bonusesEarnedThisPeriod',
						title: 'BONUSES EARNED THIS PERIOD',
						color: '',
						colSpan: 7,
					},
				],
				rows: [],
				tableContent : {
					Auto:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',		
					},
					Fire:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',
					},
					Life:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',
					},
					Health:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',
					},
					Bank:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',
					},
					Totals:{
						initialItemBonuses:'-',
						individualTargetBonuses:'-',
						teamTargetBonuses:'-',
						policyGrowthBonuses:'-',
						lapseRateBonuses:'-',	
						specialPromotion:'-',	
						totalBonuses:'-',
					},											
				},
			}
		},	
		{
			id: 'weatherWidget',
			locations: {
				NewYork: {
					name: 'New York',
					icon: 'rainy2',
					temp: {
						C: '22',
						F: '72'
					},
					windSpeed: {
						KMH: 12,
						MPH: 7.5
					},
					windDirection: 'NW',
					rainProbability: '98%',
					next3Days: [
						{
							name: 'Sunday',
							icon: 'rainy',
							temp: {
								C: '21',
								F: '70'
							}
						},
						{
							name: 'Monday',
							icon: 'cloudy',
							temp: {
								C: '19',
								F: '66'
							}
						},
						{
							name: 'Tuesday',
							icon: 'windy3',
							temp: {
								C: '24',
								F: '75'
							}
						}
					]
				}
			},
			currentLocation: 'NewYork',
			tempUnit: 'C',
			speedUnit: 'KMH'
		}
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
	]
};

mock.onGet('/api/project-dashboard-app/widgets').reply(config => {
	return [200, projectDashboardAppDB.widgets];
});

mock.onGet('/api/project-dashboard-app/projects').reply(config => {
	return [200, projectDashboardAppDB.projects];
});
