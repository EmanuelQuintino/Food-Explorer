import { Container } from "./style";

export function Slogan() {
  return (
    <Container>
      <div className="box">
        <img src="images/rectangle.png" alt="rectangle" className="rectangle"/>
        <img src="images/pngegg.png" alt="pngegg" className="pngegg" />
        <div className="slogan">
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </div>
      </div>
    </Container>
  )
}