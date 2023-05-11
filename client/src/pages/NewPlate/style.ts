import styled from "styled-components"

export const Container = styled.section`
  padding: 1.0rem 2.4rem;

  .backPageButton {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h2 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 2.8rem;
    margin: 2.4rem 0;
  }

  form {
    position: relative;
  }

  label {
    color: ${({ theme }) => theme.colors.light400};
    line-height: 5.6rem;
  }
  
  #boxIngredients {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;
    width: 100%;
    border-radius: .8rem;
    padding: .8rem;
    background: ${({theme}) => theme.colors.dark800};
  }

  .formButtons {
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }
`;