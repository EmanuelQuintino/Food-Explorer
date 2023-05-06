import styled from "styled-components"

export const Container = styled.section`
  width: 32.0rem;
  margin: 1.6rem auto;

  padding: 0 2.4rem;

  .plateContainer {
    text-align: center;
  }

  .backPageButton {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .imagePlate {
    width: 21.0rem;
    margin: 1.6rem 2.6rem;
  }

  .name {
    font-family: 'Poppins', sans-serif;
    font-size: 2.0rem;
    width: 500;
  }

  .description {
    margin: 2.0rem 0;
    font-family: 'Poppins';
    font-size: 1.4rem;
    line-height: 140%;
  }

  .ingredients {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem 2.4rem;
  }

  .ingredient {
    padding: .4rem .8rem;
    background: ${({ theme }) => theme.colors.dark1000};
    border-radius: .5rem;
  }

  .box {
    margin-top: 3.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  .box > button {
    border-radius: .5rem;
    height: 3.8rem;
    font-size: 1.0rem;
  }

  .boxMinusPlus {
    font-size: 2.2rem;
    font-weight: 500;
    gap: 1.6rem;
  }

  .boxMinusPlus img {
    width: 2.0rem;
    height: 2.0rem;
  }
`;