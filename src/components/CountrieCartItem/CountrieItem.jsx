import React from "react";

import s from "./CountrieItem.module.css";

export default function CountrieItem({countrie}) {
  const onClickHandler = () => {
    onClick(countrie);
  };

  return (
    <div className={s.countries_list_container}>
      <div
        key={countrie.id}
        className={s.countrie}
        onClick={() => onClickHandler(countrie)}
      >
        <img
          src={countrie.flags.png}
          alt={countrie.name.common}
          className={s.img_countrie}
        />
        <p>{countrie.name.common}</p>
      </div>
    </div>
  );
}
