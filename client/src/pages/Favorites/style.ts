import styled from "styled-components"

export const Container = styled.section`
  margin: 1.6rem auto;

  padding: 0 2.4rem;

  .backPageButton {
    font-size: 1.8rem;
    font-weight: 500;
  }

  h2 {
    margin-top: 2.8rem;
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.2rem;
  }
  
  .plateContainer {
    width: 26.0rem;
    margin-top: 2.8rem;
    padding: 1.6rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  .imagePlate {
    width: 9.2rem;
  }

  .box {
    /* width: 100%; */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* gap: 1.6rem; */

  }

  .namePlate {
    font-family: 'Poppins', sans-serif;
    font-size: 2.0rem;
    font-weight: 500;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.colors.light300};
  }

  .box > button {
    font-size: 1.2rem;
    font-family: 'Roboto';
    color: ${({ theme }) => theme.colors.tomato400};
  }
`;