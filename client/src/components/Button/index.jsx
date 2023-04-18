import { ButtonContainer } from "./style";

export function Button({ name, disabled = false, ...rest }) {
  return (
    <ButtonContainer 
      type="button" 
      disabled={disabled} 
      {...rest}
    >
      {name}
    </ButtonContainer>
  )
}