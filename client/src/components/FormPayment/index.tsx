import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../Button";

type FormData = {
  credCardNumber: string;
  expirationDate: string;
  cvc: string;
}

export function FormPayment() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
              maxLength: { value: 255, message: "Número máximo de caracteres é 255" },
              minLength: { value: 16, message: "No mínimo 16 caracteres" },
            })}
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
                maxLength: { value: 255, message: "Máximo de 255 caracteres" },
                minLength: { value: 3, message: "No mínimo 3 caracteres" },
              })}
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
                maxLength: { value: 3, message: "Máximo de 3 caracteres" },
                minLength: { value: 3, message: "No mínimo 3 caracteres" },
              })}
            />
            {errors.cvc && <span className='inputError'>{errors.cvc.message}</span>}
          </section>
        </div>

        <Button name="Finalizar pagamento" />
      </form>
    </Container>
  )
}