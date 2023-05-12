import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 6.4rem;
  padding: 2.8rem;

  background: ${({ theme }) => theme.colors.dark600};

  .logoBox {
    display: flex;
    align-items: center;
    gap: .8rem;
    padding: 0 0 .4rem;
  }
  
  .logoBox svg {
    width: 1.6rem;
    fill: ${({ theme }) => theme.colors.light700};
  }

  .logoBox svg path {
    fill: ${({ theme }) => theme.colors.light700};
  }
  
  h1 {
    color: ${({ theme }) => theme.colors.light700};
    font-size: 1.4rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.light200};
    font-size: 1.0rem;
  }
`;