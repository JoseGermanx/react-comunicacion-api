import React, { useEffect, useState } from "react";
import "./index.css";
import { CountriesAPI } from "../src/api/countries-api";
import CountriesList from "./components/CountriesList/CountriesList";
import CountriesDetail from "./components/CountriesDetail/CountriesDetail";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  async function fetchAllCountries() {
    const countries = await CountriesAPI.fetchAllCountries();
    if (countries.length > 0) {
      setAllCountries(countries);
    }
  }

  useEffect (() => {
    if(selectedCountry){
      setSelectedCountry(selectedCountry)

    }
   
  }, [selectedCountry])

  return (
    <div className="App">
      <div>
        <p>
          <h2>Busca un país y encuentra sus datos mas relevantes</h2>
        </p>
        <p>También puede ver la lista completa de paises</p>
        <div >
          {!allCountries.length ? (
            <input
              type="button"
              value="Ver todos los paises"
              onClick={() => fetchAllCountries()}
            />
          ) : (
            <input
              type="button"
              value="Clear All Countries"
              onClick={() => setAllCountries([])}
            />
          )}
        </div>
        <div >{ selectedCountry && <CountriesDetail countrie={selectedCountry}/> }</div>
        { allCountries.length !== 0 && <CountriesList countrie={allCountries} /> }      
        
      </div>
    </div>
  );
}

export default App;
