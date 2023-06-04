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

  return (
    <Container>
      {!menuActive &&
        <>
          <LogoHome />

          {plateQuery.isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {userData.isLoading && <p><ImSpinner2 className="spinner" /></p>}

          {plateQuery.error && <p className="queryError">Erro em carregar os pratos!</p>}
          {userData.error && <p className="queryError">Erro em carregar dados do usuário!</p>}

          <section className="boxPlates">
            <h2>Refeições</h2>
            <div className="plates">
              {plateQuery.data?.filter(plate => plate.category == "Refeições")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                      isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
                    />
                  )
                })}
            </div>
          </section>

          <section className="boxPlates">
            <h2>Sobremesas</h2>
            <div className="plates">
              {plateQuery.data?.filter(plate => plate.category == "Sobremesas")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                      isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
                    />
                  )
                })}
            </div>
          </section>

          <section className="boxPlates">
            <h2>Bebidas</h2>
            <div className="plates">
              {plateQuery.data?.filter(plate => plate.category == "Bebidas")
                .map(plate => {
                  return (
                    <FoodPlate
                      key={plate.id}
                      plate={plate}
                      isFavorite={userData.data?.favorites.map(plate => plate.plate_id).includes(plate.id)}
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