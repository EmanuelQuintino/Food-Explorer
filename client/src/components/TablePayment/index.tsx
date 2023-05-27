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
            <th className={paymentForm === "pix" ? "paymentActive" : ""} onClick={pixPaymentForm}>
              <PixIcon />
              PIX
            </th>
            <th className={paymentForm === "credCard" ? "paymentActive" : ""} onClick={credCardPaymentForm}>
              <CredCardIcon />
              Crédito
            </th>
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