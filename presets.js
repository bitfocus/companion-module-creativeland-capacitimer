const { combineRgb } = require('@companion-module/base')

module.exports = function (self) {
	const presets = {}

	// Timer Control Presets
	presets.start_timer = {
		type: 'button',
		category: 'Timer Control',
		name: 'Start Timer',
		style: {
			text: 'START',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(50, 50, 50),
		},
		steps: [
			{
				down: [
					{
						actionId: 'start_timer',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timer_running',
				style: {
					bgcolor: combineRgb(0, 255, 0),
					color: combineRgb(0, 0, 0),
				},
			},
		],
	}

	presets.pause_timer = {
		type: 'button',
		category: 'Timer Control',
		name: 'Pause Timer',
		style: {
			text: 'PAUSE',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(50, 50, 50),
		},
		steps: [
			{
				down: [
					{
						actionId: 'pause_timer',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timer_paused',
				style: {
					bgcolor: combineRgb(255, 165, 0),
					color: combineRgb(0, 0, 0),
				},
			},
		],
	}

	presets.reset_timer = {
		type: 'button',
		category: 'Timer Control',
		name: 'Reset Timer',
		style: {
			text: 'RESET',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(50, 50, 50),
		},
		steps: [
			{
				down: [
					{
						actionId: 'reset_timer',
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.toggle_timer = {
		type: 'button',
		category: 'Timer Control',
		name: 'Toggle Timer (Start/Pause)',
		style: {
			text: 'START\\nPAUSE',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 64, 128),
		},
		steps: [
			{
				down: [
					{
						actionId: 'toggle_timer',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timer_running',
				style: {
					bgcolor: combineRgb(0, 255, 0),
					color: combineRgb(0, 0, 0),
				},
			},
			{
				feedbackId: 'timer_paused',
				style: {
					bgcolor: combineRgb(255, 165, 0),
					color: combineRgb(0, 0, 0),
				},
			},
			{
				feedbackId: 'timer_stopped',
				style: {
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(50, 50, 50),
				},
			},
		],
	}

	// Set Timer Presets
	presets.set_timer_1min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 1 Minutes',
		style: {
			text: 'SET\\n1:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 0,
							minutes: 1,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_5min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 5 Minutes',
		style: {
			text: 'SET\\n5:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 0,
							minutes: 5,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_10min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 10 Minutes',
		style: {
			text: 'SET\\n10:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 0,
							minutes: 10,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_30min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 30 Minutes',
		style: {
			text: 'SET\\n30:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 0,
							minutes: 30,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_45min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 45 Minutes',
		style: {
			text: 'SET\\n45:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 0,
							minutes: 45,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_1hour = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 1 Hour',
		style: {
			text: 'SET\\n1:00:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 1,
							minutes: 0,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_1hour30min = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 1 Hour, 30 Minutes',
		style: {
			text: 'SET\\n1:30:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 1,
							minutes: 30,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.set_timer_2hour = {
		type: 'button',
		category: 'Set Timer',
		name: 'Set Timer to 2 Hours',
		style: {
			text: 'SET\\n2:00:00',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(191, 78, 52),
		},
		steps: [
			{
				down: [
					{
						actionId: 'set_timer',
						options: {
							hours: 2,
							minutes: 0,
							seconds: 0,
							keepRunning: false,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	// Adjust Timer Presets

	presets.add_1min = {
		type: 'button',
		category: 'Adjust Timer',
		name: 'Add 1 Minute',
		style: {
			text: '+1 min',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(136, 136, 136),
		},
		steps: [
			{
				down: [
					{
						actionId: 'adjust_timer',
						options: {
							seconds: 60,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.subtract_1min = {
		type: 'button',
		category: 'Adjust Timer',
		name: 'Subtract 1 Minute',
		style: {
			text: '-1 min',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(136, 136, 136),
		},
		steps: [
			{
				down: [
					{
						actionId: 'adjust_timer',
						options: {
							seconds: -60,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}


	presets.add_5min = {
		type: 'button',
		category: 'Adjust Timer',
		name: 'Add 5 Minutes',
		style: {
			text: '+5 min',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(136, 136, 136),
		},
		steps: [
			{
				down: [
					{
						actionId: 'adjust_timer',
						options: {
							seconds: 300,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	presets.subtract_5min = {
		type: 'button',
		category: 'Adjust Timer',
		name: 'Subtract 5 Minute',
		style: {
			text: '-5 min',
			size: '18',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(136, 136, 136),
		},
		steps: [
			{
				down: [
					{
						actionId: 'adjust_timer',
						options: {
							seconds: -300,
						},
					},
				],
				up: [],
			},
		],
		feedbacks: [],
	}

	// Display Control Presets
	presets.toggle_timer_visibility = {
		type: 'button',
		category: 'Display Control',
		name: 'Toggle Timer Visibility',
		style: {
			text: 'SHOW\\nTIMER',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(50, 50, 50),
		},
		steps: [
			{
				down: [
					{
						actionId: 'toggle_timer_visibility',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timer_visible',
				style: {
					bgcolor: combineRgb(85, 135, 247),
					color: combineRgb(255, 255, 255),
					text: 'HIDE\\nTIMER',
				},
			},
		],
	}

	presets.toggle_time_of_day = {
		type: 'button',
		category: 'Display Control',
		name: 'Toggle Time of Day',
		style: {
			text: 'SHOW\\nTIME OF DAY',
			size: '14',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(50, 50, 50),
		},
		steps: [
			{
				down: [
					{
						actionId: 'toggle_time_of_day',
					},
				],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'time_of_day_visible',
				style: {
					bgcolor: combineRgb(85, 135, 247),
					color: combineRgb(255, 255, 255),
					text: 'HIDE\\nTIME OF DAY',
				},
			},
		],
	}

	// Timer Status Preset with Variable Display
	presets.timer_status = {
		type: 'button',
		category: 'Status',
		name: 'Timer Status',
		style: {
			text: 'TIMER:\\n$(capacitimer:time_remaining)\\n\\nRESET:\\n$(capacitimer:reset_time)',
			size: '12',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
		},
		steps: [
			{
				down: [],
				up: [],
			},
		],
		feedbacks: [
			{
				feedbackId: 'timer_negative',
			},
			{
				feedbackId: 'timer_color_critical',
			},
			{
				feedbackId: 'timer_color_warning',
			},
			{
				feedbackId: 'timer_color_normal',
			},
			{
				feedbackId: 'timer_paused',
				style: {
					bgcolor: combineRgb(255, 165, 0),
					color: combineRgb(0, 0, 0),
				},
			},
		],
	}

	self.setPresetDefinitions(presets)
}
