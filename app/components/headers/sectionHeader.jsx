import React, { Component } from 'react';
import { Header, Icon, Divider } from 'semantic-ui-react';

import { withLink } from 'HOCs/link';

const IconLink = withLink(Icon);

class SectionHeader extends Component {
	render() {
		const { title, subtitle, as, iconLinkTo, iconName } = this.props;

		return (
			<div className="sectionHeader">
				<div className="helper rightAligned section">
					<IconLink
						to={iconLinkTo}
						linkClassName={'actionIcon'}
						name={iconName}
						size="large"
					/>
				</div>
				<Header as={as}>
					<Header.Content>
						{title}
						<Header.Subheader>{subtitle}</Header.Subheader>
					</Header.Content>
				</Header>

				<Divider />
			</div>
		);
	}
}

export default SectionHeader;
