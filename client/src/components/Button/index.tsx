import { ButtonContainer } from "./style";

export type ButtonType = {
  icon?: string;
  name: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ icon, name, disabled = false, ...rest }: ButtonType) {
  return (
    <ButtonContainer 
      disabled={disabled} 
      {...rest}
    > 
      {icon && <img src={icon} className="icon" alt="order-icon" />}
      {name}
    </ButtonContainer>
  )
}