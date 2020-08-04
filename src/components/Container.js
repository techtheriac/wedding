import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import backgroundDesktop from "../../assets/bg-desktop.jpg";
import backgroundMobile from "../../assets/bg-mobile.png";

const Container = createGlobalStyle`
  ${normalize}
  html {
    font-size: calc(0.3em + 1vw);
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    height: 100vh;
    display: flex;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    justify-content: center;
    text-rendering: optimizeLegibility;

    background-image: url(${backgroundDesktop});
    background-size: cover;
    background-repeat: no-repeat
  }
`;

export default Container;
