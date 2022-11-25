import React from "react";
import { useCocktail } from "../../hooks/useCocktail";
import styles from "./CocktailCard.module.scss";
import heartOutlined from "../../assets/icons/heart_outlined.png";
import heartFilled from "../../assets/icons/heart_filled.png";
import { useFavourite } from "../../hooks/useFavourite";

export const CocktailCard = (props) => {
  const [isLoading, cocktail, error] = useCocktail(props.id);
  const [isFavourite, toggleFavourite] = useFavourite(cocktail?.idDrink);

  return (
    <div className={styles.card}>
      {isLoading && (
        <div>
          <div className={styles.imageContainer}></div>
          <div className={styles.textSkeleton}></div>
        </div>
      )}
      {cocktail && (
        <>
          <div className={styles.imageContainer}>
            <img src={cocktail.strDrinkThumb} className={styles.image} />
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.cardCategory}>{cocktail.strCategory}</div>
            <div className={styles.cardTitle}>{cocktail.strDrink}</div>
          </div>
          <div
            className={styles.favoriteContainer}
            onClick={() => toggleFavourite()}
          >
            <img
              src={isFavourite ? heartFilled : heartOutlined}
              className={styles.heartIcon}
            />
          </div>
        </>
      )}
      {error && (
        <div className={styles.error}>Error loading data from the server</div>
      )}
    </div>
  );
};
