import { Container } from "./style";
import favoriteIcon from "../../assets/favorite.svg"
import favoriteIconMatch from "../../assets/favoriteMatch.svg"
import { Button } from "../Button";
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CountPlate } from "../CountPlate";

type FoodPlateType = {
  plate: {
    id: string;
    name: string;
    price: string;
    image: string;
  }
};

export function FoodPlate({ plate }: FoodPlateType) {
  const [favoriteMatch, setFavoriteMatch] = useState(false);
  const navigate = useNavigate();

  const toFavorite = () => setFavoriteMatch(favoriteMatch ? false : true);
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
        <CountPlate/> 
        <Button name="Incluir"/>
      </div>
    </Container>
  )
}