import styled from 'styled-components';

export const ProductsContainer = styled.div`
	min-height: 100vh;
	padding: 5rem calc((100vw - 1300px) / 2);
	background: #150f0f;
	color: #fff;
`;

export const ProductsH2 = styled.h2`
	text-align: center;
	text-transform: capitalize;
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 5rem;
`;
