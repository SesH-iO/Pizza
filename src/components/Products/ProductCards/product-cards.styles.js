import styled from 'styled-components';

export const ProductsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
`;

export const ProductCard = styled.div`
	margin: 0 2rem;
	line-height: 2;
	width: 300px;
	margin-bottom: 2rem;
`;

export const ProductImg = styled.img`
	height: 300px;
	min-width: 300px;
	max-width: 100%;
	box-shadow: 8px 8px #fdc500;
`;

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 2rem;
	text-align: center;
`;

export const ProductTitle = styled.h3`
	font-weight: 400;
	font-size: 1.5rem;
`;

export const ProductDesc = styled.p`
	margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
	margin-bottom: 1rem;
	font-size: 2rem;
`;
