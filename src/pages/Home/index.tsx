import { CroctProvider } from "@croct/plug-react";
import React, { FunctionComponent, ReactElement } from "react";
import LayoutsComponent from "../../components/Layout";

type PersonaSelectorProps = {
  cacheKey?: string;
};

const Home: FunctionComponent<PersonaSelectorProps> = ({
  cacheKey,
}): ReactElement => {
  return (
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <LayoutsComponent />
    </CroctProvider>
  );
};

export default Home;
