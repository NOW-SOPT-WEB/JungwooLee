import { Router } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;
