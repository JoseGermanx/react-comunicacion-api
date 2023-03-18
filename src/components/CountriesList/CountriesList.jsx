import React from 'react'
import CountrieItem from '../CountrieCartItem/CountrieItem';
import s from './CountriesList.module.css'

export default function CountriesList({countrie}) {
  return (
    <div>
    <div className={s.countries_list }>
      {countrie.map((countrie) => {
        return (
          <div key={countrie.id}>
            <CountrieItem
            countrie={countrie}
            />
          </div>
        );
      })}
    </div>
  </div>
  )
}