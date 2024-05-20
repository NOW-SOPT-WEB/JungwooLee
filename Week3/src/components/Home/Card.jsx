import styled from "styled-components";

function Card({ idx, clickCard, id, isFront, imgSrc }) {
  const handleClickCard = () => {
    !isFront && clickCard(idx, id);
  };

  return (
    <CardWrapper $isFront={isFront} onClick={handleClickCard}>
      <BackImg src="/assets/img/back_img.png" />
      <FrontImg src={imgSrc} />
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 25rem;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.black}`};
  border-radius: 1rem;

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

  border-radius: 1rem;

  object-fit: contain;
`;

const FrontImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  object-fit: cover;

  border-radius: 1rem;

  transform: rotateY(180deg);
`;
