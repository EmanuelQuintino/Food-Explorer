import styled from "styled-components"

export const Container = styled.section`
  table {
    border-spacing: 0;
    border-radius: .8rem;
    border: .15rem solid ${({ theme }) => theme.colors.light600};
    width: 30.0rem;
    margin: 3.2rem auto;
  }

  tr {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  th {
    padding: 2.4rem;
    width: 50%;
    border-bottom: solid ${({ theme }) => theme.colors.light600};
  }

  th:first-child {
    border-right: .14rem solid ${({ theme }) => theme.colors.light600};
  }

  th:last-child {
    border-left: .13rem solid ${({ theme }) => theme.colors.light600};
  }

  td {
    padding: 2.4rem;
  }
`;