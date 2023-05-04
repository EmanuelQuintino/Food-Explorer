import { Container } from "./style"
import { Slogan } from "../../components/Slogan"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/system"
import { ImSpinner2 } from "react-icons/im";
import { useFetchFoodPlates } from "../../hooks/fetchFoodPlates";

export function Home() {
  const { menuActive } = useSystem();
  const { data, isLoading, error } = useFetchFoodPlates("/plates");

  return (
    <Container>
      {!menuActive &&
        <>
          <Slogan />
          
          {isLoading && <p><ImSpinner2 className="spinner"/></p>}
          {error && <p>Algo deu errado!</p>}
          {console.log(data)}

          <section className="boxPlates">
            <h2>Refeições</h2>
            <div className="plates">
              {data?.data
                .filter(plate => plate.category == "Refeições")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      image={plate.image}
                      name={plate.name}
                      price={plate.price}
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
                      image={plate.image}
                      name={plate.name}
                      price={plate.price}
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
                      image={plate.image}
                      name={plate.name}
                      price={plate.price}
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