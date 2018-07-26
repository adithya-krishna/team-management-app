import React, { Component } from 'react';
import { connect } from 'react-redux';

import MobileContainer from 'components/mobile/container';
import SectionHeader from 'components/headers/sectionHeader';
import UserFrom from 'components/form/userFrom';
import UserActions from 'actions/userActions';

class EditMember extends Component {
	onFormSubmit = newUser => {
		const { updateUserById, history } = this.props;
		updateUserById(newUser);
		history.goBack();
	};

	onDeleteUser = () => {
		const {
			deleteUser,
			match: { params },
			history
		} = this.props;
		deleteUser(params.id);
		history.goBack();
	};

	componentDidMount() {
		const {
			match: { params },
			getUserById
		} = this.props;

		getUserById(params.id);
	}

	render() {
		const { user, fetchingUser } = this.props;

		return (
			<MobileContainer>
				<SectionHeader
					as={'h2'}
					title={'Edit team members'}
					subtitle={'Edit contact info and role'}
					iconLinkTo={'/'}
					iconName={'close'}
				/>

				<UserFrom
					isEditMode
					userPrefill={user}
					fetchingUser={fetchingUser}
					onFormSubmit={this.onFormSubmit}
					onDeleteClick={this.onDeleteUser}
				/>
			</MobileContainer>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{
		getUserById: UserActions.getUserById,
		updateUserById: UserActions.updateUserById,
		deleteUser: UserActions.deleteUser
	}
)(EditMember);
