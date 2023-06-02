import styled from "styled-components";

type ContainerProps = {
  isAdmin: boolean;
};

export const Container = styled.tr<ContainerProps>`  
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.light400};

  td {
    padding: 1.6rem 2.4rem;
  }

  td:first-child {
    padding: ${({ isAdmin }) => isAdmin ? 0 : ""};
    width: 16.0rem;
  }

  td:last-child {
    width: 16.0rem;
  }
  
  .status {
    display: flex;
    align-items: center;
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
`;