import styled from "styled-components";

type SectionTypes = {
  isNew: boolean;
}

export const Container = styled.section<SectionTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: .8rem;
  border-radius: .8rem;
  border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.colors.light600}`: "none"};
  background: ${({theme, isNew}) => isNew ? "transparent" : theme.colors.light600};
  
  input {
    width: 12.0rem;
    background: transparent;
    border: none;
    padding: .8rem 1.6rem;
    color: ${({theme, isNew}) => isNew ? theme.colors.light500: theme.colors.light100};

    border-radius: .8rem;
    font-size: 1.6rem;

    &::placeholder {
      color: ${({theme, isNew}) => isNew ? theme.colors.light500: theme.colors.light100};
    }
  }
  
  button {
    border: none;
    background: none;
    color: ${({theme, isNew}) => isNew ? theme.colors.light500: theme.colors.light100};
  }
`;