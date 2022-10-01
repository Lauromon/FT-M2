import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  var porahora = "holaaa"
  return (
  <div>
    <input id='Agregar' placeholder='Ciudad...' type="text"/>
    <button onClick= {() => props.onSearch(porahora)}>Agregar</button>
    </div>
  )
};