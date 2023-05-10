import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  
  form {
    margin-top: 4.2rem;
    width: 30.0rem;
    display: grid;
    gap: 3.2rem;
    position: relative;
  }
  
  label {
    margin-top: 13.2rem;
    color: ${({ theme }) => theme.colors.light400};
    line-height: 3.2rem;
  }
  
  input {
    width: 100%;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;
    font-size: 1.6rem;
    background: ${({theme}) => theme.colors.dark900};
  }

  .buttonSignUp{
    margin-top: 3.2rem;
    font-size: 1.4rem;
    text-align: center;
  }
`;