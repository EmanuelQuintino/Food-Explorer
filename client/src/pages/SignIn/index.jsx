import { Container } from "./style"
import { Logo } from "../../components/Logo"

export function SignIn() {
  
  return (
    <Container>
      <Logo/>
      <form>
        <section>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br" />
        </section>
      </form>
   </Container>
  )
}