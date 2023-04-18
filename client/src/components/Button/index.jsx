import { ButtonContainer } from "./style";

export function Button({ name }) {
  return (
    <ButtonContainer type="button">
      {name}
    </ButtonContainer>
  )
}