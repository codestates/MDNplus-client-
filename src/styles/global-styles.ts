import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
      box-sizing: border-box;
      font-family: 'DM Sans', sans-serif;    
    }

    body {
        margin: 0;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
`;

export default GlobalStyle;
