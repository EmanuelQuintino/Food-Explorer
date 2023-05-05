import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 4.8rem;
  border-radius: .4rem;
  background: ${({theme}) => theme.colors.tomato100};
  
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  text-align: center;
  color: ${({theme}) => theme.colors.light100};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  
  &:hover {
    background: ${({theme}) => theme.colors.tomato200};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: auto;
    background: ${({theme}) => theme.colors.tomato100};
  }

  .icon {
    width: 1.8rem;
    height: 1.4rem;
  }
`;