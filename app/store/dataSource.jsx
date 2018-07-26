import nth from 'lodash/nth';
import findIndex from 'lodash/findIndex';

// since 10 elements exist, we start with the 11th one
const counter = () => {
	var index = 11;
	return () => {
		return index++;
	};
};
const indexCounter = counter();

class DataSource {
	users = [
		{
			id: 1,
			firstName: 'Sukey',
			lastName: 'Edgeller',
			email: 'sedgeller0@linkedin.com',
			phone: '864-973-2286',
			isAdmin: true
		},
		{
			id: 2,
			firstName: 'Isidora',
			lastName: 'Berry',
			email: 'iberry1@symantec.com',
			phone: '717-430-2945',
			isAdmin: false
		},
		{
			id: 3,
			firstName: 'Jerrilee',
			lastName: 'Petken',
			email: 'jpetken2@angelfire.com',
			phone: '597-507-1068',
			isAdmin: false
		},
		{
			id: 4,
			firstName: 'Rafaellle',
			lastName: 'Pecey',
			email: 'rpecey3@nifty.com',
			phone: '371-957-8167',
			isAdmin: false
		},
		{
			id: 5,
			firstName: 'Sascha',
			lastName: 'Hulland',
			email: 'shulland4@hc360.com',
			phone: '973-553-5386',
			isAdmin: true
		},
		{
			id: 6,
			firstName: 'Bette-ann',
			lastName: 'Giral',
			email: 'bgiral5@privacy.gov.au',
			phone: '673-421-4888',
			isAdmin: false
		},
		{
			id: 7,
			firstName: 'Jania',
			lastName: 'Arnall',
			email: 'jarnall6@merriam-webster.com',
			phone: '515-379-9647',
			isAdmin: false
		},
		{
			id: 8,
			firstName: 'Loise',
			lastName: 'Thorbon',
			email: 'lthorbon7@shinystat.com',
			phone: '620-772-6889',
			isAdmin: false
		},
		{
			id: 9,
			firstName: 'Fredra',
			lastName: 'Evequot',
			email: 'fevequot8@earthlink.net',
			phone: '810-627-1321',
			isAdmin: true
		},
		{
			id: 10,
			firstName: 'Boothe',
			lastName: 'Maurice',
			email: 'bmaurice9@opera.com',
			phone: '524-460-5124',
			isAdmin: true
		}
	];

	getAllUsers = () => this.users;

	setNewUser = user => {
		this.users = [...this.users, { ...user, id: indexCounter() }];
		return this.users;
	};

	getUserById = id => {
		const { users } = this;

		const userIndex = findIndex(users, user => user.id === id);

		return nth(users, userIndex);
	};

	updateUserById = updatedUser => {
		const userIndex = findIndex(
			this.users,
			user => user.id === updatedUser.id
		);
		this.users = [
			...this.users.slice(0, userIndex),
			updatedUser,
			...this.users.slice(userIndex + 1)
		];

		return this.users;
	};

	deleteUser = id => {
		const userIndex = findIndex(this.users, user => user.id === id);
		this.users = [
			...this.users.slice(0, userIndex),
			...this.users.slice(userIndex + 1)
		];
		return this.users;
	};
}

export default DataSource;
