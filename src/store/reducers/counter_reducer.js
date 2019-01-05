import * as action_types from '../actions';
//.....
const initialize_reducer = {
	counter: 0
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		case action_types.add_one:
		// Change the state immutably
		const newState = Object.assign({}, state);
		newState.counter = state.counter + 1;
		return newState;
		case action_types.sub_one:
			return {
				...state,
				counter: state.counter - 1
			}
		case action_types.add_five:
			return {
				...state,
				counter: state.counter + action.value
			}
		case action_types.sub_five:
			return {
				...state,
				counter: state.counter - action.value
			}
		default:
			return state;
	}
}

export default reducer;
