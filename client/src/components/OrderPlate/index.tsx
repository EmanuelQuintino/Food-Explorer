import { Container } from "./style";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useQueryUser } from "../../hooks/useQueryUser";

type OrderPlateTypes = {
  orderPlate: {
    id: string;
    name?: string;
    image?: string;
    price?: string;
    amount: number;
  }
};

export function OrderPlate({ orderPlate }: OrderPlateTypes) {
  const { refetchQueryUser } = useQueryUser();

  const imageURL = `${API.defaults.baseURL}/images/${orderPlate?.image}`;

  async function removeOrderPlate(plateID: string): Promise<void> {
    console.log(plateID);
  }

  return (
    <Container>
      <img src={imageURL} alt="image-plate" className="imagePlate" />
      <div className="box">
        <h3 className="plateName">
          {orderPlate.amount}x {orderPlate.name}
        </h3>

        <div className="platePrice">
          {Number(orderPlate.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>

        <button className="removeOrderPlate" onClick={() => removeOrderPlate(orderPlate.id)}>
          Excluir
        </button>
      </div>
    </Container>
  )
}
