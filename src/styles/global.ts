import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  html {
    font-family: 'Signika Negative', sans-serif;
    font-size: 62.5%;
  }

  body, input, button {
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }

  body html #root {
    height: 100%;
  }
`;
