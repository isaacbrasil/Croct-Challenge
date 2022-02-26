import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: ${(props) => props.theme.colors.background} ;
    font-size: 14px;
    color: #333;
    font-family: 'Space Mono', monospace;
}
input{
    font-family: 'Space Mono', monospace;
    color: ${(props) => props.theme.colors.terciary};

}
`;
