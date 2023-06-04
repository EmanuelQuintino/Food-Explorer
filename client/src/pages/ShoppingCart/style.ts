import styled from "styled-components"

export const Container = styled.section`
  padding: 0 3.2rem 2.8rem;
  
  .orderContainer h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
    margin-top: 3.2rem;
  }
  
  .platesContainer {
    margin-top: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0 4.8rem;
  }

  .titlePayment {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
    
    h2 {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 2.8rem;
    }
  }
  
  .orderTotalPrice {
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.light300};
  }

  .paymentContainer table {
    margin-top: 3.6rem;
  }

  .titleH2Empty {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
    margin-top: 3.2rem;
  }
  
  .messageEmpty {
    color: ${({ theme }) => theme.colors.light500};
    font-weight: 700;
    font-size: 2.0rem;
    margin-top: 12.0rem;
    text-align: center;
    width: 100%;
  }
  
  @media (min-width: 640px) {
    .orderPaymentContainer {
      display: flex;
      align-items: first baseline;
    }

    .orderContainer {
      width: 54.0rem;
    }
  }
`;  