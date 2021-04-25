import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
	position: fixed;
	z-index: 999;
	top: 0;
	right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
	width: 350px;
	height: 100%;
	background: #ffc500;
	display: grid;
	align-items: center;
	transition: 0.3s ease-in-out;
	overflow: hidden;

	@media screen and (max-width: 400px) {
		width: 100%;
	}
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	border: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const CloseIcon = styled(FaTimes)`
	color: #e31837;
`;

export const SidebarMenu = styled.div`
	display: grid;
	grid-template-rows: repeat(3, 80px);
	grid-template-columns: 1fr;
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(3, 60px);
	}
`;

export const SidebarLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	text-decoration: none;
	color: #000;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #e31837;
		transition: 0.2s ease-in-out;
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarRoute = styled(Link)`
	background: #e55039;
	white-space: nowrap;
	padding: 16px 64px;
	color: #fff;
	font-weight: 500;
	text-decoration: none;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		background: #e31837;
		transition: 0.2s ease-in-out;
		color: #fff;
	}
`;
