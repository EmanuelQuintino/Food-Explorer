import { useMutation } from "@tanstack/react-query";
// import { API } from "../services/api";
// import { toast } from 'react-toastify';

type OrderPlatesTypes = {
  id: string;
  amount: number;
}

type OrderDataTypes = {
  userID: string;
  plates: OrderPlatesTypes[];
}

async function orderCreate(data: OrderDataTypes) {
  console.log(data);
  // await API.post("/orders", data)
    // .then((response) => toast.success(response.data || "Pedido realizado com sucesso"))
    // .catch((error) => toast.error(error.response.data.error || "Erro ao fazer pedido"))
};

export const useOrderCreate = () => {
  const mutate = useMutation({
    mutationFn: orderCreate
  });

  return mutate;
} 