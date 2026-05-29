import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  body {
    min-width: 320px;
    font-family: 'Montserrat', Arial, sans-serif;
    background: #F4F5F6;
    color: #000000;
    font-weight: 400;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
  }

  input,
  textarea {
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: #000000;
  }

  input::placeholder,
  textarea::placeholder {
    color: #999999;
  }

  a {
    color: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 1000px #ffffff inset !important;
    -webkit-text-fill-color: #000000 !important;
    transition: background-color 9999s ease-out, color 9999s ease-out;
  }
`;
