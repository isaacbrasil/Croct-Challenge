import React, { Fragment, useCallback, useState } from "react";
import GlobalStyle from "../../styles/global";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import SwitchComponent from "../../components/Switch";
import { Investor } from "../../assets/Investor";
import {
  CroctProvider,
  useEvaluation,
  Personalization,
  Slot,
  useContent,
  useCroct,
} from "@croct/plug-react";
import { ReactElement, Suspense } from "react";

function Home() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header>
            Croct
            <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
          </Header>
          <HomeContainer>
            <ImgContainer>
              <Investor />
            </ImgContainer>
            <TxtContainer>
              <h1>
                <span> Lorem ipsum </span> dolor sit amet consectetur
                adipisicing elit.
              </h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, beatae autem quis voluptates unde vitae.
              </h3>
              <button onClick={() => console.log("oi")}>BOTÃO</button>
            </TxtContainer>
          </HomeContainer>
        </div>
      </ThemeProvider>
    </CroctProvider>
  );
}

export default Home;

export const HomeContainer = styled.div`
  display: flex;
  padding: 150px;

  @media only screen and (max-width: 1280px) {
    margin-top: 50px;
    padding: 50px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 30px;
    margin-top: 0px;
  }
  @media only screen and (max-width: 912px) {
    margin-top: 150px;
    flex-direction: column;
    padding: 30px;
  }
  @media only screen and (max-width: 820px) {
    margin-top: 70px;
    flex-direction: column;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 0px;
    flex-direction: column;
    padding: 30px;
  }
  @media only screen and (max-width: 375px) {
    margin-top: 0px;
    flex-direction: column;
    padding: 30px;
  }

  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
`;
export const Title = styled.div`
  font-size: 45px;
  color: ${(props) => props.theme.colors.search});
`;
export const Header = styled.div`
  padding: 0 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.search});

`;
export const ImgContainer = styled.div`
  display: flex;
  width: 100%;

  svg {
    height: 450px;
  }

  @media only screen and (max-width: 912px) {
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 540px) {
    svg {
      margin-bottom: -120px;
    }
  }
  @media only screen and (max-width: 414px) {
    svg {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 375px) {
    svg {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 280px) {
    svg {
      margin-bottom: -250px;
    }
  }
`;
export const TxtContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  span {
    color: ${(props) => props.theme.colors.search};
  }
  h3 {
    margin-top: 25px;
  }
  button {
    outline: none;
    border: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    background: ${(props) => props.theme.colors.search};
    border-radius: 5px;
  }
  @media only screen and (max-width: 1280px) {
    padding: 0px;
  }
  @media only screen and (max-width: 1024px) {
    padding: 0px;
  }
  @media only screen and (max-width: 912px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 820px) {
    margin-top: 150px;
    padding: 10px;
  }
  @media only screen and (max-width: 414px) {
    padding: 10px;
  }
  @media only screen and (max-width: 375px) {
    padding: 10px;
  }
`;
