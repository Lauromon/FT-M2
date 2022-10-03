import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  var porahora = "holaaa"
  return (
  <div className={`${s.div}`}>
    <input className={`${s.input}`} placeholder='Ciudad...' type="text"/>
    <button className={`${s.btn}`} onClick= {() => props.onSearch(porahora)}>Agregar</button>
    </div>
  )
};