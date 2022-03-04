import { Slot } from "@croct/plug-react";
import { SlotContent } from "@croct/plug/fetch";
import React, { Suspense, useEffect, useState } from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import { Dev } from "../../assets/Dev";
import { Marketer } from "../../assets/Marketer";
import { GrowthHacker } from "../../assets/GrowthHacker";
import { Logo } from "../../assets/Logo";
import SwitchComponent from "../../components/Switch";
import GlobalStyle from "../../styles/global";
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";
import { Default } from "../../assets/Default";
import usePersistedState from "../../utils/usePersistedState";
type SlotProps2 = SlotContent<"home-banner2"> & {
  loading?: boolean;
};
const defaultContent: SlotProps2 = {
  svg: <Default />,
  title: "This is a default text!",
  subtitle: "This is a default subtitle information text.",
  cta: {
    label: "Discover how",
    link: "https://croct.link/demo",
  },
};

const developerPersona: SlotProps2 = {
  svg: <Dev />,
  title: "Become your marketing team's best friend",
  subtitle:
    "Build rich user experiences that are easy for your team to evolve and maintain.",
  cta: {
    label: "Watch our tutorial",
    link: "https://croct.link/demo",
  },
};
const marketerPersona: SlotProps2 = {
  svg: <Marketer />,
  title: "Get more out of yout marketing investment!",
  subtitle:
    "Optimize your digital customer experience to drive more sales and happier customers.",
  cta: {
    label: "Book a demo",
    link: "https://croct.link/demo",
  },
};
const hackerPersona: SlotProps2 = {
  svg: <GrowthHacker />,
  title: "This is a default Growth Hacker text!",
  subtitle: "This is a default Growth Hacker subtitle information text.",
  cta: {
    label: "Know How ",
    link: "https://croct.link/demo",
  },
};

const LayoutsComponent = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [slot, setSlot] = useState(defaultContent);

  const teste = "home-banner2";

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  // const croct = useCroct();
  // const persona = useEvaluation<Persona | null>(
  //   "user's persona or else 'default'",
  //   {
  //     initial: null,
  //     fallback: "default",
  //   }
  // );

  // const setPersona = useCallback(
  //   (event: any) => {
  //     const patch = croct.user.edit();

  //     if (event.target.value === "default") {
  //       patch.unset("custom.persona");
  //     } else {
  //       patch.set("custom.persona", event.target.value);
  //     }

  //     patch
  //       .save()
  //       .then(() => window.setTimeout(() => window.location.reload(), 300));
  //   },
  //   [croct]
  // );

  // handle function to be used with the select way
  // const handlePersona = (event: any) => {
  //   console.log(event.target.value);
  //   if (event.target.value === "default") {
  //     setSlot(defaultContent);
  //   }
  //   if (event.target.value === "marketer") {
  //     setSlot(marketerPersona);
  //   }
  //   if (event.target.value === "growth-hacker") {
  //     setSlot(hackerPersona);
  //   }
  //   if (event.target.value === "developer") {
  //     setSlot(developerPersona);
  //   }
  // };
  const personaValues = ["default", "marketer", "growth-hacker", "developer"];

  useEffect(() => {
    const randomScreen = Math.floor(Math.random() * personaValues.length); //This is an alternative way to get the persona value, emulating an API return of the user and changing the layout at each reload of the page
    const screen = personaValues[randomScreen];
    if (screen === "default") {
      setSlot(defaultContent);
    }
    if (screen === "marketer") {
      setSlot(marketerPersona);
    }
    if (screen === "growth-hacker") {
      setSlot(hackerPersona);
    }
    if (screen === "developer") {
      setSlot(developerPersona);
    }
  }, [personaValues.length]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header>
            <Logo />
            <SwitchComponent toggleTheme={toggleTheme}></SwitchComponent>
          </Header>
          <ButtonHeaderContainer>
            {/*This way I am using a select input to get the persona value and change the layout */}
            {/* <div className="persona-selector">
              {persona && (
                <div className="select">
                  <select defaultValue={persona} onChange={handlePersona}>
                    <option value="default">👤 Default</option>
                    <option value="marketer">👩‍💻 Marketer</option>
                    <option value="growth-hacker">🚀 Growth Hacker</option>
                    <option value="developer">🦸‍♂ Developer</option>
                  </select>
                </div>
              )}
            </div> */}
          </ButtonHeaderContainer>
          <Suspense fallback="✨ Personalizing content...">
            <Slot id={teste} initial={slot} fallback={slot}>
              {({ svg, loading, title, subtitle, cta }: SlotProps2) => (
                <div className={`hero${loading ? " loading" : ""}`}>
                  <HomeContainer>
                    <ImgContainer>{svg}</ImgContainer>
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
        </div>
      </ThemeProvider>
    </div>
  );
};
export default LayoutsComponent;

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
    padding: 10px;
  }
  @media only screen and (max-width: 820px) {
    margin-top: 70px;
    flex-direction: column;
  }
  @media only screen and (max-width: 414px) {
    margin-top: 0px;
    flex-direction: column;
    padding: 20px;
  }
  @media only screen and (max-width: 375px) {
    margin-top: 0px;
    flex-direction: column;
    padding: 10px;
  }

  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
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
    appearance: none;
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
    padding: 0px;
    height: 250px;
  }

  @media only screen and (max-width: 1024px) {
    width: 618px;
    svg {
      padding: 0px;

      margin-bottom: -120px;
    }
  }
  @media only screen and (max-width: 912px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    svg {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -20px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    svg {
      padding: 0px;
      margin-bottom: -150px;
    }
    img {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    svg {
      margin-bottom: -150px;
    }
    img {
      margin-bottom: -150px;
    }
  }
  @media only screen and (max-width: 280px) {
    svg {
      margin-bottom: -150px;
      padding: 0px;
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
