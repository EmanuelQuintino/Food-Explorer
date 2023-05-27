import { QRCodeExplorer } from "../../assets/QRCodeExplorer";
import { Container } from "./style";

export function TablePayment() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th colSpan={1}>PIX</th>
            <th colSpan={1}>Crédito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <QRCodeExplorer />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}