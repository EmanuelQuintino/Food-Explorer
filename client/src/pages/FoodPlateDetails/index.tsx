import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function FoodPlateDetails() {
  const { menuActive } = useSystem();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <Container>
      {!menuActive &&
        <>
          <button onClick={() => navigate(-1)}>&lt;Voltar</button>      
          <p>Details: {params.id}</p>
        </>
      }
    </Container>
  )
}