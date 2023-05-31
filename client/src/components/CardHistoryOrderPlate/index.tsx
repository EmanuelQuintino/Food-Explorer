import { Container } from "./style";

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
  const arrayPlates = plates.map((plate) => `${plate.amount} x ${plate.name}`);
  const stringPlates = arrayPlates.join(", ");

  const orderDataTime = new Date(date);
  
  const formatOptions = {
    day: "numeric",
    month: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  
  const formatDate = orderDataTime.toLocaleString('pt-BR', formatOptions).split(",").join(" às");  
  
  return (
    <Container>
      <div className="headerCard">
        <div className="cod">{String(code).padStart(6, "0")}</div>

        <div className="status">
          <span>o </span>
          {status}
        </div>

        <div className="date">{formatDate}</div>
      </div>

      <div className="bodyCard">
        {stringPlates}
      </div>
    </Container >
  )
}
