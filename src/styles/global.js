import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    margin: 0;
    font-family: Roboto, sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, input, button {
    font-family: Roboto, sans-serif;
  }
`;