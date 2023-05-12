import { Container } from "./style";
import { UseFormRegisterReturn } from 'react-hook-form';
import { FiPlus, FiX } from "react-icons/fi"

type InputTypes = {
  value?: string;
  placeholder?: string;
  isNew?: boolean;
  register: UseFormRegisterReturn;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export function InputList({ value, isNew=false, register, onClick, ...rest }: InputTypes) {
  function handleAddItem(event) {
    if (event.key == "Enter") {
      onClick();
    }
  }
  
  return (
    <Container isNew={isNew}>      
      <input 
        type={"text"}
        value={value}
        readOnly={!isNew}
        onKeyDown={handleAddItem}
        {...register}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
   </Container>
  )
}