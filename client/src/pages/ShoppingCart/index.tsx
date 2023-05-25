import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { FavoritePlate } from "../../components/FavoritePlate";
import { ImSpinner2 } from "react-icons/im";
import { useQueryUser } from "../../hooks/useQueryUser";
import { usePlateQuery } from "../../hooks/usePlateQuery";

export function ShoppingCart() {
  const { menuActive } = useSystem();
  const { data, isLoading, error } = usePlateQuery();
  const userData = useQueryUser();
  const navigate = useNavigate();

  const favoritePlateIDs = userData.data?.favorites.map((plate) => plate.plate_id);
  const favoritePlates = favoritePlateIDs?.map((favoritePlateID) => {
    return data?.find((plate) => plate.id === favoritePlateID);
  });

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Meu pedido</h2>

          {isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {error && <p className="queryError">Algo deu errado!</p>}

          <article className="plateContainer">
            {favoritePlates && favoritePlates?.length > 0 ?
              (favoritePlates?.map(plate => <FavoritePlate key={plate?.id} plate={plate} />)) :
              (<p className="messageEmptyFavorites">Lista vazia</p>)
            }
          </article>
        </>
      }
    </Container>
  )
}