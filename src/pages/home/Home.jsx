import React from "react";
import { CocktailCard } from "../../components/cocktailCard/CocktailCard";
import { Nav } from "../../components/nav/Nav";
import styles from "./Home.module.scss";
import syncIcon from "../../assets/icons/sync.png";

export const Home = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="page">
      <Nav />
      <div className="card-container">
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
      </div>
      <div className={styles.reloadIconContainer} onClick={reload}>
        <img src={syncIcon} className={styles.syncIcon} />
      </div>
    </div>
  );
};
