import styled from "styled-components";

function HomeHeader({ currentPoint, clearPoint, resetStage }) {
  return (
    <HomeHeaderWrapper>
      <ResetButton onClick={resetStage}>RESET</ResetButton>
      <HomeHeaderTitle>세숑 뒤집기</HomeHeaderTitle>
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

  position: relative;

  width: 100%;
  height: 20rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.apricot};
`;

const ResetButton = styled.button`
  position: absolute;
  top: 7rem;
  right: 7rem;

  width: 13rem;
  height: 6rem;

  font-size: 2rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGreen};

  transition: 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

const HomeHeaderTitle = styled.h1`
  font-size: 7rem;
`;

const PointCounter = styled.h2`
  font-size: 4rem;
`;
