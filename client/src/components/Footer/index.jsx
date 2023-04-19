import { FooterContainer } from "./style";
import logoExplorerFooter from "../../assets/logoExplorerFooter.svg"

export function Footer() {
  return (
    <FooterContainer>
      <div className="logo">
        <img src={logoExplorerFooter} alt="logo-explorer-footer" />
        <h1>food explorer</h1>
      </div>

      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </FooterContainer>
  )
}