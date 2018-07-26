import React from 'react';
import { Grid, Header, Icon, Divider, Label } from 'semantic-ui-react';

const ListItem = props => {
	const { header, meta, description, withDivider, isAdmin } = props;
	return (
		<div className="userListItem">
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
						<Icon
							name="user circle"
							className={'grey'}
							size="huge"
						/>
					</Grid.Column>
					<Grid.Column width={12}>
						<div className="content">
							<Header>
								{header}
								{isAdmin ? (
									<Label content={'Admin'} size={'tiny'} />
								) : null}
								<Header.Subheader>{meta}</Header.Subheader>
								<Header.Subheader>
									{description}
								</Header.Subheader>
							</Header>
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			{withDivider ? <Divider /> : null}
		</div>
	);
};

export default ListItem;
