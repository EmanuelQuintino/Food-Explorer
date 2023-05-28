import { Container } from "./style";
import { CredCardIcon } from "../../assets/CredCardIcon";
import { PixIcon } from "../../assets/PixIcon";
import { QRCodeExplorer } from "../../assets/QRCodeExplorer";
import { useState } from "react";
import { FormPayment } from "../FormPayment";
import { ApprovedIcon } from "../../assets/ApprovedIcon";

export function TablePayment() {
  const [paymentForm, setPaymentForm] = useState("pix");
  const [paymentIsConfirm, setPaymentIsConfirm] = useState(false);

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
              {paymentForm === "credCard" &&
                <>
                  {!paymentIsConfirm ?
                    <FormPayment /> :
                    <div className="boxPaymentApproved">
                      <ApprovedIcon />
                      <p>Pagamento aprovado!</p>
                    </div>
                  }
                </>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}