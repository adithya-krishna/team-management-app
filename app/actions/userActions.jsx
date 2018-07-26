import isEmpty from 'lodash/isEmpty';
import isNumber from 'lodash/isNumber';

import DataSource from 'store/dataSource';

const dataSource = new DataSource();

export default class UserActions {
	static GET_ALL_USERS_START = 'GET_ALL_USERS_START';
	static GET_ALL_USERS_COMPLETE = 'GET_ALL_USERS_COMPLETE';
	static GET_USER_BY_ID_START = 'GET_USER_BY_ID_START';
	static GET_USER_BY_ID_COMPLETE = 'GET_USER_BY_ID_COMPLETE';
	static SET_NEW_USER = 'SET_NEW_USER';
	static UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID';
	static DELETE_USER = 'DELETE_USER';

	static getAllUsers = () => {
		return dispatch => {
			dispatch({
				type: UserActions.GET_ALL_USERS_START
			});

			const users = dataSource.getAllUsers();

			dispatch({
				type: UserActions.GET_ALL_USERS_COMPLETE,
				payload: !isEmpty(users) ? users : []
			});
		};
	};

	static getUserById = id => {
		return dispatch => {
			dispatch({
				type: UserActions.GET_USER_BY_ID_START
			});
			const userId = parseFloat(id);

			if (!isNumber(userId)) {
				dispatch({
					type: UserActions.GET_USER_BY_ID_COMPLETE,
					payload: {}
				});
			}

			const user = dataSource.getUserById(userId);

			dispatch({
				type: UserActions.GET_USER_BY_ID_COMPLETE,
				id,
				payload: !isEmpty(user) ? user : {}
			});
		};
	};

	static setNewUser = user => {
		const setUsers = dataSource.setNewUser(user);
		return {
			type: UserActions.SET_NEW_USER,
			payload: setUsers
		};
	};

	static updateUserById = user => {
		const setUsers = dataSource.updateUserById(user);
		return {
			type: UserActions.UPDATE_USER_BY_ID,
			payload: setUsers
		};
	};

	static deleteUser = id => {
		const userId = parseFloat(id);
		const setUsers = dataSource.deleteUser(userId);
		return {
			type: UserActions.DELETE_USER,
			payload: setUsers
		};
	};
}
