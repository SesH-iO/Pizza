import styled from 'styled-components';

export const Backdrop = styled.div`
	@media screen and (max-width: 768px) {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 500;
		display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
		transition: 0.2s ease-in-out;
	}
`;
