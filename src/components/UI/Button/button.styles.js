import styled from 'styled-components';

export const Button = styled.button`
	background: ${({ secondary }) => (secondary ? '#ffc500' : '#e55039')};
	white-space: nowrap;
	padding: ${({ padsmall }) => (padsmall ? '0.6rem 3rem' : '1rem 4rem')};
	color: ${({ secondary }) => (secondary ? '#000' : '#fff')};
	font-weight: 400;
	text-decoration: none;
	font-size: ${({ fontSmall }) => (fontSmall ? '16px' : '1.4rem')};
	outline: none;
	border: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		background: ${({ secondary }) => (secondary ? '#e55039' : '#ffc500')};
		color: ${({ secondary }) => (secondary ? '#fff' : '#000')};
		transition: 0.2s ease-out;
	}
`;
