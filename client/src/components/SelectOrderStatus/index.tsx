import { Container } from "./style";

type SelectTypes = {
  id: string;
  status: string;
}

export function SelectOrderStatus({ id, status, ...rest }: SelectTypes) {
  return (
    <Container>
      <label htmlFor="OrderStatus" className="srOnly">Status do pedido</label>
      <i className={`statusIcon ${status}`}></i>
      <select id="OrderStatus" {...rest} value={status}>
        <option value="Pendente">Pendente</option>
        <option value="Preparando">Preparando</option>
        <option value="Entregue">Entregue</option>
      </select>
    </Container>
  )
}
