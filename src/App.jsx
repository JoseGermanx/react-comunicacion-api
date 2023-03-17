import React, { useState } from "react";
import "./index.css";
import { CountriesAPI } from "../src/api/countries-api";
import CountriesList from "./components/CountriesList/CountriesList";

function App() {
  const [allCountries, setAllCountries] = useState([]);

  async function fetchAllCountries() {
    const countries = await CountriesAPI.fetchAllCountries();
    if (countries.length > 0) {
      setAllCountries(countries);
    }
  }

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
        {/* {allCountries.map((country) => {
          return (
            <div key={country.id} className={s.countrie} onClick={() => onClickHandler(country)}>
              <img src={country.flags.png} alt={country.name.common} className={s.img_countrie}/>
              <p>{country.name.common}</p>
            </div>
          );
        })} */}
        { allCountries.length !== 0 && <CountriesList countrie={allCountries} /> }
        
        {/* <CountriesDetail />  */}
      </div>
    </div>
  );
}

export default App;
