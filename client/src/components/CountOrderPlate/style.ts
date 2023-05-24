import styled from "styled-components";

export const Container = styled.div`
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
    margin-top: 1.6rem;
    border-radius: .5rem;
    height: 3.2rem;
    display: grid;
    place-content: center;
  }
`;