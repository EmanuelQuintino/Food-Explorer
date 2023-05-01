import { Container } from "./style"
import { Header } from "../../components/Header"
import { Slogan } from "../../components/Slogan"
import { FoodPlate } from "../../components/FoodPlate"
import { Footer } from "../../components/Footer"
import { useSystem } from "../../hooks/system"

export function Home() {
  const { menuActive } = useSystem();

  return (
    <Container>
      <Header />
      {!menuActive &&
        <main>
          <Slogan />
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
      }
      <Footer />
    </Container>
  )
}