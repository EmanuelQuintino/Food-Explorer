import { useMutation } from "@tanstack/react-query";
import { API } from "../services/api";

type Ingredient = {
  name: string;
};

type FoodPlates = {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  ingredients: Ingredient[]
};

async function createPlate(data: FoodPlates) {
  const plateData = {
    ...data,
    ingredients: data.ingredients.map(ingredient => ingredient.name),
    image: data.image[0],
  };

  const formData = new FormData();

  formData.append('name', plateData.name);
  formData.append('image', plateData.image);
  formData.append('price', plateData.price);
  formData.append('category', plateData.category);
  formData.append('ingredients', JSON.stringify(plateData.ingredients));
  formData.append('description', plateData.description);

  const response = await API.post("/plates", formData) as {data: FoodPlates};

  console.log(response.data);
};

export const usePlateMutate = () => {
  const mutate = useMutation({
    mutationFn: createPlate
  });

  return mutate;
} 