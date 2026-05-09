function upgradeV110(context, props) {
	const oldFeedbackIds = ['timer_color_normal', 'timer_color_warning', 'timer_color_critical']
	const updatedFeedbacks = []

	for (const feedback of props.feedbacks) {
		if (oldFeedbackIds.includes(feedback.feedbackId)) {
			updatedFeedbacks.push({
				...feedback,
				feedbackId: 'timer_color',
				options: {},
			})
		}
	}

	const updatedActions = props.actions.filter(a => a.actionId !== 'set_timer_font')

	return {
		updatedConfig: null,
		updatedActions,
		updatedFeedbacks,
	}
}

module.exports = [upgradeV110]
