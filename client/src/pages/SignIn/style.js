import styled from "styled-components"

export const Container = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  
  form {
    margin-top: 4.2rem;
    width: 32.0rem;
    padding: 0 1.0rem;
    display: grid;
    gap: 3.2rem;
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
  
  .error {
    color: ${({ theme }) => theme.colors.tomato300};
    display: block;
    position: absolute;
    font-size: 1.0rem;
    margin-top: .2rem;
  }

  .buttonSignUp{
    margin-top: 3.2rem;
  }
`;