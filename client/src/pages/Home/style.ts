import styled from "styled-components"

export const Container = styled.section`
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