import { Container } from "./style";
import { API } from "../../services/api";

type FavoritePlateType = {
  plate?: {
    name: string;
    image: string;
  }
};

export function FavoritePlate({ plate }: FavoritePlateType) {
  const imageURL = `${API.defaults.baseURL}/images/${plate?.image}`;
  return (
    <Container>
      <img src={imageURL} alt="image-plate" className="imagePlate" />
      <div className="box">
        <h3 className="namePlate">{plate?.name}</h3>
        <button className="removeFavoriteButton">remover dos favoritos</button>
      </div>  
    </Container>
  )
}