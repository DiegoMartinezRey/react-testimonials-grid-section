import {
	StyledCardContainer,
	StyledImgProfile,
	StyledNameContainer
} from './cards.styles';

const Cards = props => {
	return (
		<StyledCardContainer
			$area={props.infoCard.area}
			$theme={props.infoCard.theme}
		>
			<StyledNameContainer>
				<StyledImgProfile src={props.infoCard.img} alt={props.infoCard.name} />
				<div>
					<h3>{props.infoCard.name}</h3>
					<span>{props.infoCard.grade}</span>
				</div>
			</StyledNameContainer>
			<h2>{props.infoCard.title}</h2>
			<p>{props.infoCard.description}</p>
		</StyledCardContainer>
	);
};

export default Cards;
