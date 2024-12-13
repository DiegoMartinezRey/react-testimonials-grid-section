import styled from 'styled-components';

const StyledContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin: 20px;

	@media screen and (width > 768px) {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 30px;
		grid-row-gap: 24px;
	}
`;

export { StyledContainer };
