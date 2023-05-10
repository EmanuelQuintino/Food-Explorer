import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useNavigate } from "react-router-dom";

export function FormPlate() {
  const { menuActive } = useSystem();
  const navigate = useNavigate();

  return (
    <Container>
      {!menuActive &&
        <>          
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>
          <form>
            <input type="text" />
          </form>
        </>
      }
    </Container>
  )
}