import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { FavoritePlate } from "../../components/FavoritePlate";
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

          <article className="plateContainer">
            <FavoritePlate name="Salada Radish" />
            <FavoritePlate name="Salada Radish" />
            <FavoritePlate name="Salada Radish" />
          </article>
        </>
      }
    </Container>
  )
}