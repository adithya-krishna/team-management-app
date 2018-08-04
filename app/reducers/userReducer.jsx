import { combineReducers } from 'redux';

import UserActions from 'actions/userActions';
const BLANK = '';
import { UserRoleEnum } from 'enums/userRole';

export const initialUserFormData = {
	firstName: BLANK,
	lastName: BLANK,
	email: BLANK,
	phone: BLANK,
	userRole: UserRoleEnum.regular
};

const fetchingAllUsers = (state = null, action) => {
	switch (action.type) {
		case UserActions.GET_ALL_USERS_START: {
			return true;
		}
		case UserActions.GET_ALL_USERS_COMPLETE: {
			return false;
		}
		default: {
			return state;
		}
	}
};

const fetchingUser = (state = null, action) => {
	switch (action.type) {
		case UserActions.GET_USER_BY_ID_START: {
			return true;
		}
		case UserActions.GET_USER_BY_ID_COMPLETE: {
			return false;
		}
		default: {
			return state;
		}
	}
};

const users = (state = [], action) => {
	switch (action.type) {
		case UserActions.DELETE_USER:
		case UserActions.SET_NEW_USER:
		case UserActions.GET_ALL_USERS_COMPLETE: {
			return [...action.payload];
		}

		default: {
			return state;
		}
	}
};

const userFromData = (state = initialUserFormData, action) => {
	switch (action.type) {
		case UserActions.CLEAR_FORM_DATA: {
			return initialUserFormData;
		}

		case UserActions.GET_USER_BY_ID_COMPLETE:
		case UserActions.FIELD_CHANGE: {
			return { ...state, ...action.payload };
		}

		default: {
			return state;
		}
	}
};

export default combineReducers({
	fetchingAllUsers,
	fetchingUser,
	userFromData,
	users
});
