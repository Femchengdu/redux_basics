//.....
import * as action_types from '../actions/action_types';
import {update_object} from '../reducer_utilities';

const initialize_reducer = {
	results: []
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		
		case action_types.add_to_array:
			return update_object(state, {results: state.results.concat({id: new Date(), value: action.counter_value})});
		case action_types.del_from_array:
			const updateArray = state.results.filter(result => result.id !== action.arr_id)
			return update_object(state, {results: updateArray});
		default:
			return state;
	}
}

export default reducer;
