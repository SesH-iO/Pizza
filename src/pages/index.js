import React, { Fragment } from 'react';

import { productData, sweetsData } from '../shared/data';

import Hero from '../components/Hero/hero';
import Products from '../components/Products/products';
import Featured from '../components/Featured/featured';
import Footer from '../components/Footer/footer';

const Index = () => {
	return (
		<Fragment>
			<Hero />
			<Products heading='Choose your favorite' data={productData} />
			<Featured />
			<Products heading='Sweet Treats for You' data={sweetsData} />
			<Footer />
		</Fragment>
	);
};

export default Index;
