import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import map from 'lodash/map';

import { ListItemWithLink } from 'components/list';

class UserList extends Component {
	render() {
		const { users, userCount, fetchingUsers } = this.props;

		if (fetchingUsers) {
			return (
				<Dimmer active>
					<Loader>Loading</Loader>
				</Dimmer>
			);
		}

		return (
			<div className={'userList'}>
				{userCount > 0 ? (
					map(users, (user, itemIndex) => {
						const {
							id,
							firstName,
							lastName,
							email,
							phone,
							isAdmin
						} = user;
						return (
							<ListItemWithLink
								key={`${id}${firstName}`}
								to={`/editmember/${id}`}
								header={`${firstName} ${lastName}`}
								meta={email}
								description={phone}
								isAdmin={isAdmin}
								withDivider={!(userCount - 1 === itemIndex)}
							/>
						);
					})
				) : (
					<div>No Users! :/</div>
				)}
			</div>
		);
	}
}

export default UserList;
