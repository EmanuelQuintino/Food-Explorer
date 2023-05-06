import styled from "styled-components";

export const Container = styled.div`
  width: 20.0rem;
  height: 29.0rem;
  padding: 1.8rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  position: relative;
  scroll-snap-align: start;

  .favoriteIcon {
    position: absolute;
    top: 2.0rem;
    right: 2.0rem;
    width: 2.4rem;
  }
  
  .imagePlate {
    width: 9.2rem;
  }

  .nameButton h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    width: 21.0rem;
  }

  .price {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.cake200};
  }

  .box {
    width: 100%;
  }

  .box > button {
    margin-top: 2.0rem;
    border-radius: .5rem;
    height: 3.2rem;
    display: grid;
    place-content: center;
  }
`;