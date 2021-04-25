import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';
import { ReactComponent as LogoIcon } from '../../assets/Logo/pizza.svg';

export const NavbarContainer = styled.nav`
	background: transparent;
	height: 80px;
	display: flex;
	justify-content: center;
	font-weight: 700;

	@media screen and (max-width: 600px) {
		justify-content: space-between;
		margin-left: 12px;
	}
`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 2rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-175%, 100%);
		font-weight: bold;
	}
`;

export const PizzaIcon = styled(FaPizzaSlice)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;

export const PizzaLogo = styled(LogoIcon)`
	width: 50px;
	height: 50px;
	margin: 0 10px;
`;
