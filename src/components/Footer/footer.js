import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
	PizzaLogo,
} from './footer.styles';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>
							<PizzaLogo /> Pizza
						</SocialLogo>
						<WebsiteRights>
							Pizza &copy; {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='facebook'
								rel='noopener noreferrer'
							>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='youtube'
								rel='noopener noreferrer'
							>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='twitter'
								rel='noopener noreferrer'
							>
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
