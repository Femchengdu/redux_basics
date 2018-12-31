const redux = require('redux');
const create_a_store = redux.createStore

//
const initialize_reducer = {
	counter: 0
}

// Reducer
const appRecuder = (state = initialize_reducer, action) => {
	if (action.type === 'INCREMENT_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		}
	}

	if (action.type === 'ADD_VAL_TO_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		}
	}
	return state;
}

// Store
const store = create_a_store(appRecuder);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'ADD_VAL_TO_COUNTER', value: 10});
console.log(store.getState());

// Subscription