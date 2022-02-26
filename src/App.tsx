import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <header className="App-header">
          <Title>Olá</Title>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

export const Title = styled.div`
  font-size: 45px;
  color: red;
`;
