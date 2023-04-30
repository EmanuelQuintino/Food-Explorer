import styled from "styled-components";

export const Container = styled.div`
  .box {
    padding: 2.4rem;
    position: relative;
    /* left: 2%; */
  }
  
  .pngegg {
    position: absolute;
    width: 19.0rem;
    height: 14.9rem;
    left: .2rem;
    bottom: 2.75rem;
  }
  
  .rectangle {
    margin-top: 3.6rem;
    width: 100%;
    height: 9.3rem;
    transform: translateX(2%);
  }

  .slogan {
    width: 50%;
    position: absolute;
    bottom: 4.8rem;
    right: 1.2rem;
  }
  
  .slogan h2 {
    color: ${({ theme }) => theme.colors.light300};
    font-size: 1.8rem;
  }
  
  .slogan p {
    color: ${({ theme }) => theme.colors.light300};
    font-size: 1.2rem;
  }
`;