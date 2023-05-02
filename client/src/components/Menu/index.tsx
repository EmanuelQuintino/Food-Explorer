import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/auth";
import { useSystem } from "../../hooks/system";

export function Menu() {
  const { handleLogout } = useAuth();
  const { toggleMenu } = useSystem();

  function logout() {
    const isConfirmLogout = confirm('Deseja sair da aplicação?');
    if (isConfirmLogout) {
      handleLogout()
      toggleMenu();
    };
  }
  
  return (
    <Container>
      <InputSearch/>
      <button onClick={logout}>Sair</button>
    </Container>
  )
}