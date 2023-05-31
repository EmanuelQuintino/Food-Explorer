import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";

export function OrderHistory() {
  const { menuActive } = useSystem();
  const ordersQuery = useOrdersQuery();

  const navigate = useNavigate();

  console.log(ordersQuery.data);

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Pedidos</h2>

          {ordersQuery.isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {ordersQuery.error && <p className="queryError">Algo deu errado!</p>}

          <article className="platesContainer">
            {ordersQuery.data && ordersQuery.data?.length > 0 ?
              (ordersQuery.data?.map(order => <CardHistoryOrderPlate key={order?.id} plate={order} />)) :
              (<p className="messageEmptyFavorites">Lista de pedidos vazia</p>)
            }
          </article>
        </>
      }
    </Container>
  )
}