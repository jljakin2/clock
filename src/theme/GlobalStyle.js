import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

html {
    font-size: 100%;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: ${props => props.theme.colors.white};

    position: relative;
    overflow: hidden;
}

`;

export default GlobalStyle;
