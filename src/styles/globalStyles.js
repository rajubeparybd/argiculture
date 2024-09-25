import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset and box-sizing */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styles */
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.6;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  /* Paragraphs */
  p {
    margin: 0;
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Buttons */
  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Inputs and Textareas */
  input, textarea {
    font-family: ${({ theme }) => theme.fonts.main};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    border-radius: ${({ theme }) => theme.spacing.small}px;
    padding: ${({ theme }) => theme.spacing.small}px;
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    width: 100%;
    max-width: 100%;
  }
`;

export default GlobalStyles;
