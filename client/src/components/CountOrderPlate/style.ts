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

  .box {
    margin-top: 1.6rem;
  }

  .box > button {
    border-radius: .5rem;
    height: 3.2rem;
  }
`;