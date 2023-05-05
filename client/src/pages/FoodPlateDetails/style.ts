import styled from "styled-components"

export const Container = styled.section`
  width: 32.0rem;
  margin: 1.6rem auto;

  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 7.2rem;
    display: block;
    margin: 25% auto 100%;
    color: lightgray;
  }

  @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
  }

  .plateContainer {
    text-align: center;
  }

  .backPageButton {
    font-size: 2.0rem;
    font-weight: 500;
  }

  .imagePlate {
    width: 22.0rem;
    margin: 1.6rem 2.6rem;
  }

  .name {
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    width: 500;
  }

  .description {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16.224.7rem;
    line-height: 140%;
    margin: 2.4rem 0;
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
    width: 100%;
  }

  .boxMinusPlus {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
  }

  .boxMinusPlus button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box > button {
   margin-top: 2.0rem;
   border-radius: .5rem;
   height: 3.2rem;
   display: grid;
   place-content: center;
  }
`;