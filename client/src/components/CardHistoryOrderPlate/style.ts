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

    .status {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
    }

    .statusIcon {
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      display: inline-block;
    }
    
    .Pendente {
      background: ${({ theme }) => theme.colors.tomato300};
    }

    .Preparando {
      background: ${({ theme }) => theme.colors.carrot100};
    }

    .Entregue {
      background: ${({ theme }) => theme.colors.mint100};
    }

    .bodyCard {
      margin-top: 1.6rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.light400};
      line-height: 160%;
    }
`;