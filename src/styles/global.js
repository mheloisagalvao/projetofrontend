import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: ${(props) => props.theme.colors.link}
  }
  a.hover {
    text-decoration: underline;
  }

  body, input, p, a, button {
    /* color: ${(props) => props.theme.colors.text}; */
    font-size: ${(props) => props.theme.fontSizes.normal};
    font-family: ${(props) => props.theme.fonts};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.small};
  }

  button {
    cursor: pointer;
  }

  ul, li, ol {
    list-style: none;
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.champagne};
  }
`;