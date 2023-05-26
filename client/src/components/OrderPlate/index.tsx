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
    try {
      const isConfirm = confirm("Deseja remover prato dos favoritos?");
      if (isConfirm) await API.delete(`/favorites/${plateID}`);
      await refetchQueryUser();
    } catch (error: any) {
      toast.error(error.response.data.error || "Erro ao remover prato dos favoritos")
    }
  }

  return (
    <Container>
      <img src={imageURL} alt="image-plate" className="imagePlate" />
      <div className="box">
        <h3 className="plateName">
          {orderPlate.amount}x {orderPlate.name}
        </h3>
        <div className="part2">
          <span className="platePrice">
            {Number(orderPlate.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>

          <button className="removeOrderPlate" onClick={() => removeOrderPlate("")}>
            Excluir
          </button>
        </div>
      </div>
    </Container>
  )
}
