//..
const initialize_reducer = {
	counter: 0
}

const reducer = (state = initialize_reducer, action) => {
	// Increment
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1
		}
	}
	// Decrement
	if (action.type === 'DECREMENT') {
		return {
			counter: state.counter - 1
		}
	}
	// Add
	if (action.type === 'ADD') {
		return {
			counter: state.counter + action.value
		}
	}
	// Subtract
	if (action.type === 'SUBTRACT') {
		return {
			counter: state.counter - action.value
		}
	}
	return state;
}

export default reducer;
