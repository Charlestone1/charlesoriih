import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import PageMain from "./components/PageMain";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <PageMain />
      </ThemeProvider>
    </>
  );
}

export default App;
