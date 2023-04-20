import { Button } from "../../components/Button"
import { FoodPlate } from "../../components/FoodPlate"
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
      
      <FoodPlate 
        image={"food-plate-pictures/Mask group-1.png"}
        name="Salada Ravanello"
        price="49.97"
      />
      
      <Button name={"Entrar"}/>
 
      <Footer/>
    </Container>
  )
}