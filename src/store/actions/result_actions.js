import * as action_types from './action_types';

// add_to_array_via_thunk
export const add_to_array_via_thunk = (passed_data) => {
	return {
		type: action_types.add_to_array,
		counter_value: passed_data
	}
}

// New add to array creator using thunk

export const add_to_array_creator = (passed_data) => {
	return dispatch => {
		setTimeout( () => {
			dispatch(add_to_array_via_thunk(passed_data));
		}, 6000);
	}
}

export const del_from_array_creator = (passed_data) => {
	return {
		type: action_types.del_from_array,
		arr_id: passed_data
	}
}