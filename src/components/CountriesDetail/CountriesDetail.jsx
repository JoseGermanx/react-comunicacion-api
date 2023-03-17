import React from "react";

export default function CountriesDetail({ countrie }) {
  return (
    <div>
      <div>
        {countrie.name.common}
        <h3>Capital: {countrie.capital}</h3>
        <div className="bloque-der">
          <div>
            <span>
              <h2>Datos relevantes sobre {countrie.name.common}</h2>
            </span>
          </div>
          <div className="span-text">
            <span>
              Continente:&nbsp;<p>{countrie.continente}</p>
            </span>
            <span>
              Región:&nbsp;<p>{countrie.subregion}</p>
            </span>
            <span>
              Población:&nbsp;<p>{countrie.poblacion} habitantes</p>
            </span>
            <span>
              Área:&nbsp;<p>{countrie.area} km2</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
