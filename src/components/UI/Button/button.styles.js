import styled from 'styled-components';

export const Button = styled.button`
	background: #e55039;
	white-space: nowrap;
	padding: 1rem 4rem;
	color: #fff;
	font-weight: 500;
	text-decoration: none;
	font-size: ${({ fontSmall }) => (fontSmall ? '16px' : '1.4rem')};
	outline: none;
	border: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		background: #ffc500;
		color: #000;
		transition: 0.2s ease-out;
	}
`;
