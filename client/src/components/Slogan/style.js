import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  .box {
    padding: 2.4rem;
    position: relative;
    left: 52%;
    transform: translateX(-50%);
  }

  .pngegg {
    position: absolute;
    width: 19.0rem;
    height: auto;
    left: -.2rem;
    top: -.5rem;
  }

  .rectangle {
    position: absolute;
    width: 32.0rem;
    height: 9.3rem;
  }
`;