import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";
import { CardHistoryOrderPlate } from "../../components/CardHistoryOrderPlate";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { SearchIcon } from "../../assets/SearchIcon";
import { useState } from "react";
import { TableRowHistoryOrders } from "../../components/TableRowHistoryOrders";

export function OrderHistory() {
  const { menuActive, windowWidth } = useSystem();
  const ordersQuery = useOrdersQuery();
  const plateQuery = usePlateQuery();
  const [searchOrders, setSearchOrders] = useState("");
  const navigate = useNavigate();

  const newOrdersDataPlateName = ordersQuery.data?.map(order => {
    return {
      ...order,
      order_plates: order.order_plates.map(orderPlate => {
        const plate = plateQuery.data?.find(plate => plate.id === orderPlate.plate_id);
        return { ...orderPlate, name: plate?.name };
      })
    };
  });

  const filterOrders = newOrdersDataPlateName?.filter((order) => {
    return (
      String(order.code).toLowerCase().includes(searchOrders.toLowerCase()) ||
      order.status.toLowerCase().includes(searchOrders.toLowerCase())
    );
  });

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Histórico de Pedidos</h2>

          <form className="inputSearchForm" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="inputSearch" className="srOnly">Input Search</label>
            <SearchIcon />
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              placeholder="Buscar por código ou status"
              onChange={(event) => setSearchOrders(event.target.value)}
            />
          </form>

          {ordersQuery.error && <p className="queryError">Algo deu errado!</p>}
          {ordersQuery.isLoading && <p><ImSpinner2 className="spinner" /></p>}

          <article className="OrdersContainer">
            {ordersQuery.data && ordersQuery.data.length == 0 ?
              <p className="messageEmpty">Sem histórico de pedidos</p> :
              windowWidth < 680 ?
                filterOrders?.map(order => {
                  return (
                    <CardHistoryOrderPlate
                      key={order.id}
                      id={order.id}
                      code={order.code}
                      status={order.status}
                      date={order.created_at}
                      plates={order.order_plates}
                    />
                  );
                }) :
                <table className="tableOrderPlates">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Código</th>
                      <th>Detalhamento</th>
                      <th>Data e hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterOrders?.map(order => {
                      return (
                        <TableRowHistoryOrders
                          key={order.id}
                          id={order.id}
                          code={order.code}
                          status={order.status}
                          date={order.created_at}
                          plates={order.order_plates}
                        />
                      );
                    })}
                  </tbody>
                </table>
            }
          </article>
        </>
      }
    </Container>
  )
}