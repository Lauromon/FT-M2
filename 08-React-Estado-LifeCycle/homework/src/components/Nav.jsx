import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href='https://www.soyhenry.com/'>
        <img src={Logo} width='30px' height='30px' alt='img not found'/>
        Henry - Weather App
      </a>
      <SearchBar onSearch={onSearch}/>
    </nav>
    </div>
  );
};

export default Nav;
