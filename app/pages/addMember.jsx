import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import MobileContent from 'components/mobile/content';
import SectionHeader from 'components/headers/sectionHeader';
import UserFrom from 'components/form/userFrom';
import UserActions from 'actions/userActions';

class AddMember extends Component {
	onFormSubmit = newUser => {
		const { setNewUser, history } = this.props;
		setNewUser(newUser);
		history.goBack();
	};

	componentDidMount() {
		const { clearFormData } = this.props;
		clearFormData();
	}

	render() {
		const { handleFieldChange, userFromData } = this.props;

		return (
			<MobileContent>
				<SectionHeader
					as={'h2'}
					title={'Add a team members'}
					subtitle={'Set contact info and role'}
					iconLinkTo={'/'}
					iconName={'close'}
				/>

				<UserFrom
					isEditMode={false}
					onFormSubmit={this.onFormSubmit}
					onFieldChange={handleFieldChange}
					userFromData={userFromData}
				/>
			</MobileContent>
		);
	}
}

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{
		setNewUser: UserActions.setNewUser,
		handleFieldChange: UserActions.handleFieldChange,
		clearFormData: UserActions.clearFormData
	}
)(AddMember);
