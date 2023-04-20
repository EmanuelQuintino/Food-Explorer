import { Container } from "./style";
import favoriteIcon from "../../assets/favorite.svg"
import favoriteIconMatch from "../../assets/favoriteMatch.svg"
import minus from "../../assets/minus.svg"
import plus from "../../assets/plus.svg"
import { Button } from "../Button";
import { useState } from "react";

export function FoodPlate({image, name, price}) {
  const [countPlate, setCountPlate] = useState(0);
  const [favoriteMatch, setFavoriteMatch] = useState(false);
  const toFavorite = () => setFavoriteMatch(favoriteMatch ? false : true);

  const plateMinus = () => setCountPlate() 
  
  return (
    <Container>
      <button onClick={toFavorite}>
        {favoriteMatch ?
          <img src={favoriteIconMatch} alt="favorite" className="favoriteIcon"/> :
          <img src={favoriteIcon} alt="favorite" className="favoriteIcon"/>
        }
      </button>
      
      <img src={image} alt="image-plate" className="imagePlate"/>
      <h3 className="name">{name} &gt;</h3>
      <p className="price">R$ {price}</p>
      
      <div className="box">
        <div className="boxMinusPlus">
          <img src={minus} alt="minus" />
          <p>{countPlate}</p>
          <img src={plus} alt="plus" />
        </div> 
        <Button name="Incluir"/>
      </div>
    </Container>
  )
}