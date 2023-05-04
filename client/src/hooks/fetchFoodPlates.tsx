import { useQuery } from "@tanstack/react-query";
import { API } from "../services/api";

type FoodPlates = {
  data: {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
  }[];
}

export const useFetchFoodPlates = (endPoint: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['foodPlates'], 
    queryFn: async () => await API.get(endPoint) as FoodPlates
  });

  return { data, isLoading, error }
} 