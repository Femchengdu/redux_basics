import * as action_types from './action_types';

// add_to_array_via_thunk
export const add_to_array_via_thunk = (passed_data) => {
	return {
		type: action_types.add_to_array,
		counter_value: passed_data
	}
}

// New add to array creator using thunk
// Thunk can also receive getState
export const add_to_array_creator = (passed_data) => {
	return (dispatch, getState) => {
		setTimeout( () => {
			let old_const = getState().cnt_reducer.counter;
			console.log('[Old State:] Before dispatch', old_const);
			dispatch(add_to_array_via_thunk(passed_data));
		}, 3000);
	}
}

export const del_from_array_creator = (passed_data) => {
	return {
		type: action_types.del_from_array,
		arr_id: passed_data
	}
}