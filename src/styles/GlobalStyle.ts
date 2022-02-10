import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    transition:0.3s;
    /* background:red; */
}

body {
   font-size:10px; 
}
`;

export default GlobalStyle;
