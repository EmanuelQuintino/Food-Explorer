import { Button } from "../../components/Button"
import { HeaderAuthentication } from "../../components/HeaderAuthentication"
import { HeaderMenu } from "../../components/HeaderMenu"
import { Container } from "./style"

export function App() {
  return (
    <Container>
      <HeaderAuthentication/>
      {/* <HeaderMenu/> */}
      <Button name={"Entrar"}/>
    </Container>
  )
}