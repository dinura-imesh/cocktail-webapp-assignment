import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.nav}>
      <div className={styles.navHeader} onClick={() => navigate("/")}>
        Cocktail Master
      </div>
      <div className={styles.navRoutes}>
        <div className={styles.navItemHome}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/favourites">Favourites</Link>
        </div>
      </div>
    </div>
  );
};
