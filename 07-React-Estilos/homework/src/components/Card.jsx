import React from 'react';
import s from './Card.module.css'

export default function Card(props) {
  // acá va tu código

  return (
  <div className={`${s.card}`}>
    <button className={`${s.btn}`} onClick= {props.onClose}>X</button>
    <h4>{props.name}</h4>
    <p className={`${s.min}`}>Min </p>
    <p className={`${s.minp}`}>{props.min}</p>
    <p className={`${s.max}`}>Max</p>
    <p className={`${s.maxp}`}>{props.max}</p>
    <img className={`${s.img}`}
    src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
    alt= "Clima"
    />
  </div>
)};