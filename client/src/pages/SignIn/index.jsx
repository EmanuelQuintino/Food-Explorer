import { Container } from "./style"
import { Logo } from "../../components/Logo"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Logo/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br" 
            {...register("email", { 
              required: "Campo obrigatório",
              pattern: {value: /\S+@\S+\.\S+/, message: "Insira um email válido"}, 
              maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
            })}
          />
          {errors.email && <span className='inputError'>{errors.email.message}</span>}
        </section>

        <section>
          <label htmlFor="password">Senha</label>
          <input 
            type="password" 
            id="password"
            placeholder="No mínimo 6 caracteres" 
            {...register("password", { 
              required: "Campo obrigatório",
              maxLength: {value: 255, message: "Número máximo de caracteres é 255"},
              minLength: {value: 6, message: "No mínimo 6 caracteres"},
            })}
          />
          {errors.password && <span className='inputError'>{errors.password.message}</span>}
        </section>

        <Button name="Entrar"/>
      </form>
      
      <Link to="/signup" className="buttonSignUp">
        <button>Criar uma conta</button>
      </Link>
   </Container>
  )
}