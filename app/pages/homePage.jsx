import React, { Component } from 'react';
import { connect } from 'react-redux';

import MobileContent from 'components/mobile/content';
import SectionHeader from 'components/headers/sectionHeader';
import UserList from 'components/list';
import UserActions from 'actions/userActions';

class HomePage extends Component {
	componentDidMount() {
		const { getAllUsers } = this.props;
		getAllUsers();
	}

	render() {
		const { users, fetchingUsers } = this.props;
		const userCount = users.length;

		return (
			<MobileContent>
				<SectionHeader
					as={'h2'}
					title={'Team members'}
					subtitle={`You have ${userCount} team members.`}
					iconLinkTo={'/addmember'}
					iconName={'add'}
				/>

				<UserList
					users={users}
					userCount={userCount}
					fetchingUsers={fetchingUsers}
				/>
			</MobileContent>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ getAllUsers: UserActions.getAllUsers }
)(HomePage);
