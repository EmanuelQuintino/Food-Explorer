import { ButtonContainer } from "./style";

export function Button({ name, disabled = false, ...rest }) {
  return (
    <ButtonContainer 
      disabled={disabled} 
      {...rest}
    >
      {name}
    </ButtonContainer>
  )
}