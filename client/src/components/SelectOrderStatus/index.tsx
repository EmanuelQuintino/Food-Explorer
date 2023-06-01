import { Container } from "./style";

type SelectTypes = {
  id: string;
  status: string;
}

export function SelectOrderStatus({ id, status, ...rest }: SelectTypes) {
  return (
    <Container>
      <label htmlFor="OrderStatus">Status do pedido</label>
      <select id="OrderStatus" {...rest} value={status}>
        <option value="Pendente">Pendente</option>
        <option value="Preparando">Preparando</option>
        <option value="Entregue">Entregue</option>
      </select>
    </Container>
  )
}
