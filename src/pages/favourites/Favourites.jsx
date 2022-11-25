import React, { useEffect, useState } from "react";
import { CocktailCard } from "../../components/cocktailCard/CocktailCard";
import { Nav } from "../../components/nav/Nav";
import FavouritesStore from "../../utils/favourites";

export const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  const getFavourites = () => {
    setFavourites(FavouritesStore.getFavourites());
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <div className="page">
      <Nav />
      <div className="card-container">
        {favourites.map((favourite, index) => (
          <CocktailCard id={favourite} key={index} />
        ))}
      </div>
    </div>
  );
};
