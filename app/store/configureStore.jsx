import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { UserRoleEnum } from 'enums/userRole';
import userReducer from 'reducers/userReducer';

const BLANK = '';
export const userFromData = {
	firstName: BLANK,
	lastName: BLANK,
	email: BLANK,
	phone: BLANK,
	userRole: UserRoleEnum.regular
};
const initialState = {
	users: [],
	fetchingAllUsers: false,
	fetchingUser: false,
	userFromData
};

export default function configureStore() {
	const store = createStore(
		userReducer,
		initialState,
		applyMiddleware(thunk)
	);
	return store;
}
