import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { OrderPlate } from "../../components/OrderPlate";
import { usePlateQuery } from "../../hooks/usePlateQuery";
import { ImSpinner2 } from "react-icons/im";

type PlateTypes = {
  id: string;
  amount: number;
};

type UserOrderTypes = {
  id: string;
  plates: PlateTypes[];
};

export function ShoppingCart() {
  const [userOrder, setUserOrder] = useState<UserOrderTypes>({} as UserOrderTypes);
  const { data, isLoading, error } = usePlateQuery();
  const { menuActive } = useSystem();
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageUserOrder = localStorage.getItem("@FoodExplorer:order");
    if (localStorageUserOrder) setUserOrder(JSON.parse(localStorageUserOrder));
  }, [])

  const newArrayUserOrder = userOrder.plates?.map((plateOrder) => {
    const matchPlate = data?.find((plateData) => plateData.id === plateOrder.id);
    return {
      ...plateOrder,
      name: matchPlate?.name,
      image: matchPlate?.image,
      price: matchPlate?.price
    };
  });

  console.log(newArrayUserOrder);
  

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Meu pedido</h2>

          {isLoading && <p><ImSpinner2 className="spinner" /></p>}
          {error && <p className="queryError">Algo deu errado!</p>}

          <article className="plateContainer">
            {newArrayUserOrder && userOrder.plates?.length > 0 ?
              (newArrayUserOrder.map(orderPlate => {
                return (
                  <OrderPlate key={orderPlate?.id} orderPlate={orderPlate} />
                )
              })) :
              (<p className="messageEmptyFavorites">Lista vazia</p>)
            }
          </article>

          <p>
            Total: {newArrayUserOrder &&
              newArrayUserOrder.map((plate) => plate.amount * Number(plate.price))
                .reduce((a: number, b: number) => a + b)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }
          </p>
        </>
      }
    </Container>
  )
}