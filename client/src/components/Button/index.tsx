import { ButtonContainer } from "./style";

export type ButtonType = {
  name: string;
  disabled?: boolean;
}

export function Button({ name, disabled = false, ...rest }: ButtonType) {
  return (
    <ButtonContainer 
      disabled={disabled} 
      {...rest}
    >
      {name}
    </ButtonContainer>
  )
}