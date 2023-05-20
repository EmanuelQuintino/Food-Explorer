import { Container } from "./style";

type FavoritePlateType = {
    name: string;
};

export function FavoritePlate({ name }: FavoritePlateType) {
  return (
    <Container>
      {/* <img src={imageURL} alt="image-plate" className="imagePlate" /> */}
      <img src={"images/salada-molla.png"} alt="image-plate" className="imagePlate" />
      <div className="box">
        <h3 className="namePlate">{name}</h3>
        <button className="removeFavoriteButton">remover dos favoritos</button>
      </div>  
    </Container>
  )
}