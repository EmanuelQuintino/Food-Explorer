import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { ImSpinner2 } from "react-icons/im";
import { useOrdersQuery } from "../../hooks/useOrdersQuery";
import { CardHistoryOrderPlate } from "../../components/CardHistoryOrderPlate";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { SearchIcon } from "../../assets/SearchIcon";
import { TableRowHistoryOrders } from "../../components/TableRowHistoryOrders";

export function OrderHistory() {
  const { menuActive, windowWidth, searchOrder, setSearchOrder } = useSystem();
  const ordersQuery = useOrdersQuery();
  const plateQuery = usePlateQuery();
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchOrder(event.currentTarget.inputSearch.value);
  };

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2 className="pageTitle">Histórico de Pedidos</h2>

          <form className="inputSearchForm" onSubmit={handleSubmit}>
            <label htmlFor="inputSearch" className="srOnly">Input Search</label>
            <SearchIcon />
            <input
              type="text"
              name="inputSearch"
              id="inputSearch"
              placeholder="Buscar por código ou status"
              value={searchOrder}
              onChange={(event) => setSearchOrder(event.target.value)}
            />
          </form>

          {ordersQuery.isLoading || plateQuery.isLoading ? <p><ImSpinner2 className="spinner" /></p> : null}
          {ordersQuery.error || plateQuery.error ? <p className="queryError">Algo deu errado!</p> : null}

          <article className="OrdersContainer">
            {newOrdersDataPlateName && newOrdersDataPlateName.length === 0 ?
              <p className="messageEmptyList">Sem histórico de pedidos</p> :
              windowWidth < 680 ?
                newOrdersDataPlateName?.map(order => {
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
                    {newOrdersDataPlateName?.map(order => {
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