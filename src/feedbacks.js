const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	const isPro = self.licenseState.activated

	const feedbacks = {
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
		timer_color: {
			name: 'Timer Color',
			type: 'advanced',
			label: 'Mirror the timer color from the Capacitimer app',
			description: 'Automatically shows the correct color based on current thresholds and enable flags set in the app',
			options: [],
			callback: () => {
				const time = self.timerState.timeRemaining
				let hexColor = self.settings.colorNormal

				if (self.settings.enableCritical && time <= self.settings.thresholdCritical) {
					hexColor = self.settings.colorCritical
				} else if (self.settings.enableWarning && time <= self.settings.thresholdWarning) {
					hexColor = self.settings.colorWarning
				}

				const hex = hexColor.replace('#', '')
				const r = parseInt(hex.substring(0, 2), 16)
				const g = parseInt(hex.substring(2, 4), 16)
				const b = parseInt(hex.substring(4, 6), 16)
				return { bgcolor: combineRgb(r, g, b) }
			},
		},
	}

	if (isPro) {
		feedbacks.message_visible = {
			name: 'Message Visible',
			type: 'boolean',
			label: 'Change button color when message is visible on display',
			defaultStyle: {
				bgcolor: combineRgb(85, 135, 247),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => {
				return self.messageState.messageVisible
			},
		}
	}

	self.setFeedbackDefinitions(feedbacks)
}
