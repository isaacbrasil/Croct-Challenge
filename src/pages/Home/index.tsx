import React, {
  Fragment,
  useCallback,
  useState,
  ReactElement,
  Suspense,
} from "react";
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

import { SlotContent } from "@croct/plug/fetch";
import PersonaSelector from "../../components/PersonaSelector";
import { Logo } from "../../assets/Logo";
import { Dev } from "../../assets/Dev";

type SlotProps = SlotContent<"home-banner"> & {
  loading?: boolean;
};
type SlotProps2 = SlotContent<"home-banner2"> & {
  loading?: boolean;
};
const defaultContent: SlotProps = {
  title: "Experience up to 20% more revenue faster",
  subtitle: "Deliver tailored experiences that drive satisfaction and growth.",
  cta: {
    label: "Discover how",
    link: "https://croct.link/demo",
  },
};

const testContent: SlotProps2 = {
  svg: <Investor />,
  title: "Experience up to 20% more revenue faster",
  subtitle: "Deliver tailored experiences that drive satisfaction and growth.",
  cta: {
    label: "Discover how",
    link: "https://croct.link/demo",
  },
};
const initialContent: SlotProps = {
  ...defaultContent,
  loading: true,
};

type HomeBannerProps = {
  cacheKey?: string;
};

function Greetings(): void {
  const croct = useCroct();
  croct
    .evaluate(`user's stats' sessions`)
    .then((count) => alert(`Visits: ${count}`));
}

function ViewDocsLink(): ReactElement {
  const isDeveloper = useEvaluation<boolean>("user's persona is 'developer'", {
    fallback: false,
  });

  return <Fragment>{isDeveloper && <a href="/docs">View docs</a>}</Fragment>;
}
type HomeBanner = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};

const fallbackBanner: HomeBanner = {
  title: "Default title",
  subtitle: "Default subtitle",
  cta: {
    label: "Try now",
    link: "https://croct.com",
  },
};
// const testBanner: HomeBanner = {
//   id: "test-banner",
//   title: "Titulo teste",
//   subtitle: "Subtítulo teste",
//   cta: {
//     label: "Teste Agora",
//     link: "https://croct.com",
//   },
// };
function Home(): ReactElement {
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
            <Logo />
            <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
          </Header>
          <ButtonHeaderContainer>
            <PersonaSelector /> {/*escolhe a persona*/}
          </ButtonHeaderContainer>
          <HomeContainer>
            {/* <ImgContainer>
              <Investor />
            </ImgContainer>
            <TxtContainer>
              <Suspense fallback="Personalizing content...">
                <Slot id="home-banner" fallback={fallbackBanner}>
                  {({ title, subtitle, cta }: HomeBanner) => (
                    <div>
                      <h1>
                        <strong>{title}</strong>
                      </h1>
                      <h3>
                        <p>{subtitle}</p>
                      </h3>
                      <a href={cta.link}>{cta.label}</a>
                    </div>
                  )}
                </Slot>
              </Suspense> */}

            <Suspense fallback="✨ Personalizing content...">
              <Slot
                id="home-banner2"
                initial={testContent}
                fallback={testContent}
              >
                {({ svg, loading, title, subtitle, cta }: SlotProps2) => (
                  <div className={`hero${loading ? " loading" : ""}`}>
                    <HomeContainer>
                      <ImgContainer>
                        <Investor />
                      </ImgContainer>
                      <TxtContainer>
                        <h1>{title}</h1>
                        <p className="subtitle">{subtitle}</p>
                        <a href={cta.link} className="cta">
                          {cta.label}
                        </a>
                      </TxtContainer>
                    </HomeContainer>
                  </div>
                )}
              </Slot>
            </Suspense>
            {/* </TxtContainer> */}
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
`;
export const ButtonHeaderContainer = styled.div`
  margin-top: 45px;
  margin-bottom: 25px;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    // Additional resets for further consistency
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.terciary};
    border-radius: 5px;
    border: none;
    padding: 10px;
    margin: 0;
    width: 100%;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media only screen and (max-width: 820px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 375px) {
    margin-top: 50px;
  }

  @media only screen and (max-width: 280px) {
    margin-top: 50px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 50%;

  button {
    margin-right: 15px;
    margin-top: 15px;
    outline: none;
    border: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 0 35px;
    cursor: pointer;
    background: ${(props) => props.theme.colors.terciary};
    border-radius: 5px;
  }
  @media only screen and (max-width: 820px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 414px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 375px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 280px) {
    flex-direction: column;
  }
`;
export const Header = styled.div`
  padding: 0 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.terciary};
  background: ${(props) => props.theme.colors.primary};
`;
export const ImgContainer = styled.div`
  display: flex;
  svg {
    padding: 10px;
    height: 450px;
  }

  @media only screen and (max-width: 912px) {
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 540px) {
    svg {
      margin-bottom: -120px;
    }
    img {
      margin-bottom: -120px;
    }
  }
  @media only screen and (max-width: 414px) {
    svg {
      margin-bottom: -150px;
    }
    img {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 375px) {
    svg {
      margin-bottom: -150px;
    }
    img {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 280px) {
    svg {
      margin-bottom: -250px;
    }
    img {
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
  color: ${(props) => props.theme.colors.secundary};
  span {
    color: ${(props) => props.theme.colors.search};
  }
  h3 {
    margin-top: 25px;
    color: ${(props) => props.theme.colors.terciary};
  }
  a {
    text-decoration: none;
    outline: none;
    border: none;
    font-weight: bold;
    color: ${(props) => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 40px;
    width: 100%;
    cursor: pointer;
    background: ${(props) => props.theme.colors.secundary};
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
