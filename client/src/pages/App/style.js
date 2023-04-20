import styled from "styled-components"

export const Container = styled.section`
.plates {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  .plates::-webkit-scrollbar {
    display: none;
}
`;