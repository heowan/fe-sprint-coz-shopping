import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  img {
    display: block;
  }

  button {
    background-color: #fff;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li, ul {
    list-style: none;
  }

`;
