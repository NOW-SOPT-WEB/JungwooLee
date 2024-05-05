import styled from "styled-components";

function HomeHeader() {
  return (
    <HomeHeaderWrapper>
      <HomeHeaderText>합세 화이팅 🔥🔥🔥</HomeHeaderText>
    </HomeHeaderWrapper>
  );
}

export default HomeHeader;

const HomeHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 15rem;

  color: white;

  background-color: #a0522d;
`;

const HomeHeaderText = styled.h1`
  font-size: 4rem;
`;
