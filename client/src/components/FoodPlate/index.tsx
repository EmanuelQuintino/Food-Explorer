import { Container } from "./style";
import { FavoriteIcon } from "../../assets/FavoriteIcon";
import { EditIcon } from "../../assets/EditIcon";
import { Button } from "../Button";
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CountPlate } from "../CountPlate";
import { useAuth } from "../../hooks/useAuth";

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

  const plateDetails = () => navigate(`/details/${plate.id}`);
  const goToPageEditPlate = () => navigate(`/editplate/${plate.id}`);
  
  async function toFavorite(): Promise<void> {
    try {
      if (favoriteMatch) {
        // const response = await API.delete(`/favorites/${plate.id}`)
        // console.log(response.data || "Prato removido dos favoritos")
        setFavoriteMatch(false) 
      } else {
        // const response = await API.post(`/favorites/${plate.id}`)
        // console.log(response.data || "Prato favoritado com sucesso")
        setFavoriteMatch(true)
      } 
    } catch (error) {
      console.error(error);
    }
  }

  const imageURL = `${API.defaults.baseURL}/images/${plate.image}`;

  return (
    <Container>
      {userAuth.isAdmin 
        ? <button onClick={goToPageEditPlate} className="editIcon">
            <EditIcon />
          </button> 
        : (favoriteMatch 
            ? <button onClick={toFavorite} className={"favoriteIconMatch"}>
                <FavoriteIcon />
              </button>
            : <button onClick={toFavorite} className={"favoriteIcon"}>
                <FavoriteIcon />
              </button>
        )
      }

      <img src={imageURL} alt="image-plate" className="imagePlate" />

      <button className="nameButton">
        <h3 onClick={plateDetails}>{plate.name} &gt;</h3>
      </button>

      <p className="price">R$ {plate.price}</p>

      {!userAuth.isAdmin &&
        <div className="box">
          <CountPlate />
          <Button name="Incluir" />
        </div>
      }
    </Container>
  )
}