import styled from 'styled-components';
import FeaturePic from '../../assets/Images/pizza-of-the-day.jpg';

export const FeatureContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturePic});
	background-repeat: none;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;
	height: 100vh;
	max-height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: #fff;

	h2 {
		font-size: clamp(3rem, 5vw, 5rem);
	}

	p {
		font-size: clamp(1rem, 3vw, 2rem);
		margin-bottom: 2rem;
	}
`;
