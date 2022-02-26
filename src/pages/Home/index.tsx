import React, { useState } from "react";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import SwitchComponent from "../../components/Switch";

function Home() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header>
          Croct
          <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
        </Header>
      </div>
    </ThemeProvider>
  );
}

export default Home;

export const Title = styled.div`
  font-size: 45px;
  color: ${(props) => props.theme.colors.search});
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.search};
`;
