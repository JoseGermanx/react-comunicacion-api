import React, { useState, useEffect } from "react";

import s from "./CountrieItem.module.css";

export default function CountrieItem({ countrie }) {
 

  return (
    <div className={s.countries_list_container} >
      <div
        key={countrie.cca3}
        className={s.countrie}               
      >
        <img
          src={countrie.flags.png}
          alt={countrie.name.common}
          className={s.img_countrie}         
        />
        <h3>{countrie.name.common}</h3>
        <div className={s.capital}>
        <h5>Capital:&nbsp;</h5>
        <p>{countrie.capital}</p>
        </div>
        <div className={s.continente}>
        <h5>Continente:&nbsp;</h5>
        <p>{countrie.continents[0]}</p>
        </div>       
      </div>
    </div>
  );
}
