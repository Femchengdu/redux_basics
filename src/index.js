import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import counterReducer from './store/reducers/counter_reducer';
import resultReducer from './store/reducers/result_reducer';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	cnt_reducer: counterReducer,
	res_reducer: resultReducer
});

const middleware_logger = store => {
	return proceed_to_reducer => {
		return action => {
			console.log('[middlewareLogger] Sending', action);
			const terminate_recusive_call = proceed_to_reducer(action);
			console.log('[middlewareLogger] accessing store:', store.getState());
			return terminate_recusive_call;
		}
	}
}

const store = createStore(rootReducer, applyMiddleware(middleware_logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
