import { Container } from "./style";
import { FavoriteIcon } from "../../assets/FavoriteIcon";
import { EditIcon } from "../../assets/EditIcon";
import { Button } from "../Button";
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CountPlate } from "../CountPlate";
import { useAuth } from "../../hooks/auth";

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
  const { userAuth } = useAuth();
  const navigate = useNavigate();

  const toFavorite = () => setFavoriteMatch(favoriteMatch ? false : true);
  const plateDetails = () => navigate(`/details/${plate.id}`);
  const pageUpdatePlate = () => navigate(`/editplate/${plate.id}`);
  
  const imageURL = `${API.defaults.baseURL}/images/${plate.image}`;
  
  return (
    <Container>
      {userAuth.isAdmin?
        <button onClick={pageUpdatePlate} className="editIcon">
          <EditIcon />
        </button>:
        <button onClick={toFavorite} className= {favoriteMatch ? "favoriteIconMatch" : "favoriteIcon"}>
          <FavoriteIcon />
        </button>
      }
      
      <img src={imageURL} alt="image-plate" className="imagePlate"/>
      
      <button className="nameButton">
        <h3 onClick={plateDetails}>{plate.name} &gt;</h3>
      </button>
      
      <p className="price">R$ {plate.price}</p>
      
      {!userAuth.isAdmin &&
        <div className="box">
          <CountPlate/> 
          <Button name="Incluir"/>
        </div>
      }
    </Container>
  )
}