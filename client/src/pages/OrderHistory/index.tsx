import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";
import { CardHistoryOrderPlate } from "../../components/CardHistoryOrderPlate";
import { usePlateQuery } from "../../hooks/usePlateQuery";

export function OrderHistory() {
  const { menuActive } = useSystem();
  const ordersQuery = useOrdersQuery();
  const plateQuery = usePlateQuery();

  const navigate = useNavigate();

  const newOrdersData = ordersQuery.data?.map(order => {
    return {
      ...order,
      order_plates: order.order_plates.map(orderPlate => {
        const plate = plateQuery.data?.find(plate => plate.id === orderPlate.plate_id);
        const name = plate?.name;
        return { ...orderPlate, name };
      })
    };
  });

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Histórico de Pedidos</h2>

          {ordersQuery.error && <p className="queryError">Algo deu errado!</p>}
          {ordersQuery.isLoading && <p><ImSpinner2 className="spinner" /></p>}

          <article className="OrdersContainer">
            {ordersQuery.data && ordersQuery.data.length > 0 ?
              (newOrdersData?.map(order => {
                return (
                  <CardHistoryOrderPlate
                    key={order.id}
                    code={order.code}
                    status={order.status}
                    date={order.created_at}
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