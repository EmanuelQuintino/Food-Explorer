import { QRCodeExplorer } from "../../assets/QRCodeExplorer";
import { Container } from "./style";

export function TablePayment() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>PIX</th>
            <th>Crédito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <QRCodeExplorer />
          </tr>
        </tbody>
      </table>
    </Container>
  )
}