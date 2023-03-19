import React from "react";
import s from "./CountriesDetail.module.css"

export default function CountriesDetalles({ countrie }) {

  const detail = countrie;
 
  return (
    <div>
      { detail.map((detail, key) => {
        return (
        <div key={key} className={s.container_detail}>
        <img
          src={detail.flags.png}
          alt="Pais"       
        />       
        <div>
          <div>
            <span>
              <h2>Datos relevantes sobre {detail.name.common}</h2>
            </span>
          </div>
          <div>
            <h3>Capital: {detail.capital}</h3>
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
