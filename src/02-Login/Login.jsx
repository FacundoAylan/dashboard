import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [user, setUser] = useState({
    email:'',
    password: '',
  })

  const email = 'admin@gmail.com';
  const password = 'admin1';

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  console.log(user)
  return (
    <div className='container-login'>
      <div className='container-sesion'>
          <div className='avatar'/>
          <h2 className='title-sesion'>BIENVENIDO A PADEL CLUB</h2>
          <input 
            className='input-sesion'
            placeholder='E-mail'
            name='email'
            value={user.email}
            onChange={onChange}
          />
          <input 
            className='input-sesion'
            placeholder='Contraseña'
            name='password'
            type='password'
            value={user.password}
            onChange={onChange}
          />
          {
            email === user.email && password === user.password?
            <NavLink to='/home' className='button-sesion'>
              Ingresar
            </NavLink>:
            <div to='/home' className='button-sesion' disabled={false}>
              Ingresar
            </div>
          }
          <NavLink to='/home' className='button-recover'>
            Olvide mi contraseña
        </NavLink>
      </div>
    </div>
  )
};

export default Login;