import React from 'react';
import './index.css';

const Setting = () => {
  return (
    <div className='conatiner-messages'>
      <button>Cargan info</button>
      <h1>Configuración</h1>
      <div className='messages'>
        <div className='avatar-messages'/>
        <h3>Mensaje Nuevo: Hola, buenos dias!</h3>
      </div>
      <div className='messages'>
        <div className='avatar-messages'/>
        <h3>Mensaje Nuevo: Hola, tengo una consulta...</h3>
      </div>
      <div className='messages'>
        <div className='avatar-messages'/>
        <h3>Mensaje Nuevo: Hola, buenas tardes...</h3>
      </div>
    </div>
  )
};

export default Setting;