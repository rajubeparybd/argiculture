import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, textarea {
    font-family: 'Roboto', sans-serif;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    max-width: 100%;
  }
`;

export default GlobalStyles;
