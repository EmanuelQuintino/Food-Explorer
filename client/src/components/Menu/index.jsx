import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { Button } from "../Button";

export function Menu() {
  return (
    <Container>
      <InputSearch/>
      <button>Sair</button>
    </Container>
  )
}