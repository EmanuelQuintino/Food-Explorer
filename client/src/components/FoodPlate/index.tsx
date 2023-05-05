import { Container } from "./style";
import favoriteIcon from "../../assets/favorite.svg"
import favoriteIconMatch from "../../assets/favoriteMatch.svg"
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { Button } from "../Button";
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

type FoodPlateType = {
  plate: {
    id: string;
    name: string;
    price: string;
    image: string;
  }
};

export function FoodPlate({ plate }: FoodPlateType) {
  const [countPlate, setCountPlate] = useState(1);
  const [favoriteMatch, setFavoriteMatch] = useState(false);
  const navigate = useNavigate();

  const toFavorite = () => setFavoriteMatch(favoriteMatch ? false : true);
  const platePlus = () => setCountPlate(previousState => Math.min(previousState + 1, 99));
  const plateMinus = () => setCountPlate(previousState => Math.max(previousState - 1, 1));
  const plateDetails = () => navigate(`/details/${plate.id}`);
  
  const imageURL = `${API.defaults.baseURL}/images/${plate.image}`;
  
  return (
    <Container>
      <button onClick={toFavorite}>
        {favoriteMatch ?
          <img src={favoriteIconMatch} alt="favorite" className="favoriteIcon"/> :
          <img src={favoriteIcon} alt="favorite" className="favoriteIcon"/>
        }
      </button>
      
      <img src={imageURL} alt="image-plate" className="imagePlate"/>
      <h3 className="name" onClick={plateDetails}>{plate.name} &gt;</h3>
      <p className="price">R$ {plate.price}</p>
      
      <div className="box">
        <div className="boxMinusPlus">  
          <button onClick={plateMinus}>
            <img src={minus} alt="minus"/>
          </button>
          
          <p>{String(countPlate).padStart(2, "0")}</p>
          
          <button onClick={platePlus}>
            <img src={plus} alt="plus"/>
          </button>
        </div> 
        <Button name="Incluir"/>
      </div>
    </Container>
  )
}