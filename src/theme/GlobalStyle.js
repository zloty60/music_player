import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family:'Gilroy' , sans-serif;     
    background-color: #1f1937;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  img {
    max-width:100%
  }
  

`;

export default GlobalStyle;
