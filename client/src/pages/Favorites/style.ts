import styled from "styled-components"

export const Container = styled.section`
  width: 32.0rem;
  margin: 1.6rem auto;

  padding: 0 2.4rem;

  .backPageButton {
    font-size: 1.8rem;
    font-weight: 500;
  }
  
  .plateContainer {
    text-align: center;
  }

  .imagePlate {
    width: 21.0rem;
    margin: 1.6rem 2.6rem;
  }

  .namePlate {
    font-family: 'Poppins', sans-serif;
    font-size: 2.0rem;
    width: 500;
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
    font-size: 1.2rem;
  }
`;