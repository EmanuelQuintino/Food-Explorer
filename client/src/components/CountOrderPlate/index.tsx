import { Container } from "./style";
import { MinusIcon } from "../../assets/MinusIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { Button } from "../Button";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

type PlateTypes = {
  id: string;
  name?: string;
  price?: string;
}

export type ButtonType = {
  plate: PlateTypes;
  iconButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  nameButton: string;
}

export function CountOrderPlate({ plate, iconButton, nameButton }: ButtonType) {
  const [countPlate, setCountPlate] = useState(1);
  const platePlus = () => setCountPlate(previousState => Math.min(previousState + 1, 9));
  const plateMinus = () => setCountPlate(previousState => Math.max(previousState - 1, 1));
  const { userAuth } = useAuth();

  function includeUserOrderPlate() {
    let newUserOrder = {
      userID: userAuth.id,
      plates: [{ id: plate.id, amount: countPlate }]
    };

    const localStorageUserOrder = localStorage.getItem("@FoodExplorer:order");
    if (localStorageUserOrder) {
      const userOrder = JSON.parse(localStorageUserOrder);

      if (userOrder.userID !== userAuth.id) {
        localStorage.removeItem("@FoodExplorer:order");
      } else {
        const newPlates = userOrder.plates.filter((plateOrder: PlateTypes) => plateOrder.id !== plate.id);
  
        newUserOrder = {
          userID: userAuth.id,
          plates: [
            ...newPlates,
            { id: plate.id, amount: countPlate }
          ]
        };
      };
    };

    localStorage.setItem("@FoodExplorer:order", JSON.stringify(newUserOrder));
  }

  return (
    <Container>
      <section className="containerCountOrderPlate">
        <div className="boxMinusPlus">
          <button onClick={plateMinus}>
            <MinusIcon />
          </button>

          <p>{String(countPlate).padStart(2, "0")}</p>

          <button onClick={platePlus}>
            <PlusIcon />
          </button>
        </div>

        <div className="box">
          <Button name={nameButton} icon={iconButton} onClick={includeUserOrderPlate} />
        </div>
      </section>
    </Container>
  )
}