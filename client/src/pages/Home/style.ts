import styled from "styled-components"

export const Container = styled.section`  
  .boxPlates {
    margin: 2.4rem 0;
  
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
      margin: 0 0 0 2.4rem;
    }
        
    .plates {
      width: 100%;
      display: flex;
      align-items: center;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      margin-top: .8rem;
    }
    
    .plates::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 640px) {    
    .boxPlates {
      h2 {
        font-size: 2.4rem;
      }
    }
  }
`;