import React, { useState, useEffect } from "react";

import s from "./CountrieItem.module.css";

export default function CountrieItem({ countrie }) {
 

  return (
    <div className={s.countries_list_container}>
      <div
        key={countrie.id}
        className={s.countrie}               
      >
        <img
          src={countrie.flags.png}
          alt={countrie.name.common}
          className={s.img_countrie}         
        />
        <p>{countrie.capital}</p>
        <p>{countrie.continente}</p>
        <p>{countrie.name.common}</p>
      </div>
    </div>
  );
}
