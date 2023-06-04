import { Container } from "./style"
import { LogoHome } from "../../components/LogoHome"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/useSystem"
import { ImSpinner2 } from "react-icons/im";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { useQueryUser } from "../../hooks/useQueryUser";

export function Home() {
  const { menuActive } = useSystem();
  const plateQuery = usePlateQuery();
  const userData = useQueryUser();

  const arrayMeals = plateQuery.data?.filter(plate => plate.category == "Refeições");
  const arrayDesserts = plateQuery.data?.filter(plate => plate.category == "Sobremesas");
  const arrayDrinks = plateQuery.data?.filter(plate => plate.category == "Bebidas");

  return (
    <Container>
      {!menuActive &&
        <>
          <LogoHome />

          {plateQuery.isLoading || userData.isLoading ? <p><ImSpinner2 className="spinner" /></p> : null}
          {plateQuery.error || userData.error ? <p className="queryError">Algo deu errado!</p> : null}

          {plateQuery?.data && plateQuery.data.length === 0 ?
            <p className="messageEmptyList">Lista de pratos vazia</p> :
            <>
              <section className="boxPlates">
                {arrayMeals && arrayMeals.length > 0 &&
                  <>
                    <h2>Refeições</h2>
                    <div className="plates">
                      {arrayMeals.map(plate => {
                        return (
                          <FoodPlate
                            key={plate.id}
                            plate={plate}
                            isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
                          />
                        )
                      })}
                    </div>
                  </>
                }
              </section>

              <section className="boxPlates">
                {arrayDesserts && arrayDesserts.length > 0 &&
                  <>
                    <h2>Sobremesas</h2>
                    <div className="plates">
                      {arrayDesserts.map(plate => {
                        return (
                          <FoodPlate
                            key={plate.id}
                            plate={plate}
                            isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
                          />
                        )
                      })}
                    </div>
                  </>
                }
              </section>

              <section className="boxPlates">
                {arrayDrinks && arrayDrinks.length > 0 &&
                  <>
                    <h2>Bebidas</h2>
                    <div className="plates">
                      {arrayDrinks.map(plate => {
                        return (
                          <FoodPlate
                            key={plate.id}
                            plate={plate}
                            isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
                          />
                        )
                      })}
                    </div>
                  </>
                }
              </section>
            </>
          }
        </>
      }
    </Container>
  )
}