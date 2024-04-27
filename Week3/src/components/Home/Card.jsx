import styled from "styled-components";

function Card({ id, imgSrc, isFront }) {
  return <CardWrapper>{id}</CardWrapper>;
}

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: red;
`;
