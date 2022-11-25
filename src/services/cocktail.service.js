import { http } from "../http";

export const getRandomCocktail = () => {
  return http.get("random.php");
};

export const getCocktailById = (id) => {
  return http.get(`lookup.php?i=${id}`);
};
