import React from 'react';
import { NavbarContainer, NavIcon, NavLink, PizzaIcon, PizzaLogo } from './navbar.styles';

const Navbar = ({ toggle }) => {
	return (
		<NavbarContainer>
			<NavLink to='/'>
				<PizzaLogo />
				Pizza
			</NavLink>
			<NavIcon onClick={toggle}>
				<p>MENU</p>
				<PizzaIcon />
			</NavIcon>
		</NavbarContainer>
	);
};

export default Navbar;
