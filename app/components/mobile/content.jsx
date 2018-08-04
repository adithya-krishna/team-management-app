import React from 'react';

import { Container } from 'semantic-ui-react';

export default props => (
	<Container className={'mobileInnerContainer'}>{props.children}</Container>
);
