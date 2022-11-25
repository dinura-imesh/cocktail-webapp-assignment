import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CocktailCard } from "../../components/cocktailCard/CocktailCard";
import { useDebounce } from "../../hooks/useDebounce";
import { searchCocktails } from "../../services/cocktail.service";
import styles from "./Search.module.scss";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const [searchedCocktails, setSearchedCocktails] = useState([]);
  const [searchValue, setSearchValue] = useDebounce("");

  useEffect(() => {
    if (searchValue.length > 0) navigate(`/search?keyword=${searchValue}`);
  }, [searchValue]);

  const search = async (keyword) => {
    if (!keyword) return;
    setSearchedCocktails([]);
    try {
      const response = await searchCocktails(keyword);
      response.data && setSearchedCocktails(response.data.drinks ?? []);
    } catch (error) {
      alert("Error occurred while searching");
    }
  };

  useEffect(() => {
    const url = new URL(window.location);
    search(url.searchParams.get("keyword"));
  }, [location]);

  return (
    <>
      <div className={styles.searchbarContainer}>
        <input
          type="text"
          className={styles.searchbar}
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="card-container">
        {searchedCocktails.map((cocktail, index) => (
          <CocktailCard cocktail={cocktail} key={index} />
        ))}
      </div>
    </>
  );
};
