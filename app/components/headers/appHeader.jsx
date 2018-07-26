import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';

class AppHeader extends Component {
	render() {
		return (
			<Menu inverted fixed={'top'}>
				<Container>
					<Menu.Item header>TeamApp</Menu.Item>
				</Container>
			</Menu>
		);
	}
}

export default AppHeader;
