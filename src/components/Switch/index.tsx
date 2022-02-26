import React, { useState, useContext } from "react";
import Switch from "react-switch";
import styled, { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  toggleTheme(): void;
}

const SwitchComponent: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={true}
          uncheckedIcon={true}
          height={10}
          width={40}
          handleDiameter={15}
          offColor={shade(0.15, colors.primary)}
          onColor={colors.secundary}
        />
      </Container>
    </>
  );
};
export default SwitchComponent;

export const Container = styled.div`
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
