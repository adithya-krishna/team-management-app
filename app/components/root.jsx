import React, { Component } from 'react';
import Routes from 'routes';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';

/*----------  Configuring Store  ----------*/
const store = configureStore();

/*----------  Wrapping redux Provider ----------*/
export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<Routes />
			</Provider>
		);
	}
}
