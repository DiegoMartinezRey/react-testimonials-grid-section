import { INFO_CARDS } from '../../constants/info-cards';
import Cards from '../card/Cards';
import { StyledContainer } from './cardsContainer.styles';

const CardsContainer = () => {
	return (
		<StyledContainer>
			{INFO_CARDS.map(infoCard => {
				return <Cards key={infoCard.id} infoCard={infoCard} />;
			})}
		</StyledContainer>
	);
};

export default CardsContainer;
