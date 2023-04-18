import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: .4rem;
  padding: 1.2rem 3.2rem;
  background: ${({theme}) => theme.colors.tomato100};
  
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  color: ${({theme}) => theme.colors.light100};
  
  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.colors.tomato200};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: auto;
    background: ${({theme}) => theme.colors.tomato100};
  }
`;