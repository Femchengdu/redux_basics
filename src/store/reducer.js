const initialize_reducer = {
	counter: 0
}

const reducer = (state = initialize_reducer, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1
		}
	}
	return state;
}

export default reducer;