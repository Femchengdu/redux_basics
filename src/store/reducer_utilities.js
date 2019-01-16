export const update_object = (old_object, update_values) => {
	return {
		...old_object,
		...update_values
	}
}