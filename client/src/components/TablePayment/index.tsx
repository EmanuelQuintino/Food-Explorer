import { Container } from "./style";
import { CredCardIcon } from "../../assets/CredCardIcon";
import { PixIcon } from "../../assets/PixIcon";
import { QRCodeExplorer } from "../../assets/QRCodeExplorer";
import { useState } from "react";
import { FormPayment } from "../FormPayment";

export function TablePayment() {
  const [paymentForm, setPaymentForm] = useState("pix");

  function pixPaymentForm() {
    setPaymentForm("pix");
  }

  function credCardPaymentForm() {
    setPaymentForm("credCard");
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <button className={paymentForm === "pix" ? "buttonActive" : ""} onClick={pixPaymentForm}>
              <th>
                <PixIcon />
                PIX
              </th>
            </button>
            <button className={paymentForm === "credCard" ? "buttonActive" : ""} onClick={credCardPaymentForm}>
              <th>
                <CredCardIcon />
                Crédito
              </th>
            </button>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {paymentForm === "pix" && <QRCodeExplorer />}
              {paymentForm === "credCard" && <FormPayment />}
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}