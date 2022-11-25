import { useEffect, useState } from "react";
import {
  getCocktailById,
  getRandomCocktail,
} from "../services/cocktail.service";

export const useCocktail = (id, cocktailData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cocktail, setCocktail] = useState(cocktailData);
  const [error, setError] = useState(null);

  const loadCocktail = async () => {
    if (cocktailData) {
      setIsLoading(false);
      return;
    }
    try {
      const response = id
        ? await getCocktailById(id)
        : await getRandomCocktail();
      if (response.data) setCocktail(response.data.drinks[0]);
    } catch (e) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadCocktail();
  }, []);

  return [isLoading, cocktail, error];
};
