import styled from "styled-components";
import Card from "./Card";

function CardGrid({ cardList, first, second, clearPoint, clickCard }) {
  return (
    <CardGridWrapper $clearPoint={clearPoint}>
      {cardList.map((card, idx) => (
        <Card
          key={`card-${idx}`}
          idx={idx}
          {...card}
          isFront={first[0] === idx || second[0] === idx || card.isClear}
          clickCard={clickCard}
        />
      ))}
    </CardGridWrapper>
  );
}

export default CardGrid;

const CardGridWrapper = styled.article`
  width: 100%;

  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: repeat(5, 1fr);
`;
