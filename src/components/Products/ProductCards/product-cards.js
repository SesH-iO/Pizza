import React from 'react';

import {
	ProductsWrapper,
	ProductCard,
	ProductImg,
	ProductInfo,
	ProductTitle,
	ProductDesc,
	ProductPrice,
} from './product-cards.styles';
import { Button } from '../../UI/Button/button.styles';

const ProductCards = ({ data }) => {
	return (
		<ProductsWrapper>
			{data.map((product, index) => (
				<ProductCard key={index}>
					<ProductImg src={product.img} />
					<ProductInfo>
						<ProductTitle>{product.name}</ProductTitle>
						<ProductDesc>{product.desc}</ProductDesc>
						<ProductPrice>{product.price}</ProductPrice>
						<Button fontSmall>{product.button}</Button>
					</ProductInfo>
				</ProductCard>
			))}
		</ProductsWrapper>
	);
};

export default ProductCards;
