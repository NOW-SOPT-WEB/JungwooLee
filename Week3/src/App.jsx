import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { theme } from "../styles/theme";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
