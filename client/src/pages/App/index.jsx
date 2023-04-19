import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { HeaderAuthentication } from "../../components/HeaderAuthentication"
import { Navbar } from "../../components/Navbar"
import { Slogan } from "../../components/Slogan"
import { Container } from "./style"

export function App() {
  return (
    <Container>
      {/* <HeaderAuthentication/> */}
      <Navbar/>
      <Slogan/>
      <Button name={"Entrar"}/>
      <Footer/>
    </Container>
  )
}