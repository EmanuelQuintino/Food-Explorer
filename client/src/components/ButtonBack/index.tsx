import { ButtonContainer } from "./style";
import { TButton } from "../Button";

export function ButtonBack({ name, disabled = false, ...rest }: TButton) {
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