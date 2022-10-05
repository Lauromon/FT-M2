import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav({onSearch}) {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <Link to='/'>  
          <span class="navbar-brand" >
          <img src={Logo} width='30px' height='30px' alt='img not found'/>
          Henry - Weather App
          </span>
        </Link>
        <Link to='/about'>
          <span>About</span>
        </Link>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};