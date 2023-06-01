import { Container } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { SelectOrderStatus } from "../SelectOrderStatus";

type OrderPlatesTypes = {
  name?: string;
  amount?: number;
}

type UserOrderTypes = {
  code: number;
  status: string;
  date: string;
  plates: OrderPlatesTypes[];
}

export function CardHistoryOrderPlate({ code, status, date, plates }: UserOrderTypes) {
  const { userAuth } = useAuth();
  const arrayPlates = plates.map((plate) => `${plate.amount} x ${plate.name}`);
  const stringPlates = arrayPlates.join(", ");

  const orderDataTime = new Date(date);

  const formatDate = orderDataTime.toLocaleString('pt-BR', {
    day: "numeric",
    month: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).split(",").join(" às");

  return (
    <Container>
      <div className="headerCard">
        <div className="cod">{String(code).padStart(6, "0")}</div>

        <div className="status">
          <div className={`statusIcon ${status}`}></div>
          {status}
        </div>

        <div className="date">{formatDate}</div>
      </div>

      <div className="bodyCard">
        {stringPlates}
      </div>

      {!userAuth.isAdmin && <SelectOrderStatus/>}
    </Container >
  )
}
