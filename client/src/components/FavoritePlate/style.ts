import styled from "styled-components"

export const Container = styled.section`  
  width: 28.0rem;
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .imagePlate {
    width: 8.0rem;
  }

  .namePlate {
    font-family: 'Poppins', sans-serif;
    font-size: 1.8rem;
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