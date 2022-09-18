import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import SearchIcon from "./Assets/searchIcon.svg";
import Pokemon from "./Component/Pokemon";
import PokemonCard from "./Component/PokeonCard";
import Pagination from "./Component/Pagination";

function App() {
  const [searchTxt, setSearchTxt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(9);
  const [favImg, setFavImg] = useState([]);
  const [count, setCount] = useState(0);
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTxt}&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=${limit}&offset=${skip}`
      )
      .then((res) => {
        setIsLoading(false);
        setFavImg(res.data.data);
        console.log(res);
        setCount(res.data.pagination.total_count);
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
      });
  }, [searchTxt, skip, limit]);
  console.log(searchTxt.length, "newArrrrrrr");
  console.log(newArr, "....");
  return (
    <div className="app">
      <div className="search">
        <div className="search-box">
          <div className="search-box__bar">
            <img src={SearchIcon} alt="search" width="23.48" height="24.48" />
            <input
              type="text"
              className="search-txt"
              name="searchTxt"
              placeholder="Article name..."
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
          </div>
          <button className="search-btn" value="submit">
            Search
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="loader">
          <div className="loading">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
      {favImg.length > 0 && (
        <div className="cards">
          <div className="store">
            {favImg.map((element, i) => {
              return (
                <Pokemon
                  key={i}
                  name={element.id}
                  url={element.embed_url}
                  setNewArr={setNewArr}
                  element={element}
                />
              );
            })}
          </div>
        </div>
      )}
      {searchTxt.length === 0 && newArr.length > 0 && (
        <div className="cards">
          <div className="store">
            {newArr.map((element, i) => {
              return (
                <PokemonCard
                  key={i}
                  name={element.id}
                  url={element.embed_url}
                />
              );
            })}
          </div>
        </div>
      )}
      {favImg.length > 0 && (
        <div className="paginationApp">
          <Pagination count={count} setLimit={setLimit} setSkip={setSkip} />
        </div>
      )}
    </div>
  );
}

export default App;
