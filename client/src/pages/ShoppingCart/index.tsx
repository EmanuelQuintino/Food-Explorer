import { Container } from "./style"
import { useSystem } from "../../hooks/useSystem"
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

type PlateTypes = {
  id: string;
  amount: number;
};

type UserOrderTypes = {
  id: string;
  plates: PlateTypes[];
};

export function ShoppingCart() {
  const [userOrder, setUserOrder] = useState({} as UserOrderTypes);
  const { menuActive } = useSystem();
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageUserOrder = localStorage.getItem("@FoodExplorer:order");
    if (localStorageUserOrder) setUserOrder(JSON.parse(localStorageUserOrder));
  }, [])

  console.log(userOrder);

  return (
    <Container>
      {!menuActive &&
        <>
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>

          <h2>Meu pedido</h2>

          <article className="plateContainer">
            {userOrder && userOrder.plates?.length > 0 ?
              (userOrder.plates?.map(plate => {
                return (
                  <p key={plate?.id}>
                    {plate.amount}x {plate.id}
                  </p>
                )
              })) :
              (<p className="messageEmptyFavorites">Lista vazia</p>)
            }
          </article>
        </>
      }
    </Container>
  )
}