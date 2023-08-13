import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Loading = () => {
  return (
    <div className='container-Loading'>
      <div className='Logo'/>
      <h2 className='title'>PADEL CLUB</h2>
      <NavLink to='/login' className='button-Login'>
        Ingresar
      </NavLink>
    </div>
  )
};

export default Loading;