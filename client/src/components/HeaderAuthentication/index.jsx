import { HeaderContainer } from "./style";
import logoExplorer from "../../assets/logoExplorer.svg"

export function HeaderAuthentication() {
  return (
    <HeaderContainer>
      <img src={logoExplorer} alt="Logo-Explorer" />
      <h1>food explorer</h1>
    </HeaderContainer>
  )
}