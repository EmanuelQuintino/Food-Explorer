import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

type OrderPlatesTypes = {
  order_id: string;
  plate_id: string;
  amount: number;
  price: number;
}

type UserOrdersTypes = {
  data: {
    id: string;
    status: string;
    code: number;
    user_id: string;
    order_plates: OrderPlatesTypes[]
    created_at: string;
  }[];
}

export const useOrdersQuery = () => {
  const query = useQuery({
    queryKey: ['userOrders'],
    queryFn: async () => await API.get("/orders") as UserOrdersTypes
  });

  const refetchPlateQuery = async () => await query.refetch();

  return {
    ...query,
    data: query.data?.data,
    refetchPlateQuery
  }
} 