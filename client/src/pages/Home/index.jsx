import { ButtonBack } from "../../components/ButtonBack"
import { FoodPlate } from "../../components/FoodPlate"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Slogan } from "../../components/Slogan"
import { Container } from "./style"

export function Home() {
  return (
    <Container>
      <Header/>

      <main>
        <Slogan/>        
        <section className="boxPlates">
          <h2>Refeições</h2>
          <div className="plates">
            <FoodPlate 
              image={"food-plate-pictures/Mask group-1.png"}
              name="Salada Ravanello"
              price="49.97"
            />

            <FoodPlate 
              image={"food-plate-pictures/Mask group-1.png"}
              name="Salada Ravanello"
              price="49.97"
              />

            <FoodPlate 
              image={"food-plate-pictures/Mask group-1.png"}
              name="Salada Ravanello"
              price="49.97"
              />
          </div>
        </section>
      </main>
       
      <Footer/>
    </Container>
  )
}