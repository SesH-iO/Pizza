import React from 'react';

import ProductCards from './ProductCards/product-cards';
import { ProductsContainer, ProductsH2 } from './products.styles';

const Products = ({ heading, data }) => {
	return (
		<ProductsContainer>
			<ProductsH2>{heading}</ProductsH2>
			<ProductCards data={data} />
		</ProductsContainer>
	);
};

export default Products;
