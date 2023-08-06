import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    background-color: white;
  }
    body {
      margin: 0;
      padding: 0;
      text-decoration: none;
      font-family: 'ABeeZee', sans-serif;
    }
    h4 {
      color: black;
    }
    p{
      color: black;
    }
    a {
    text-decoration: none;
    color: black;
    }
    a:visited {
    color: black;
    }
    a:hover{
      text-decoration: underline;
    }
    li {
    list-style: none;
    }
`;
