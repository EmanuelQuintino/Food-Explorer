import { Container } from "./style"
import { Logo } from "../../components/Logo"
import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

type FormDataType = {
  name: string
  email: string;
  password: string;
}

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
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
              pattern: {value: /^[^0-9]+$/, message: "Somente texto é permitido"},
              maxLength: {value: 255, message: "Número máximo de caracteres é 255"}
            })}
          />
          {errors.name && <span className='inputError'>{errors.name.message}</span>}
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

        <Button name="Criar conta"/>
      </form>
      
      <Link to="/" className="buttonSignIn">
        <button>Já tenho uma conta</button>
      </Link>  
   </Container>
  )
}