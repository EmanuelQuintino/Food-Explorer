import styled from "styled-components"

export const Container = styled.section`
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
`;