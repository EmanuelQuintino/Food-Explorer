import { Container } from "./style";
import { UseFormRegisterReturn } from 'react-hook-form';

type InputTypes = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

export function Input({label, id, type, placeholder, register, error}: InputTypes) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id}
        placeholder={placeholder}
        {...register}
      />
      {error && <span className='inputError'>{error}</span>}
   </Container>
  )
}