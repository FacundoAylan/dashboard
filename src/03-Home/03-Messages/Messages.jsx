import React from 'react';
import './index.css';

const Messages = () => {
  return (
    <div className='conatiner-messages'>
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

export default Messages;