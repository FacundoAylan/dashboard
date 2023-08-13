import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container-login'>
      <div className='container-sesion'>
          <div className='avatar'/>
          <h2 className='title-sesion'>BIENVENIDO A PADEL CLUB</h2>
          <input 
            className='input-sesion'
            placeholder='E-mail'
          />
          <input 
            className='input-sesion'
            placeholder='Contraseña'
            type='password'
          />
          <NavLink to='/home' className='button-sesion'>
            Ingresar
          </NavLink>
          <NavLink to='/home' className='button-recover'>
            Olvide mi contraseña
        </NavLink>
      </div>
    </div>
  )
};

export default Login;