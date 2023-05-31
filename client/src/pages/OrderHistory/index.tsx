import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";
import { CardHistoryOrderPlate } from "../../components/CardHistoryOrderPlate";

export function OrderHistory() {
  const { menuActive } = useSystem();
  const ordersQuery = useOrdersQuery();

  const navigate = useNavigate();

  console.log(ordersQuery.data);

  const favoritePlateIDs = userData.data?.favorites.map((plate) => plate.plate_id);
  const favoritePlates = favoritePlateIDs?.map((favoritePlateID) => {
    return data?.find((plate) => plate.id === favoritePlateID);
  });

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Pedidos</h2>

          {ordersQuery.isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {ordersQuery.error && <p className="queryError">Algo deu errado!</p>}

          <article className="OrdersContainer">
            {ordersQuery.data && ordersQuery.data?.length > 0 ?
              (ordersQuery.data?.map(order => {
                return (
                  <CardHistoryOrderPlate
                    key={order?.id}
                    // code={order.code}
                    code={"00004"}
                    status={order.status}
                    // date={order.created_at}
                    date={"20/05 às 18h00"}
                    plates={order.order_plates}
                  />
                );
              })) :
              (<p className="messageEmptyFavorites">Lista de pedidos vazia</p>)
            }
          </article>
        </>
      }
    </Container>
  )
}