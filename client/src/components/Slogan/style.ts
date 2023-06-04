import styled from "styled-components";

export const Container = styled.div`
  .box {
    margin-top: 3.6rem;
    padding: 2.4rem;
    position: relative;
  }
  
  .rectangle {
    width: 100%;
    height: 9.3rem;
    transform: translateX(2%);
  }

  .pngegg {
    position: absolute;
    width: 19.0rem;
    height: 14.9rem;
    left: .2rem;
    bottom: 2.75rem;
  }
  
  .slogan {
    width: 50%;
    position: absolute;
    bottom: 4.8rem;
    right: 1.2rem;
    
    h2 {
      color: ${({ theme }) => theme.colors.light300};
      font-size: 1.8rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.light300};
      font-size: 1.2rem;
    }
  }

  @media (min-width: 640px) {
    .box {
      margin-top: 10.0rem;
      padding: 2.4rem;
      position: relative;
    }
    
    .rectangle {
      width: 100%;
      height: auto;
      transform: translateX(0%);
    }

    .pngegg {
      width: 45%;
      height: auto;
    }
    
    .slogan {
      width: auto;
      top: 35%;
      left: 50%;
      
      h2 {
        font-size: 3.6rem;
      }
      
      p {
        font-size: 1.4rem;
      }
    }
  }

  @media (min-width: 810px) {    
    .slogan {
      h2 {
        font-size: 4.2rem;
      }
      
      p {
        font-size: 1.6rem;
      }
    }
  }
`;