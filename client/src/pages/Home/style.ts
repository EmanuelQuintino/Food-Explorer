import styled from "styled-components"

export const Container = styled.section`
  margin-top: 3%;

  .ContainerBoxPlates {
    width: 100%;
    margin: 1.2rem auto;
    
    h2 {
      font-size: 1.8rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    .boxPlates {
      position: relative;
      width: 100%;
      margin-top: 1.2rem;
      
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
        
      .shadowPrev {
        height: 100%;
        width: 15%;
        background: ${({ theme }) => theme.colors.gradient100};
        position: absolute;
        top: 0;
      }
      
      .shadowNext {
        height: 100%;
        width: 10%;
        background: ${({ theme }) => theme.colors.gradient001};
        position: absolute;
        top: 0;
        right: 0;
      }

      .buttonPrev {
        position: absolute;
        top: 40%;
        left: 0;
      }

      .buttonNext {
        position: absolute;
        top: 40%;
        right: 0;
      }
              
      .buttonPrev svg,
      .buttonNext svg {
        width: 3.0rem;
        height: 3.0rem;
        
        path {
          fill: ${({ theme }) => theme.colors.light400};
        }
      }
        
      .buttonPrev svg:hover,
      .buttonNext svg:hover {        
        path {
          fill: ${({ theme }) => theme.colors.light100};
        }
      }
    }
  }

  @media (min-width: 640px) {
    margin-top: 5%;
        
    .ContainerBoxPlates {
      width: 85%;
      margin: 2.4rem 8.5%;
      
      h2 {
        font-size: 2.4rem;
      }
    }
  }

  @media (min-width: 960px) {    
    .ContainerBoxPlates {
      width: 80%;
    }
  }
`;