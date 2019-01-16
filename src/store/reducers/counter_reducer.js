//.....
import * as action_types from '../actions/action_types';
import {update_object} from '../reducer_utilities';

const initialize_reducer = {
	counter: 0
}

const reducer = (state = initialize_reducer, action) => {
	// Using a swithch statement

	switch (action.type) {
		case action_types.add_one:
			return update_object(state, {counter: state.counter + 1});
		case action_types.sub_one:
			return update_object(state, {counter: state.counter - 1});
		case action_types.add_five:
			return update_object(state, {counter: state.counter + action.value});
		case action_types.sub_five:
			return update_object(state, {counter: state.counter - action.value });
		default:
			return state;
	}
}

export default reducer;
