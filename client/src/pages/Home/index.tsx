import { Container } from "./style"
import { Slogan } from "../../components/Slogan"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/system"

export function Home() {
  const { menuActive } = useSystem();
  return (
    <Container>
      {!menuActive &&
        <>
          <Slogan />
          <section className="boxPlates">
            <h2>Refeições</h2>
            <div className="plates">
              <FoodPlate
                image={"food-plate-pictures/torradas-de-parma.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/torradas-de-parma.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/torradas-de-parma.png"}
                name="Salada Ravanello"
                price="49.97"
              />
            </div>
          </section>
        </>
      }
    </Container>
  )
}