const redux = require('redux');
const create_a_store = redux.createStore

//
const initialize_reducer = {
	counter: 0
}

// Reducer
const appRecuder = (state = initialize_reducer, action) => {
	return state;
}

// Store
const store = create_a_store(appRecuder);
console.log(store.getState());

// Dispatching Action

// Subscription