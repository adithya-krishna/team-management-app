import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from 'components/headers/appHeader';

/*----------  Pages are chosen to be containers in this case  ----------*/
import HomePage from 'pages/homePage';
import AddMember from 'pages/addMember';
import EditMember from 'pages/editMember';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<AppHeader />

					<Route exact path="/" component={HomePage} />
					<Route path="/addmember" component={AddMember} />
					<Route
						path="/editmember/:id"
						component={EditMember}
					/>
				</Fragment>
			</Router>
		);
	}
}
