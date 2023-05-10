import { Container } from "./style";

type InputTypes = {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

export function Input({label, id, type, placeholder}: InputTypes) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id}
        placeholder={placeholder}
      />
   </Container>
  )
}