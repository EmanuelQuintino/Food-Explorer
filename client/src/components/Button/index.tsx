import { ButtonContainer } from "./style";

export type TButton = {
  name: string;
  disabled?: boolean;
}

export function Button({ name, disabled = false, ...rest }: TButton) {
  return (
    <ButtonContainer 
      disabled={disabled} 
      {...rest}
    >
      {name}
    </ButtonContainer>
  )
}