import styled from "styled-components"

export const Container = styled.section`
  label {
    color: ${({ theme }) => theme.colors.light400};
    line-height: 5.6rem;
  }
  
  textarea {
    width: 100%;
    height: 17.2rem;
    border-radius: .8rem;
    padding: 1.6rem;
    font-size: 1.6rem;
    resize: none;
    background: ${({theme}) => theme.colors.dark800};
  }
`;