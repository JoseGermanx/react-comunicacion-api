import React, { useEffect, useState } from "react";
import "./App.css";
import { CountriesAPI } from "../src/api/countries-api";
import CountriesList from "./components/CountriesList/CountriesList";
import CountriesDetail from "./components/CountriesDetail/CountriesDetail";
import SearchBar from "./components/SearchBar/SearchBar";
import Logo from "./components/Logo/Logo";

function App() {
  const [cargaCountries, setCargaCountries] = useState([])
  const [allCountries, setAllCountries] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  

  async function fetchAllCountries() {
    const countries = await CountriesAPI.fetchAllCountries();
    if (countries.length > 0) {
      setAllCountries(countries);
    }
  }

  async function fetchByTitle(title) {
    const searchResponse = await CountriesAPI.fetchByName(title);
    console.log("Search ",searchResponse)    
      if (searchResponse) {
        setSearchResult(searchResponse);
      }
      console.log("Result ", searchResult)
  }

  useEffect(() => {
    setSearchResult(searchResult)
  }, [setSearchResult, searchResult])
  
  

  return (
    <div className="App">
      <div className="container-app">
        <div className="container-search">
        <Logo />
        <p>
          <h2>Busca un país y encuentra sus datos mas relevantes</h2>
        </p>
        <SearchBar onSubmit={fetchByTitle} />
        <div>        
          {!allCountries.length || !searchResult.length ? (
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
              onClick={() => setAllCountries([])}
            />
          )}
          </div>
        </div>
        <div className="container-resultados">
        {allCountries.length !== 0 && <CountriesList countrie={allCountries} />}
        {searchResult.length ? (<CountriesDetail countrie={searchResult} />): (<></>)}

        </div>       
      </div>
    </div>
  );
}

export default App;
