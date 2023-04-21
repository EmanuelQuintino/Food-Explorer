import { Container } from "./style"
import { Logo } from "../../components/Logo"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button";

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Logo/>
      <form onSubmit={handleSubmit(onSubmit)}>
      <section>
          <label htmlFor="name">Nome</label>
          <input 
            type="text" 
            id="name"
            placeholder="Exemplo: Maria da Silva" 
            {...register("name", { 
              required: "Campo obrigatório",
              pattern: {value: /[A-Za-z]/, message: "Somente texto é permitido"},
              maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
            })}
          />
          {errors.name && <span className='error'>{errors.name.message}</span>}
        </section>

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
          {errors.email && <span className='error'>{errors.email.message}</span>}
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
          {errors.password && <span className='error'>{errors.password.message}</span>}
        </section>

        <Button name="Entrar"/>
      </form>
      <button className="buttonSignUp">Já tenho uma conta</button>
   </Container>
  )
}