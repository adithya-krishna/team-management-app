import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from 'reducers/userReducer';

const initialState = {
	users: [],
	fetchingAllUsers: false,
	fetchingUser: false,
	user: {}
};

export default function configureStore() {
	const store = createStore(
		userReducer,
		initialState,
		applyMiddleware(thunk)
	);
	return store;
}
