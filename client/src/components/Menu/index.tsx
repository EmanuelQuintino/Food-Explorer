import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/auth";

export function Menu() {
  const { handleLogout } = useAuth();

  function logout() {
    const isConfirmLogout = confirm('Deseja sair da aplicação?');
    if (isConfirmLogout) return handleLogout();
  }
  
  return (
    <Container>
      <InputSearch/>
      <button onClick={logout}>Sair</button>
    </Container>
  )
}