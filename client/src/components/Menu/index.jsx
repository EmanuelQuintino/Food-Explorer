import { Container } from "./style";
import { InputSearch } from "../InputSearch";

export function Menu() {
  return (
    <Container>
      <InputSearch/>
      <button>Sair</button>
    </Container>
  )
}