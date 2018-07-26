import UserActions from 'actions/userActions';

const userReducer = (state, action) => {
	switch (action.type) {
		case UserActions.GET_ALL_USERS_START: {
			return { ...state, fetchingAllUsers: true };
		}

		case UserActions.GET_ALL_USERS_COMPLETE: {
			return {
				...state,
				fetchingAllUsers: false,
				users: [...action.payload]
			};
		}

		case UserActions.GET_USER_BY_ID_START: {
			return { ...state, fetchingUser: true };
		}

		case UserActions.GET_USER_BY_ID_COMPLETE: {
			return {
				...state,
				fetchingUser: false,
				user: { ...action.payload }
			};
		}

		case UserActions.SET_NEW_USER: {
			return {
				...state,
				users: [...action.payload]
			};
		}

		case UserActions.DELETE_USER: {
			return {
				...state,
				users: [...action.payload]
			};
		}

		default:
			return state;
	}
};

export default userReducer;
