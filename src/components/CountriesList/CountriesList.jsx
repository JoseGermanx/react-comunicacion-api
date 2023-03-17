import React from 'react'
import CountrieItem from '../CountrieCartItem/CountrieItem';
import s from './CountriesList.module.css'

export default function CountriesList({countrie, onClickItem}) {
  return (
    <div>
    <div className={s.countries_list }>
      {countrie.map((countrie) => {
        return (
          <span key={countrie.id}>
            <CountrieItem countrie={countrie} onClick={onClickItem} />
          </span>
        );
      })}
    </div>
  </div>
  )
}