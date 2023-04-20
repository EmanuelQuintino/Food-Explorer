import { ButtonContainer } from "./style";

export function ButtonBack({ name, disabled = false, ...rest }) {
  return (
    <ButtonContainer 
      type="button" 
      disabled={disabled} 
      {...rest}
    >
     &lt; voltar
    </ButtonContainer>
  )
}