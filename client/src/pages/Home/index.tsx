import { Container } from "./style"
import { Slogan } from "../../components/Slogan"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/useSystem"
import { ImSpinner2 } from "react-icons/im";
import { usePlateQuery } from "../../hooks/usePlateQuery";

export function Home() {
  const { menuActive } = useSystem();
  const { data, isLoading, error } = usePlateQuery();

  return (
    <Container>
      {!menuActive &&
        <>
          <Slogan />
          
          {isLoading && <p><ImSpinner2 className="spinner"/></p>}
          {error && <p className="queryError">Algo deu errado!</p>}

          <section className="boxPlates">
            <h2>Refeições</h2>
            <div className="plates">
              {data?.data
                .filter(plate => plate.category == "Refeições")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                    />
                  )
              })}
            </div>
          </section>

          <section className="boxPlates">
            <h2>Sobremesas</h2>
            <div className="plates">
              {data?.data
                .filter(plate => plate.category == "Sobremesas")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                    />
                  )
              })}
            </div>
          </section>

          <section className="boxPlates">
            <h2>Bebidas</h2>
            <div className="plates">
              {data?.data
                .filter(plate => plate.category == "Bebidas")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                    />
                  )
              })}
            </div>
          </section>
        </>
      }
    </Container>
  )
}