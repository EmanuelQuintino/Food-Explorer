import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";

type FoodPlates = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  ingredients: string[]
}

export const usePlateMutate = () => {
  const mutate = useMutation({
    mutationFn: async (data) => await API.post("/plates", data) as FoodPlates
  });

  return mutate;
} 