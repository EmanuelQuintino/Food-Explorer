import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../Button";
import { useSystem } from "../../hooks/useSystem";
import { useState } from "react";

type FormData = {
  credCardNumber: string;
  expirationDate: string;
  cvc: string;
}

export function FormPayment() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { setIsPaymentConfirm } = useSystem();
  const [credCardNumber, setCredCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvcNumber, setCvcNumber] = useState("");

  function formattedCredCardNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const formattedNumber = event.target.value
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();

    if (formattedNumber.length > 19) {
      event.preventDefault();
    } else {
      setCredCardNumber(formattedNumber);
    };
  };

  function formattedExpirationDate(event: React.ChangeEvent<HTMLInputElement>) {
    const formattedDate = event.target.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2');

    if (formattedDate.length > 5) {
      event.preventDefault();
    } else {
      setExpirationDate(formattedDate);
    };
  };

  function formattedCvcNumber(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length > 3) {
      event.preventDefault();
    } else {
      setCvcNumber(event.target.value.replace(/\D/g, ''));
    };
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setIsPaymentConfirm(true);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label htmlFor={"credCardNumber"}>Número do cartão</label>
          <input
            id={"credCardNumber"}
            type={"text"}
            placeholder={"0000 0000 0000 0000"}
            {...register("credCardNumber", {
              required: "Campo obrigatório",
              pattern: { value: /\d{4}\s\d{4}\s\d{4}\s\d{4}/, message: "Insirir um número de cartão válido" },
            })}
            value={credCardNumber}
            onChange={formattedCredCardNumber}
          />
          {errors.credCardNumber && <span className='inputError'>{errors.credCardNumber.message}</span>}
        </section>

        <div className="box">
          <section>
            <label htmlFor={"expirationDate"}>Validade</label>
            <input
              id={"expirationDate"}
              type={"text"}
              placeholder={"04/25"}
              {...register("expirationDate", {
                required: "Campo obrigatório",
                pattern: { value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/, message: "Insirir uma data válida" },
              })}
              value={expirationDate}
              onChange={formattedExpirationDate}
            />
            {errors.expirationDate && <span className='inputError'>{errors.expirationDate.message}</span>}
          </section>

          <section>
            <label htmlFor={"cvc"}>CVC</label>
            <input
              id={"cvc"}
              type={"text"}
              placeholder={"000"}
              {...register("cvc", {
                required: "Campo obrigatório",
                pattern: { value: /\d{3}/, message: "Insirir CVC válido" },
              })}
              value={cvcNumber}
              onChange={formattedCvcNumber}
            />
            {errors.cvc && <span className='inputError'>{errors.cvc.message}</span>}
          </section>
        </div>

        <Button name="Finalizar pagamento" />
      </form>
    </Container>
  )
}