
export const add_one = 'INCREMENT';
export const sub_one = 'DECREMENT';
export const add_five = 'ADD';
export const sub_five = 'SUBTRACT';
export const add_to_array = 'STORE_RESULT';
export const del_from_array = 'DELETE_RESULT';


export const add_one_creator = () => {
	return {
		type: add_one
	}
}

export const sub_one_creator = () => {
	return {
		type: sub_one
	}
}

export const add_five_creator = (passed_data) => {
	return {
		type: add_five,
		value: passed_data
	}
}

export const sub_five_creator = (passed_data) => {
	return {
		type: sub_five,
		value: passed_data
	}
}
// add_to_array_via_thunk
export const add_to_array_via_thunk = (passed_data) => {
	return {
		type: add_to_array,
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
		type: del_from_array,
		arr_id: passed_data
	}
}