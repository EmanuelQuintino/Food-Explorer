import { Container } from "./style"
import { Slogan } from "../../components/Slogan"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/system"
import { API } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import { ImSpinner2 } from "react-icons/im";

export function Home() {
  const { menuActive } = useSystem();

  type FoodPlates = {
    data: {
      id: string;
      name: string;
      price: string;
      image: string;
    }[];
  }

  const fetchFoodPlates = async() => await API.get('/plates');
  const { data, isLoading, error } = useQuery<FoodPlates>(['myQueryKey'], fetchFoodPlates);  

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
              {data?.data.map(plate => {
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
              <FoodPlate
                image={"food-plate-pictures/peachy-pastrie.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/peachy-pastrie.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/peachy-pastrie.png"}
                name="Salada Ravanello"
                price="49.97"
              />
            </div>
          </section>

          <section className="boxPlates">
            <h2>Bebidas</h2>
            <div className="plates">
              <FoodPlate
                image={"food-plate-pictures/cocktail-de-maca.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/cocktail-de-maca.png"}
                name="Salada Ravanello"
                price="49.97"
              />

              <FoodPlate
                image={"food-plate-pictures/cocktail-de-maca.png"}
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