const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	self.setFeedbackDefinitions({
		timer_running: {
			name: 'Timer Running',
			type: 'boolean',
			label: 'Change button color when timer is running',
			defaultStyle: {
				bgcolor: combineRgb(0, 255, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: () => {
				return self.timerState.isRunning && !self.timerState.isPaused
			},
		},
		timer_paused: {
			name: 'Timer Paused',
			type: 'boolean',
			label: 'Change button color when timer is paused',
			defaultStyle: {
				bgcolor: combineRgb(255, 165, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: () => {
				return self.timerState.isPaused
			},
		},
		timer_stopped: {
			name: 'Timer Stopped',
			type: 'boolean',
			label: 'Change button color when timer is stopped',
			defaultStyle: {
				bgcolor: combineRgb(50, 50, 50),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return !self.timerState.isRunning && !self.timerState.isPaused
			},
		},
		time_remaining_less_than: {
			name: 'Time Remaining Less Than',
			type: 'boolean',
			label: 'Change button color when time remaining is less than threshold',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					id: 'seconds',
					type: 'number',
					label: 'Seconds',
					default: 60,
					min: 0,
					max: 86400,
				},
			],
			callback: (feedback) => {
				return self.timerState.timeRemaining < feedback.options.seconds && self.timerState.timeRemaining > 0
			},
		},
		time_remaining_greater_than: {
			name: 'Time Remaining Greater Than',
			type: 'boolean',
			label: 'Change button color when time remaining is greater than threshold',
			defaultStyle: {
				bgcolor: combineRgb(0, 255, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [
				{
					id: 'seconds',
					type: 'number',
					label: 'Seconds',
					default: 300,
					min: 0,
					max: 86400,
				},
			],
			callback: (feedback) => {
				return self.timerState.timeRemaining > feedback.options.seconds
			},
		},
		timer_negative: {
			name: 'Timer Negative (Count Up)',
			type: 'boolean',
			label: 'Change button color when timer is counting up past zero',
			defaultStyle: {
				bgcolor: combineRgb(204, 0, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.timerState.timeRemaining < 0
			},
		},
		timer_visible: {
			name: 'Timer Visible',
			type: 'boolean',
			label: 'Change button color when timer is visible',
			defaultStyle: {
				bgcolor: combineRgb(85, 135, 247),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.settings.showTimer
			},
		},
		time_of_day_visible: {
			name: 'Time of Day Visible',
			type: 'boolean',
			label: 'Change button color when time of day is visible',
			defaultStyle: {
				bgcolor: combineRgb(85, 135, 247),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.settings.showTimeOfDay
			},
		},
		timer_color_normal: {
			name: 'Timer Color: Normal',
			type: 'advanced',
			label: 'Change button color based on app normal color threshold',
			description: 'Uses the normal color and threshold set in the Capacitimer app',
			options: [],
			callback: () => {
				const time = self.timerState.timeRemaining
				if (time >= self.settings.thresholdNormal) {
					// Parse hex color from settings
					const hex = self.settings.colorNormal.replace('#', '')
					const r = parseInt(hex.substring(0, 2), 16)
					const g = parseInt(hex.substring(2, 4), 16)
					const b = parseInt(hex.substring(4, 6), 16)
					return { bgcolor: combineRgb(r, g, b) }
				}
				return {}
			},
		},
		timer_color_warning: {
			name: 'Timer Color: Warning',
			type: 'advanced',
			label: 'Change button color based on app warning color threshold',
			description: 'Uses the warning color and threshold set in the Capacitimer app',
			options: [],
			callback: () => {
				const time = self.timerState.timeRemaining
				if (time < self.settings.thresholdNormal && time >= self.settings.thresholdWarning) {
					// Parse hex color from settings
					const hex = self.settings.colorWarning.replace('#', '')
					const r = parseInt(hex.substring(0, 2), 16)
					const g = parseInt(hex.substring(2, 4), 16)
					const b = parseInt(hex.substring(4, 6), 16)
					return { bgcolor: combineRgb(r, g, b) }
				}
				return {}
			},
		},
		timer_color_critical: {
			name: 'Timer Color: Critical',
			type: 'advanced',
			label: 'Change button color based on app critical color threshold',
			description: 'Uses the critical color and threshold set in the Capacitimer app',
			options: [],
			callback: () => {
				const time = self.timerState.timeRemaining
				if (time < self.settings.thresholdWarning && time >= self.settings.thresholdCritical) {
					// Parse hex color from settings
					const hex = self.settings.colorCritical.replace('#', '')
					const r = parseInt(hex.substring(0, 2), 16)
					const g = parseInt(hex.substring(2, 4), 16)
					const b = parseInt(hex.substring(4, 6), 16)
					return { bgcolor: combineRgb(r, g, b) }
				}
				return {}
			},
		},
	})
}
