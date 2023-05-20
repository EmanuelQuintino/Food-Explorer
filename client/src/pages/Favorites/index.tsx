import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
// import { ImSpinner2 } from "react-icons/im";
// import { API } from "../../services/api";

export function Favorites() {
  const { menuActive } = useSystem();
  // const { data, isLoading, error } = useFavoritesQuery();

  const navigate = useNavigate();

  // const imageURL = `${API.defaults.baseURL}/images/${plate?.image}`;

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Meus Favoritos</h2>

          {/* {isLoading && <p><ImSpinner2 className="spinner" /></p>} */}
          {/* {error && <p className="queryError">Algo deu errado!</p>} */}

          <section className="plateContainer">
            {/* <img src={imageURL} alt="image-plate" className="imagePlate" /> */}
            <img src={"images/salada-molla.png"} alt="image-plate" className="imagePlate" />
            <div className="box">
              <h3 className="namePlate">{"Salada Radish"}</h3>
              <button className="removeFavoriteButton">remover dos favoritos</button>
            </div>  
          </section>

          <section className="plateContainer">
            {/* <img src={imageURL} alt="image-plate" className="imagePlate" /> */}
            <img src={"images/salada-molla.png"} alt="image-plate" className="imagePlate" />
            <div className="box">
              <h3 className="namePlate">{"Salada Radish"}</h3>
              <button className="removeFavoriteButton">remover dos favoritos</button>
            </div>  
          </section>

          <section className="plateContainer">
            {/* <img src={imageURL} alt="image-plate" className="imagePlate" /> */}
            <img src={"images/salada-molla.png"} alt="image-plate" className="imagePlate" />
            <div className="box">
              <h3 className="namePlate">{"Salada Radish"}</h3>
              <button className="removeFavoriteButton">remover dos favoritos</button>
            </div>  
          </section>
        </>
      }
    </Container>
  )
}