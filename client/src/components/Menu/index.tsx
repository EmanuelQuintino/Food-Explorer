import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/auth";
import { useSystem } from "../../hooks/system";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const { handleLogout } = useAuth();
  const { toggleMenu } = useSystem();
  const navigate = useNavigate();
  const { userAuth } = useAuth();
  
  function addPlate() {
    navigate('/newplate');
    toggleMenu();
  }

  function logout() {
    const isConfirmLogout = confirm('Deseja sair da aplicação?');
    if (isConfirmLogout) {
      navigate('/');
      toggleMenu();
      handleLogout()
    };
  }
  
  return (
    <Container>
      <InputSearch/>
      <div className="boxButtons">
        {userAuth.isAdmin && <button onClick={addPlate}>Novo Prato</button>}
        <button onClick={logout}>Sair</button>
      </div>
    </Container>
  )
}