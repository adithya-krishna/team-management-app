import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import validator from 'validator';
import {
	Button,
	Form,
	Header,
	Checkbox,
	Dimmer,
	Loader,
	Message
} from 'semantic-ui-react';

import { UserRoleEnum } from 'enums/userRole';

class UserFrom extends Component {
	timerCounter = 0;

	componentWillUnmount() {
		if (this.timerCounter) {
			clearTimeout(this.timerCounter);
		}
	}

	validatePhoneNumber = phone => {
		return !isEmpty(phone) && validator.isMobilePhone(phone, 'any');
	};

	validateEmail = email => {
		return !isEmpty(email) && validator.isEmail(email);
	};

	clearErrorMessage = () => {
		const { onFieldChange } = this.props;
		this.timerCounter = setTimeout(() => {
			onFieldChange({ error: undefined });
		}, 4000);
	};

	validateFields = ({ firstName, lastName, email, phone, userRole }) => {
		if (isEmpty(firstName) || isEmpty(lastName)) {
			return { message: 'invalid name' };
		}

		if (!this.validateEmail(email)) {
			return { message: 'invalid email' };
		}

		if (!this.validatePhoneNumber(phone)) {
			return { message: 'invalid phone number' };
		}

		if (isEmpty(userRole)) {
			return { message: 'please select the user role' };
		}
	};

	handleChange = (e, { name, value }) => {
		const { onFieldChange } = this.props;
		onFieldChange({ [name]: value });
	};

	handleFormSubmit = () => {
		const { onFormSubmit, userFromData, onFieldChange } = this.props;
		const currentError = this.validateFields(userFromData);
		const hasError = !!currentError;

		if (hasError) {
			onFieldChange({ error: currentError });
			this.clearErrorMessage();
		} else {
			const newUser = {
				...omit(userFromData, ['error']),
				isAdmin: userFromData.userRole === UserRoleEnum.admin
			};
			onFormSubmit({ ...newUser });
		}
	};

	render() {
		const {
			userFromData: {
				firstName,
				lastName,
				email,
				phone,
				userRole,
				error
			},
			fetchingUser,
			isEditMode,
			onDeleteClick
		} = this.props;

		if (fetchingUser) {
			return (
				<Dimmer active>
					<Loader>Loading</Loader>
				</Dimmer>
			);
		}

		const hasError = !!error;

		return (
			<Form className={'content'} error onSubmit={this.handleFormSubmit}>
				<div className={'section'}>
					<Header>Info</Header>
					<Form.Field>
						<Form.Input
							name={'firstName'}
							value={firstName}
							placeholder={'First Name'}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							name={'lastName'}
							value={lastName}
							placeholder={'Last Name'}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							name={'email'}
							value={email}
							placeholder={'E-Mail'}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							name={'phone'}
							value={phone}
							placeholder={'Phone Number'}
							onChange={this.handleChange}
						/>
					</Form.Field>

					<Header>Role</Header>
					<Form.Field>
						<Checkbox
							radio
							label={`Regular - Can't delete members`}
							name={'userRole'}
							value={UserRoleEnum.regular}
							checked={userRole === UserRoleEnum.regular}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<Checkbox
							radio
							label={'Admin - Can delete members'}
							name={'userRole'}
							value={UserRoleEnum.admin}
							checked={userRole === UserRoleEnum.admin}
							onChange={this.handleChange}
						/>
					</Form.Field>
				</div>

				{hasError ? (
					<Message
						className={'errorBlock'}
						error={hasError}
						header="Invalid!"
						content={(error && error.message) || ''}
					/>
				) : null}

				<div className={`btnFooter ${!isEditMode ? 'pushRight' : ''}`}>
					{isEditMode ? (
						<Button
							basic
							type={'button'}
							color={'red'}
							onClick={onDeleteClick}
						>
							Delete
						</Button>
					) : null}
					<Button color={'blue'} type="submit">
						Save
					</Button>
				</div>
			</Form>
		);
	}
}

export default UserFrom;
