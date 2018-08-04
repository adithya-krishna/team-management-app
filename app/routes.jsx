import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AppHeader from 'components/headers/appHeader';

/*----------  Pages are chosen to be containers in this case  ----------*/
import HomePage from 'pages/homePage';
import AddMember from 'pages/addMember';
import EditMember from 'pages/editMember';
import MobileContainer from 'components/mobile/container';

export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<AppHeader />

					<Route
						render={({ location }) => (
							<MobileContainer>
								<TransitionGroup component={null}>
									<CSSTransition
										key={location.key}
										classNames="fade"
										timeout={300}
									>
										<Switch>
											<Route
												exact
												path="/"
												component={HomePage}
											/>
											<Route
												path="/addmember"
												component={AddMember}
											/>
											<Route
												path="/editmember/:id"
												component={EditMember}
											/>
											<Route
												render={() => (
													<h2>Page not found :/</h2>
												)}
											/>
										</Switch>
									</CSSTransition>
								</TransitionGroup>
							</MobileContainer>
						)}
					/>
				</Fragment>
			</Router>
		);
	}
}
