import styled from "styled-components";

export const Container = styled.section`
  label {
    width: 100%;
  }
  
  input {
    width: 100%;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.light500};
    background: ${({theme}) => theme.colors.dark900};
  }
`;