import { Container } from "./style"
import { useSystem } from "../../hooks/system"
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

export function NewPlate() {
  const { menuActive } = useSystem();
  const navigate = useNavigate();

  return (
    <Container>
      {!menuActive &&
        <>          
          <button className="backPageButton" onClick={() => navigate(-1)}>&lt; Voltar</button>
          <h2>Novo prato</h2>
          <form>
            <Input 
              id="name" 
              label="Nome" 
              type="text" 
              placeholder="Ex.: Salada Ceasar "
            />
          </form>
        </>
      }
    </Container>
  )
}