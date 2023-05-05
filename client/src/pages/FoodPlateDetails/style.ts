import styled from "styled-components"

export const Container = styled.section`
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
  
  .boxPlates {
    margin: 2.4rem 0;
  }

  .boxPlates h2 {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin: 0 0 0 2.4rem;
  }

  .plates {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .plates::-webkit-scrollbar {
    display: none;
}
`;