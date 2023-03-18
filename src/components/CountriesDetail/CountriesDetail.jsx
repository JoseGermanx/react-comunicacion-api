import React from "react";

export default function CountriesDetalles({ countrie }) {
  console.log("CountriesDet ", countrie[0])
  const detail = countrie;
  console.log(detail)
  return (
    <div>
      { detail.map((detail) => {
        return (
        <div key={detail.id}>
        {/* <h1>{detail.name.common}</h1> */}
        <img
          src={detail.flags.png}
          alt="Pais"       
        />
        <h3>Capital: {detail.capital}</h3>
        <div>
          <div>
            <span>
              {/* <h2>Datos relevantes sobre {detail.name.common}</h2> */}
            </span>
          </div>
          <div>
            <span>
              Continente:&nbsp;<p>{detail.continents[0]}</p>
            </span>
            <span>
              Región:&nbsp;<p>{detail.region}</p>
            </span>
            <span>
              Población:&nbsp;<p>{detail.population} habitantes</p>
            </span>
            <span>
              Área:&nbsp;<p>{detail.area} km2</p>
            </span>
            <span>
              Ubicación:&nbsp;<a href={detail.maps.googleMaps}>Link a Google Maps</a>
            </span>
          </div>
        </div>
      </div>
        
        )})}
      
    </div>
  );
}
