import React, {useEffect} from 'react'
import CountrieItem from '../CountrieCartItem/CountrieItem';
import s from './CountriesList.module.css'

export default function CountriesList({countrie }) {


  return (
    <div>
    <div className={ s.countries_list }>
          <div >
            <CountrieItem
            countrie={countrie}
            />
          </div>
    </div>
  </div>
  )
}