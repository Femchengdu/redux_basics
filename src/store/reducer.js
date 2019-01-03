import * as action_types from './actions';
//.....
const initialize_reducer = {
	counter: 0,
	results: []
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		case action_types.add_one:
		// Change the state immutably
		const newState = Object.assign({}, state);
		//console.log('[State Counter:]', state.counter);
		newState.counter = state.counter + 1;
		//console.log('[newState Counter:]', newState.counter);
		//console.log('[State Counter After:]', state.counter);
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
		case action_types.add_to_array:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: state.counter})
			}
		case action_types.del_from_array:
			// const id = some_id;
			// const newArr = [...state.results];
			// newArr.splice(some_id, 1)
			const updateArray = state.results.filter(result => result.id !== action.arr_id)
			return {
				...state,
				results: updateArray
			}
		default:
			return state;
	}
}

export default reducer;
