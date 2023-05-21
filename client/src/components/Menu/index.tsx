import { Container } from "./style";
import { InputSearch } from "../InputSearch";
import { useAuth } from "../../hooks/useAuth";
import { useSystem } from "../../hooks/useSystem";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const { handleLogout } = useAuth();
  const { toggleMenu } = useSystem();
  const navigate = useNavigate();
  const { userAuth } = useAuth();

  function goToNewPlate() {
    navigate('/newplate');
    toggleMenu();
  }

  function goToFovorites() {
    navigate('/favorites');
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
      <InputSearch />
      <div className="boxButtons">
        {userAuth.isAdmin && <button onClick={goToNewPlate}>Novo Prato</button>}
        <button onClick={goToFovorites}>Meus favoritos</button> 
        <button onClick={logout}>Sair</button>
      </div>
    </Container>
  )
}