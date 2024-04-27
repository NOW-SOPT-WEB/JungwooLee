import styled from "styled-components";

function Card({ handleClickCard, idx, isFront, imgSrc }) {
  const handleClickTest = () => {
    handleClickCard(idx);
  };

  console.log(idx);

  return (
    <CardWrapper $isFront={isFront} onClick={handleClickTest}>
      <FrontImg src={imgSrc} />
      <BackImg />
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  transition: 0.4s;
  transform-style: preserve-3d;

  /* &:hover {
    transform: rotateY(180deg);
  } */

  transform: ${({ $isFront }) =>
    $isFront ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImg = styled.img`
  /* width: 100%;
  height: 100%;

  object-fit: cover; */

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: red;
`;

const BackImg = styled.img`
  /* width: 100%;
  height: 100%;

  object-fit: cover; */

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: royalblue;
  transform: rotateY(180deg);
`;
