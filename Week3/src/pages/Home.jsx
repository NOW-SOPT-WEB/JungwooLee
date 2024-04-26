import styled from "styled-components";
import HomeHeader from "../components/Home/HomeHeader";

import { useState } from "react";

function Home() {
  const [currentPoint, setCurrentPoint] = useState(0);
  const [clearPoint, setClearPoint] = useState(5);

  return (
    <HomePageWrapper>
      <HomeHeader currentPoint={currentPoint} clearPoint={clearPoint} />
    </HomePageWrapper>
  );
}

export default Home;

const HomePageWrapper = styled.div`
  height: 100vh;
`;
