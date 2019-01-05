import * as action_types from '../actions';
//.....
const initialize_reducer = {
	results: []
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		
		case action_types.add_to_array:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: action.counter_value})
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
