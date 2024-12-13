import styled from 'styled-components';

const StyledCardContainer = styled.div`
	background-color: ${props => {
		if (props.$theme === 'purple') {
			return '#733FC8';
		} else if (props.$theme === 'grey') {
			return '#48556A';
		} else if (props.$theme === 'white') {
			return '#FFFFFF';
		} else {
			return '#19202D';
		}
	}};
	color: ${props => {
		if (props.$theme === 'white') {
			return '#48556A';
		} else {
			return '#FFFFFF';
		}
	}};
	border-radius: 8px;
	box-shadow: 40px 60px 50px -47px rgba(72, 85, 106, 0.24);
	padding: 26px 32px 32px 32px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	gap: 18px;

	@media screen and (width > 768px) {
		grid-area: ${props => props.$area};
	}
`;

const StyledNameContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 17px;
`;

const StyledImgProfile = styled.img`
	border-radius: 50%;
`;

export { StyledCardContainer, StyledImgProfile, StyledNameContainer };
