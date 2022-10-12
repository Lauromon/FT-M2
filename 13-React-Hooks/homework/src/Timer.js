import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');
  const [input, setInput] = useState(0);
  const myRef = useRef(null);
  

  function toggle() {
    setActivo(!activo);
  } 

  function reset() {
    setSegundos(0);
    setInput(0);
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
  }

  function agregaSegundos() {
    let ref = myRef.current.value;
    setSegundos(ref)
    setInput(ref);
  }

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador'){
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);
      }, 1000);
    }
    if (activo && tipo === 'Cuenta Regresiva'){
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador'){
      clearInterval(intervalo);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
    }, [activo,segundos,tipo]);
  

  return (
    <div className="app">
      Componente Timer
      <div className='time'>
        {segundos}s
      </div>
      <div className='row'>
        <button className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
        onClick={toggle}>
        {activo ? 'Pausa' : 'Inicio'}{/* si esta activo, mostra pausa, si no inicio */}
        </button>
        <button className='button' onClick={reset}>
          Reset
        </button>
      </div>
      <button className='button' onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" ref={myRef}value={input} onChange={agregaSegundos} placehorlder="Ingresa Segundos" autoComplete='off'/>}
    </div>
  );
};

export default Timer;
