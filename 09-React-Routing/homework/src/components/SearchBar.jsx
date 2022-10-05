import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input class="form-control me-2" onChange={(e) => {setCity(e.target.value)}}
        type="text"
        placeholder="Ciudad..."
      />
      <button class="btn btn-outline-success" type="submit">Agregar</button>
    </form>
  );
}
