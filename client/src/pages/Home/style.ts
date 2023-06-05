import styled from "styled-components"

export const Container = styled.section`  
  .boxPlates {
    margin: 1.2rem 0;
  
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }
        
    .plates {
      display: flex;
      align-items: center;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
    }
    
    .plates::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 640px) {    
    .boxPlates {
      width: 85%;
      margin: 2.4rem auto;
      
      h2 {
        font-size: 2.4rem;
      }
    }
  }

  @media (min-width: 960px) {    
    .boxPlates {
      width: 77%;
    }
  }
`;