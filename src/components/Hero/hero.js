import React, { useState } from 'react';

import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP } from './hero.styles';

import Navbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import { Backdrop } from '../UI/Backdrop/backdrop.styles';
import { Button } from '../UI/Button/button.styles';

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsOpen(!isOpen);
	};

	return (
		<HeroContainer>
			<Backdrop onClick={toggleMenuHandler} isOpen={isOpen} />
			<Navbar toggle={toggleMenuHandler} />
			<Sidebar toggle={toggleMenuHandler} isOpen={isOpen} />
			<HeroContent>
				<HeroItems>
					<HeroH1>Greatest Pizza Ever</HeroH1>
					<HeroP>Ready in 60 seconds</HeroP>
					<Button>Place Order</Button>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
