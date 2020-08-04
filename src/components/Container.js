import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import backgroundDesktop from "../../assets/bg-desktop.jpg";
import backgroundMobile from "../../assets/bg-mobile.png";

const Container = createGlobalStyle`
  ${normalize}
  html {
    font-size: calc(0.5em + 1vw);
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

  @media (max-width: 768px) {
    body {
      background-image: url(${backgroundMobile});
    }
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px)
  and (-webkit-min-device-pixel-ratio: 3) { 

    body{
    background-image: url(${backgroundMobile});
    }
}


`;

export default Container;
