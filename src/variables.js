module.exports = function (self) {
	const isPro = self.licenseState.activated

	const variables = [
		{ variableId: 'time_remaining', name: 'Time Remaining (Formatted)' },
		{ variableId: 'time_remaining_seconds', name: 'Time Remaining (Seconds)' },
		{ variableId: 'is_running', name: 'Is Running' },
		{ variableId: 'is_paused', name: 'Is Paused' },
		{ variableId: 'reset_time', name: 'Reset Time (Formatted)' },
		{ variableId: 'timer_visible', name: 'Timer Visible' },
		{ variableId: 'time_of_day_visible', name: 'Time of Day Visible' },
		{ variableId: 'timer_font_size', name: 'Timer Font Size (%)' },
		{ variableId: 'time_of_day_font_size', name: 'Time of Day Font Size (%)' },
		{ variableId: 'color_normal', name: 'Normal Color' },
		{ variableId: 'color_warning', name: 'Warning Color' },
		{ variableId: 'color_critical', name: 'Critical Color' },
		{ variableId: 'time_of_day_color', name: 'Time of Day Color' },
		{ variableId: 'threshold_warning', name: 'Warning Threshold (seconds)' },
		{ variableId: 'threshold_critical', name: 'Critical Threshold (seconds)' },
		{ variableId: 'display_is_fullscreen', name: 'Output Is Fullscreen' },
		{ variableId: 'display_no_output', name: 'Output Window Closed' },
	]

	if (isPro) {
		variables.push(
			{ variableId: 'timer_font', name: 'Timer Font' },
			{ variableId: 'timer_direction', name: 'Timer Direction' },
			{ variableId: 'message_text', name: 'Message Text' },
			{ variableId: 'message_visible', name: 'Message Visible' }
		)
	}

	self.setVariableDefinitions(variables)
}
