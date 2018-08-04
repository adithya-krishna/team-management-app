import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import MobileContent from 'components/mobile/content';
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
		const { fetchingUser, userFromData, handleFieldChange } = this.props;

		return (
			<MobileContent>
				<SectionHeader
					as={'h2'}
					title={'Edit team members'}
					subtitle={'Edit contact info and role'}
					iconLinkTo={'/'}
					iconName={'close'}
				/>

				<UserFrom
					isEditMode
					fetchingUser={fetchingUser}
					userFromData={userFromData}
					onFieldChange={handleFieldChange}
					onFormSubmit={this.onFormSubmit}
					onDeleteClick={this.onDeleteUser}
				/>
			</MobileContent>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{
		handleFieldChange: UserActions.handleFieldChange,
		getUserById: UserActions.getUserById,
		updateUserById: UserActions.updateUserById,
		deleteUser: UserActions.deleteUser
	}
)(EditMember);
