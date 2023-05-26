import { Container } from "./style";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useQueryUser } from "../../hooks/useQueryUser";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const imageURL = `${API.defaults.baseURL}/images/${orderPlate?.image}`;

  async function unFavorite(plateID: string): Promise<void> {
    try {
      const isConfirm = confirm("Deseja remover prato dos favoritos?");
      if (isConfirm) await API.delete(`/favorites/${plateID}`);
      await refetchQueryUser();
    } catch (error: any) {
      toast.error(error.response.data.error || "Erro ao remover prato dos favoritos")
    }
  }

  const goToPlateDetails = () => navigate(`/details/${orderPlate?.id}`);

  return (
    <Container>
      <img src={imageURL} alt="image-plate" className="imagePlate" />
      <div className="box">
        <button className="namePlateButton" onClick={goToPlateDetails}>
          {orderPlate?.name} &gt;
        </button>

        <button className="removeFavoriteButton" onClick={() => unFavorite("")}>
          remover dos favoritos
        </button>
      </div>
    </Container>
  )
}
