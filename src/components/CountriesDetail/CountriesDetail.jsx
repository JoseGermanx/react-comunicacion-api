import React from "react";

export default function CountriesDetail({ country }) {
  return (
    <div>
      <div>
        {country.name.common}
        <h3>Capital: {country.capital}</h3>
        <div className="bloque-der">
          <div>
            <span>
              <h2>Datos relevantes sobre {country.name.common}</h2>
            </span>
          </div>
          <div className="span-text">
            <span>
              Continente:&nbsp;<p>{country.continente}</p>
            </span>
            <span>
              Región:&nbsp;<p>{country.subregion}</p>
            </span>
            <span>
              Población:&nbsp;<p>{country.poblacion} habitantes</p>
            </span>
            <span>
              Área:&nbsp;<p>{country.area} km2</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
