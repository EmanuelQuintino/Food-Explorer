import styled from "styled-components"

export const Container = styled.section`  
  .ContainerBoxPlates {
    margin: 1.2rem 0;
    
    .boxPlates {
      position: relative;
      width: 100%;
      
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
      
      .shadowBox {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 0;
        
        .shadowPrev {
          height: 100%;
          width: 10%;
          background: ${({ theme }) => theme.colors.gradient100};
        }
        
        .shadowNext {
          height: 100%;
          width: 10%;
          background: ${({ theme }) => theme.colors.gradient001};
        }
      }
      
      .boxButtonCarousel {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        top: 40%;
        
        svg {
          width: 3.0rem;
          height: 3.0rem;
          
          path {
            fill: ${({ theme }) => theme.colors.light400};
          }
        }
      }
        
      svg:hover {        
        path {
          fill: ${({ theme }) => theme.colors.light100};
        }
      }
    }
  }

  @media (min-width: 640px) {    
    .ContainerBoxPlates {
      width: 85%;
      margin: 2.4rem auto;
      
      h2 {
        font-size: 2.4rem;
      }
    }
  }

  @media (min-width: 960px) {    
    .ContainerBoxPlates {
      width: 77%;
    }
  }
`;