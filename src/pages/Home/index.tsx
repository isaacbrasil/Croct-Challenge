import React, {
  Fragment,
  useCallback,
  useState,
  ReactElement,
  ChangeEvent,
  Suspense,
  FunctionComponent,
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
// import PersonaSelector from "../../components/PersonaSelector";
import { Logo } from "../../assets/Logo";
import { Dev } from "../../assets/Dev";
import LayoutsComponent from "../../components/Layout";

type Persona = "marketer" | "developer" | "growth-hacker" | "default";

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
  svg: <Dev />,
  title: "Become your marketing team's best friend",
  subtitle:
    "Build rich user experiences that are easy for your team to evolve and maintain.",
  cta: {
    label: "Watch our tutorial",
    link: "https://croct.link/demo",
  },
};
const testContent2: SlotProps2 = {
  svg: <Investor />,
  title: "Get more out of yout marketing investment!",
  subtitle:
    "Optimize your digital customer experience to drive more sales and happier customers.",
  cta: {
    label: "Book a demo",
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

type HomeBanner = {
  title: string;
  subtitle: string;
  cta: {
    label: string;
    link: string;
  };
};
type PersonaSelectorProps = {
  cacheKey?: string;
};

const fallbackBanner: HomeBanner = {
  title: "Default title",
  subtitle: "Default subtitle",
  cta: {
    label: "Try now",
    link: "https://croct.com",
  },
};

const Home: FunctionComponent<PersonaSelectorProps> = ({
  cacheKey,
}): ReactElement => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const teste = "home-banner2";

  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <LayoutsComponent />
    </CroctProvider>
  );
};

export default Home;
