import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;  
}

body {
    display: flex;
    justify-content: center;
    max-width: 100vw;
    background-color: var(--bg-body);

    @media only screen and (max-width: 600px) {
    height: auto;
  }
}

:root {
--bg-blue: #0F52BA;
--bg-body: #F9F9F9;
--bg-footer: #EEEEEE;
--bg-dark-gray: #373737;
--title-white: #FFFFFF;
--text-gray: #2C2C2C;
--border-gray: #bfbfbf;
}
`;

export default GlobalStyle;
