import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

//require reducers here
// const {'reducers go here'} = require('./../reducers/index');

export const configure = () => {
	const reducer = combineReducers  ({
		//tag the reducers here
	});

	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

	return store;
};