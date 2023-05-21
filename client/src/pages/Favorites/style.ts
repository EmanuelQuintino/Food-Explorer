import styled from "styled-components"

export const Container = styled.section`
  padding: 0 3.2rem 2.8rem;

  .backPageButton {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 3.2rem;
  }

  h2 {
    margin-top: 3.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 3.2rem;
  }
  
  .plateContainer {
    margin-top: 2.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0 4.8rem;
  }

  .messageEmptyFavorites {
    color: ${({ theme }) => theme.colors.light500};
    font-weight: 700;
    font-size: 2.4rem;
    margin-top: 9.2rem;
    text-align: center;
    width: 100%;
  }
`;