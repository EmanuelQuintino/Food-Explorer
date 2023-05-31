import styled from "styled-components"

export const Container = styled.div`  
    width: 100%;
    padding: 1.6rem 2.4rem;
    border: .2rem solid ${({ theme }) => theme.colors.dark1000};
    border-radius: .8rem;
    
    .headerCard {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.light400};
    }

    .bodyCard {
      margin-top: 1.6rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.light400};
    }
`;