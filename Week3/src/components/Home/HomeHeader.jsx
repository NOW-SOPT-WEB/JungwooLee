import styled from "styled-components";

function HomeHeader({ currentPoint, clearPoint }) {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderTitle>세숑 맞추기</HomeHeaderTitle>
      <PointCounter>
        ( {currentPoint} / {clearPoint} )
      </PointCounter>
    </HomeHeaderWrapper>
  );
}

export default HomeHeader;

const HomeHeaderWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;

  width: 100%;
  height: 20rem;

  color: #ffffff;

  background-color: #ffa07a;
`;

const HomeHeaderTitle = styled.h1`
  font-size: 7rem;
`;

const PointCounter = styled.h2`
  font-size: 4rem;
`;
