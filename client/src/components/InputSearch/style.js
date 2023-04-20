import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  
  label {
    width: 100%;
  }
  
  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    overflow: hidden;
    color: transparent;
  }

  .searchIcon {
    width: 2.4rem;
    position: absolute;
    top: 1.2rem;
    left: 1.2rem;
  }
  
  input {
    width: 100%;
    border-radius: .8rem;
    padding: 1.2rem 1.4rem 1.4rem 4.2rem;
    font-size: 1.6rem;
    background: ${({theme}) => theme.colors.dark900};
  }
`;