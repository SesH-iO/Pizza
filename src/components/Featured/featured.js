import React from 'react';

import { FeatureContainer } from './featured.styles';
import { Button } from '../UI/Button/button.styles';

const Featured = () => {
	return (
		<FeatureContainer>
			<h2>Pizza Of The Day</h2>
			<p>Truffle alfredo sauce topped with 24 carat gold dust</p>
			<Button padsmall='true' secondary>
				Order Now
			</Button>
		</FeatureContainer>
	);
};

export default Featured;
