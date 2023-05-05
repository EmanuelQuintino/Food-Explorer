import { Container } from "./style";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { useState } from "react";

export function CountPlateDetails() {
  const [countPlate, setCountPlate] = useState(1);
  const platePlus = () => setCountPlate(previousState => Math.min(previousState + 1, 99));
  const plateMinus = () => setCountPlate(previousState => Math.max(previousState - 1, 1));
    
  return (
    <Container>      
      <div className="boxMinusPlus">  
        <button onClick={plateMinus}>
          <img src={minus} alt="minus" className="minusImage"/>
        </button>
        
        <p>{String(countPlate).padStart(2, "0")}</p>
        
        <button onClick={platePlus}>
          <img src={plus} alt="plus" className="plusImage"/>
        </button>
      </div> 
    </Container>
  )
}