import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import searchIcon from "../../assets/icons/search.png";
import { useDebounce } from "../../hooks/useDebounce";

export const Nav = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useDebounce("");

  useEffect(() => {
    if (searchValue.length > 0) navigate(`/search?keyword=${searchValue}`);
  }, [searchValue]);

  return (
    <div className={styles.nav}>
      <div className={styles.navHeader} onClick={() => navigate("/")}>
        Cocktail Master
      </div>
      <div className={styles.navRoutes}>
        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className={styles.navItemHome}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/favourites">Favourites</Link>
        </div>
        <Link to="/search" className={styles.searchIconWrapper}>
          <img src={searchIcon} className={styles.searchIcon} />
        </Link>
      </div>
    </div>
  );
};
