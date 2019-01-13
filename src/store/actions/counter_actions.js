import * as action_types from './action_types';

export const add_one_creator = () => {
	return {
		type: action_types.add_one
	}
}

export const sub_one_creator = () => {
	return {
		type: action_types.sub_one
	}
}

export const add_five_creator = (passed_data) => {
	return {
		type: action_types.add_five,
		value: passed_data
	}
}

export const sub_five_creator = (passed_data) => {
	return {
		type: action_types.sub_five,
		value: passed_data
	}
}