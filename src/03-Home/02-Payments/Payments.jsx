import React from 'react';
import './index.css';

const Payments = () => {
  return (
    <div className='container-payments'>
      <h1 className='title-payments'>Pagos</h1>
      <div className='payments'>
        <div className='avatar-payments'/>
        <h3 style={{color:'red'}}>Pago denegado</h3>
      </div>
      <div className='payments'>
        <div className='avatar-payments'/>
        <h3>Pago aceptado</h3>
      </div>
      <div className='payments'>
        <div className='avatar-payments'/>
        <h3>Pago aceptado</h3>
      </div>
    </div>
  )
};

export default Payments;