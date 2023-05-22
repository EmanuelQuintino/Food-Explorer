import { Container } from "./style";
import { FavoriteIcon } from "../../assets/FavoriteIcon";
import { FavoriteIconMatch } from "../../assets/FavoriteIconMatch";
import { EditIcon } from "../../assets/EditIcon";
import { Button } from "../Button";
import { useState } from "react";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { CountPlate } from "../CountPlate";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { useQueryUser } from "../../hooks/useQueryUser";

type FoodPlateType = {
  isFavorite?: boolean;
  plate: {
    id: string;
    name: string;
    price: string;
    image: string;
  }
};

export function FoodPlate({ plate, isFavorite = false }: FoodPlateType) {
  const [favoriteMatch, setFavoriteMatch] = useState(isFavorite);
  const { userAuth } = useAuth();
  const navigate = useNavigate();
  const { refetchQueryUser } = useQueryUser();

  const goToPageEditPlate = () => navigate(`/editplate/${plate.id}`);
  
  async function goToPlateDetails() {
    navigate(`/details/${plate.id}`);
    await refetchQueryUser();
  };
  
  async function toFavorite(): Promise<void> {
    try {
      await API.post(`/favorites/${plate.id}`)
      setFavoriteMatch(true)
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Erro ao favoritar prato")
    }
  }

  async function unFavorite(): Promise<void> {
    try {
      await API.delete(`/favorites/${plate.id}`)
      setFavoriteMatch(false)
    } catch (error: any) {
      toast.error(error.response.data.error || "Erro ao remover prato dos favoritos")
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
          ? <button onClick={unFavorite} className={"FavoriteIconMatch"}>
            <FavoriteIconMatch />
          </button>
          : <button onClick={toFavorite} className={"favoriteIcon"}>
            <FavoriteIcon />
          </button>
        )
      }

      <img src={imageURL} alt="image-plate" className="imagePlate" />

      <button className="nameButton">
        <h3 onClick={goToPlateDetails}>{plate.name} &gt;</h3>
      </button>

      <p className="price">{Number(plate.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>

      {!userAuth.isAdmin &&
        <div className="box">
          <CountPlate />
          <Button name="Incluir" />
        </div>
      }
    </Container>
  )
}