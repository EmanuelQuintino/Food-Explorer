import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useParams } from "react-router-dom";

export function FoodPlateDetails() {
  const { menuActive } = useSystem();
  const params = useParams();
  
  return (
    <Container>
      {!menuActive &&
        <>          
          <p>Details: {params.id}</p>
        </>
      }
    </Container>
  )
}