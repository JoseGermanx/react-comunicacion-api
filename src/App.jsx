import React, { useEffect, useState } from "react";
import "./App.css";
import { CountriesAPI } from "../src/api/countries-api";
import CountriesList from "./components/CountriesList/CountriesList";
import CountriesDetail from "./components/CountriesDetail/CountriesDetail";
import SearchBar from "./components/SearchBar/SearchBar";
import Logo from "./components/Logo/Logo";
import Footer from "./components/Footer/Footer";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [clickCountrie, setClickCountrie] = useState([]);

  async function fetchAllCountries() {
    const countries = await CountriesAPI.fetchAllCountries();
    if (countries.length > 0) {
      setAllCountries(countries);
      setSearchResult([]);
    }
  }

  async function fetchByName(countrie) {
    const searchResponse = await CountriesAPI.fetchByName(countrie);
    if (searchResponse) {
      setSearchResult(searchResponse);
      setAllCountries([]);
      setClickCountrie([]);
    } else {
      alert("País no encontrado");
    }
  }

  async function fetchByClick(countrie) {
    const clickResponse = await CountriesAPI.fetchByName(countrie);
    setClickCountrie(clickResponse);
    setAllCountries([]);
  }

  const cleanStates = () => {
    setAllCountries([]);
    setSearchResult([]);
    setClickCountrie([]);
  }


  useEffect(() => {
    setClickCountrie(clickCountrie);
  }, [setClickCountrie, clickCountrie]);

  useEffect(() => {
    setSearchResult(searchResult);
  }, [setSearchResult, searchResult]);

  return (
    <div className="App">
      <div className="container-app">
        <div className="container-search">
          <Logo />
          <div>
            <h2>Busca un país y encuentra sus datos mas relevantes</h2>
          </div>
          <SearchBar onSubmit={fetchByName} />
          <div>
            {!allCountries.length ? (
              <div>
                <p>También puede ver la lista completa de paises</p>
                <input
                  type="button"
                  value="Ver todos los paises"
                  onClick={() => fetchAllCountries()}
                />
              </div>
            ) : (
              <input
                type="button"
                value="Borrar resultados"
                onClick={cleanStates}
              />
            )}
          </div>
        </div>
        <div className="container_resultados_list">
          {allCountries.length !== 0 &&
            allCountries.map((e) => {
              return (
                <div key={e.cca3} onClick={() => fetchByClick(e.name.common)}>
                  <CountriesList countrie={e} />
                </div>
              );
            })}
        </div>
        <div className="container_resultados_search">
          {searchResult.length !== 0 && (
            <CountriesDetail countrie={searchResult} />
          )}
        </div>
        <div className="container_resultados_search">
          {clickCountrie.length !== 0 && (
            <CountriesDetail countrie={clickCountrie} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
