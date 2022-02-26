import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;
      background: string;
      text: string;
      search: string;
    };
  }
}
