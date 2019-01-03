//....
const initialize_reducer = {
	counter: 0,
	results: []
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		case 'INCREMENT':
		// Change the state immutably
		const newState = Object.assign({}, state);
		//console.log('[State Counter:]', state.counter);
		newState.counter = state.counter + 1;
		//console.log('[newState Counter:]', newState.counter);
		//console.log('[State Counter After:]', state.counter);
		return newState;
		case 'DECREMENT':
			return {
				...state,
				counter: state.counter - 1
			}
		case 'ADD':
			return {
				...state,
				counter: state.counter + action.value
			}
		case 'SUBTRACT':
			return {
				...state,
				counter: state.counter - action.value
			}
		case 'STORE_RESULT':
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			}
		default:
			return state;
	}
}

export default reducer;
