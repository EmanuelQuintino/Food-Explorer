import { Container } from "./style";
import logoExplorer from "../../assets/logoExplorer.svg"

export function Logo() {
  return (
    <Container>
      <img src={logoExplorer} alt="Logo-Explorer" />
      <h1>food explorer</h1>
    </Container>
  )
}