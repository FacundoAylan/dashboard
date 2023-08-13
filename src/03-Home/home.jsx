import React, { useState } from "react";
import { FaBuilding, FaCalendar, FaComment, FaSignOutAlt, FaUser, FaWallet } from 'react-icons/fa';
import "./index.css";
import Reserves from './01-Reserves/Reserves';
import Client from './02-Client/Client';
import Messages from './03-Messages/Messages';
import Payments from "./04-Payments/Payments";
import Calendars from './05-Calendar/Calendar';
import { Link } from "react-router-dom";

const Home = () => {

  const [currentComponent, setCurrentComponent] = useState(<Reserves />);

  const handleClick = (newComponent) => {
    setCurrentComponent(newComponent);
  };

  return (
    <div className='container-home'>
      <div className='container-info'>
        <div className='container-button'>
          <div className='container-title'>
            <div className='figura' />
            <h3 className='title-home'>PADEL CLUB</h3>
          </div>
          <div className='container-admin'>
            <div className='window'>
              <div className= 'cuadro1'/>
              <div className= 'cuadro2'/>
              <div className= 'cuadro3'/>
              <div className= 'cuadro4'/>
            </div>
            <h3 className="title-admin">Admin</h3>
          </div>
          <div className='container-buttons'>
            <button className='button' onClick={() => handleClick(<Reserves/>)}>
              <div className='info-button'>
                <FaBuilding className='icons' />
                <h3 className='button-text'>Reservas</h3>
              </div>
            </button>
            <button className='button' onClick={() => handleClick(<Client/>)}>
              <div className='info-button'>
                <FaUser className='icons' />
                <h3 className='button-text'>Datos del cliente</h3>
              </div>
            </button>
            <button className='button' onClick={() => handleClick(<Messages/>)}>
              <div className='info-button'>
                <FaComment className='icons' />
                <h3 className='button-text'>Mensajes</h3>
              </div>
            </button>
            <button className='button' onClick={() => handleClick(<Payments/>)}>
              <div className='info-button'>
                <FaWallet className='icons' />
                <h3 className='button-text'>Pagos</h3>
              </div>
            </button>
            <button className='button' onClick={() => handleClick(<Calendars/>)}>
              <div className='info-button'>
                <FaCalendar className='icons' />
                <h3 className='button-text'>Calendario</h3>
              </div>
            </button>
          </div>
          <button className='button-exit'>
            <div className='info-exit'>
              <FaSignOutAlt className='icons-exit'/>
              <Link to="/login" className='button-text-exit'>Cerrar sesíon</Link>
            </div>
          </button>
        </div>
        <div className='container-data'>
          <div className='container-reserve'>
            <div className='title-reserve'>
              <h3 className="title-name">Hola, martin</h3>
              <div className="avatar-reserver"/>
            </div>
            <div className='container-cambio'>
              {currentComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
