import { Container } from "./style"
import { LogoHome } from "../../components/LogoHome"
import { FoodPlate } from "../../components/FoodPlate"
import { useSystem } from "../../hooks/useSystem"
import { ImSpinner2 } from "react-icons/im";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { useQueryUser } from "../../hooks/useQueryUser";
import { useRef } from "react";
import { NextIcon } from "../../assets/nextIcon";
import { PreviousIcon } from "../../assets/PreviousIcon";

export function Home() {
  const { menuActive, foodPlateWidth } = useSystem();
  const plateQuery = usePlateQuery();
  const userData = useQueryUser();

  const carouselMeals: React.RefObject<HTMLDivElement> = useRef(null);
  const carouselDesserts: React.RefObject<HTMLDivElement> = useRef(null);
  const carouselDrinks: React.RefObject<HTMLDivElement> = useRef(null);

  const arrayMeals = plateQuery.data?.filter(plate => plate.category == "Refeições");
  const arrayDesserts = plateQuery.data?.filter(plate => plate.category == "Sobremesas");
  const arrayDrinks = plateQuery.data?.filter(plate => plate.category == "Bebidas");

  function handlePrevCarouselMeals(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselMeals.current) carouselMeals.current.scrollLeft -= foodPlateWidth;
  };

  function handleNextCarouselMeals(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselMeals.current) carouselMeals.current.scrollLeft += foodPlateWidth;
  };

  function handlePrevCarouselDesserts(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselDesserts.current) carouselDesserts.current.scrollLeft -= foodPlateWidth;
  };

  function handleNextCarouselDesserts(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselDesserts.current) carouselDesserts.current.scrollLeft += foodPlateWidth;
  };

  function handlePrevCarouselDrinks(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselDrinks.current) carouselDrinks.current.scrollLeft -= foodPlateWidth;
  };

  function handleNextCarouselDrinks(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (carouselDrinks.current) carouselDrinks.current.scrollLeft += foodPlateWidth;
  };

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
                    <div className="plates" ref={carouselMeals}>
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

                    <div className="shadowBox">
                      <div className="shadowPrev"></div>
                      <div className="shadowNext"></div>
                    </div>

                    <div className="boxButtonCarousel">
                      <button onClick={handlePrevCarouselMeals}>
                        <PreviousIcon />
                      </button>
                      <button onClick={handleNextCarouselMeals}>
                        <NextIcon />
                      </button>
                    </div>
                    
                  </>
                }
              </section>

              <section className="boxPlates">
                {arrayDesserts && arrayDesserts.length > 0 &&
                  <>
                    <h2>Sobremesas</h2>
                    <div className="plates" ref={carouselDesserts}>
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
                    <button onClick={handlePrevCarouselDesserts}>Prev</button>
                    <button onClick={handleNextCarouselDesserts}>Next</button>
                  </>
                }
              </section>

              <section className="boxPlates">
                {arrayDrinks && arrayDrinks.length > 0 &&
                  <>
                    <h2>Bebidas</h2>
                    <div className="plates" ref={carouselDrinks}>
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
                    <button onClick={handlePrevCarouselDrinks}>Prev</button>
                    <button onClick={handleNextCarouselDrinks}>Next</button>
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