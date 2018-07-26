import React from 'react';
import { Link } from 'react-router-dom';

const withLink = Component => {
	return class WrappedComponent extends React.Component {
		render() {
			const { to, linkClassName, ...others } = this.props;
			return (
				<Link to={to} className={linkClassName}>
					<Component {...others} />
				</Link>
			);
		}
	};
};

export { withLink };
