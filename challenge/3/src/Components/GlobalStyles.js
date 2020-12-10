import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset}
  #title {
    font-size: 30px;
    font-weight: bold;
  }
  * {
    /* box-sizing: border-box; */
    color: black;
  }
  body { 
    padding: 40px 30px;
  }
`;

export default globalStyles;
