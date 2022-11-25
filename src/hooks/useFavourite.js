import { useEffect, useState } from "react";
import Favourites from "../utils/favourites";

export const useFavourite = (cocktailId) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    if (!cocktailId) return;
    setIsFavourite((val) => {
      val ? Favourites.remove(cocktailId) : Favourites.add(cocktailId);
      return !val;
    });
  };

  useEffect(() => {
    setIsFavourite(Favourites.isFavourite(cocktailId));
  }, []);

  return [isFavourite, toggleFavourite];
};
