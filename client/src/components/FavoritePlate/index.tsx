import { Container } from "./style";
import { API } from "../../services/api";
import { toast } from "react-toastify";
import { useQueryUser } from "../../hooks/useQueryUser";

type FavoritePlateType = {
  plate?: {
    id: string;
    name: string;
    image: string;
  }
};

export function FavoritePlate({ plate }: FavoritePlateType) {
  const { refetchQueryUser } = useQueryUser();
  const imageURL = `${API.defaults.baseURL}/images/${plate?.image}`;

  async function unFavorite(plateID: string): Promise<void> {
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
        <h3 className="namePlate">{plate?.name}</h3>
        <button className="removeFavoriteButton" onClick={() => unFavorite(plate!.id)}>
          remover dos favoritos
        </button>
      </div>
    </Container>
  )
}
