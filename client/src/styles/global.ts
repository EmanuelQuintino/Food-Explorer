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
    background: ${({ theme }) => theme.colors.dark500};
    color: ${({ theme }) => theme.colors.light100};
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
  
  input, select, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.light300};
  } 
  
  button {
    font-family: 'Poppins', sans-serif;
    background: none;
  }

  button:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.light300};
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;    
    clip: rect(0, 0, 0, 0);
  }

  .inputError {
    color: orange;
    display: block;
    position: absolute;
    font-size: 1.0rem;
    margin-top: .4rem;
    right: 0;
  }

  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 4.2rem;
    display: block;
    margin: 25% auto 100%;
    color: lightgray;
  }

  @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
  }

  .queryError {
    color: orange;
    text-align: center;
  }
`;