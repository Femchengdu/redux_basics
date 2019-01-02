//....
const initialize_reducer = {
	counter: 0
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		case 'INCREMENT':
			return {
				counter: state.counter + 1
			}
		case 'DECREMENT':
			return {
				counter: state.counter - 1
			}
		case 'ADD':
			return {
				counter: state.counter + action.value
			}
		case 'SUBTRACT':
			return {
				counter: state.counter - action.value
			}
		default:
			return state;
	}
}

export default reducer;
