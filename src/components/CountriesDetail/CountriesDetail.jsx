import React from "react";

export default function CountriesDetalles({ countrie }) {
  console.log("CountriesDet ", countrie[0])
  const detail = countrie;
  console.log(detail)
  return (
    <div>
      { detail && detail.map(() => {
        <div key={detail.id}>
        {/* <h1>{detail.name.common}</h1> */}
        <h3>Capital: {detail.capital}</h3>
        <div>
          <div>
            <span>
              {/* <h2>Datos relevantes sobre {detail.name.common}</h2> */}
            </span>
          </div>
          <div>
            <span>
              Continente:&nbsp;<p>{detail.continente}</p>
            </span>
            <span>
              Región:&nbsp;<p>{detail.subregion}</p>
            </span>
            <span>
              Población:&nbsp;<p>{detail.poblacion} habitantes</p>
            </span>
            <span>
              Área:&nbsp;<p>{detail.area} km2</p>
            </span>
          </div>
        </div>
      </div>
        
        })}
      
    </div>
  );
}
