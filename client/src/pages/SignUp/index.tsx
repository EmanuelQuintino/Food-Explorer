import { Container } from "./style"
import { Logo } from "../../components/Logo"
import { useForm } from "react-hook-form"
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../services/api";

type UserDataType = {
  name: string
  email: string;
  password: string;
}

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserDataType>();
  const navigate = useNavigate();

  const createUser = ({ name, email, password }: UserDataType) => {
    if (!name || !email || !password) return alert("Por favor preencha todos os campos");
    
    API.post("/users", {name, email, password})
    .then((res) => {
      alert(res.data);
      navigate('/');
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        alert("Erro ao cadastrar")
      };
    });
  }

  return (
    <Container>
      <Logo/>
      <form onSubmit={handleSubmit(createUser)}>
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