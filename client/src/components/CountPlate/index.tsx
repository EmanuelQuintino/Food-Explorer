import { Container } from "./style";
import { MinusIcon } from "../../assets/MinusIcon";
import { PlusIcon } from "../../assets/PlusIcon";
import { useState } from "react";

export function CountPlate() {
  const [countPlate, setCountPlate] = useState(1);
  const platePlus = () => setCountPlate(previousState => Math.min(previousState + 1, 99));
  const plateMinus = () => setCountPlate(previousState => Math.max(previousState - 1, 1));

  return (
    <Container>
      <div className="boxMinusPlus">
        <button onClick={plateMinus}>
          <MinusIcon />
        </button>

        <p>{String(countPlate).padStart(2, "0")}</p>

        <button onClick={platePlus}>
          <PlusIcon />
        </button>
      </div>
    </Container>
  )
}