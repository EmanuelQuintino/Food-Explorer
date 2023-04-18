import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6.4rem 3.2rem 3.2rem;
  
  .logo {
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  svg {
    width: 2.4rem;
  }
  
  h1 {
    font-size: 2.1rem;
  }
`;