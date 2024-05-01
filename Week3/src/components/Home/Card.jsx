import styled from "styled-components";

function Card({ idx, clickCard, id, isFront, imgSrc }) {
  const handleClickCard = () => {
    !isFront && clickCard(idx, id);
  };

  return (
    <CardWrapper $isFront={isFront} onClick={handleClickCard}>
      <BackImg />
      <FrontImg src={imgSrc} />
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 25rem;

  transition: 0.4s;
  transform-style: preserve-3d;

  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const BackImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: red;
`;

const FrontImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  object-fit: cover;

  background: royalblue;
  transform: rotateY(180deg);
`;
