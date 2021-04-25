import React, { Fragment } from 'react';

import { productData } from '../shared/data';

import Hero from '../components/Hero/hero';
import Products from '../components/Products/products';

const Index = () => {
	return (
		<Fragment>
			<Hero />
			<Products heading='Choose your favorite' data={productData} />
		</Fragment>
	);
};

export default Index;
