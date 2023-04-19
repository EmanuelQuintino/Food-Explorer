import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    /* background: ${({ theme }) => theme.colors.dark500}; */
    color: ${({ theme }) => theme.colors.light100};
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
  
  input, select, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  } 
  
  button {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    border: none;
    background: none;
  }

  button:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;