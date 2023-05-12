import { FooterContainer } from "./style";
import { LogoExplorer } from "../../assets/LogoExplorer";

export function Footer() {
  return (
    <FooterContainer>
      <div className="logoBox">
        <LogoExplorer />
        <h1>food explorer</h1>
      </div>

      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </FooterContainer>
  )
}