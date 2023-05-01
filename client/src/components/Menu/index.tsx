import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/auth";

export function Menu() {
  const { handleLogout } = useAuth();
  
  return (
    <Container>
      <InputSearch/>
      <button onClick={handleLogout}>Sair</button>
    </Container>
  )
}