import React, { useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookmark, 
  faCalendarAlt, 
  faCog, 
  faCreditCardAlt, 
  faUserCircle 
} from '@fortawesome/free-solid-svg-icons';
import Reserves from './01-Reserves/Reserves';
import Client from './02-Client/Client';
import Messages from './03-Messages/Messages';
import Payments from "./04-Payments/Payments";
import Calendars from './05-Calendar/Calendar';
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {

  const [currentComponent, setCurrentComponent] = useState(<Reserves />);
  const [button, setButton] = useState(null);

  const handleClick = (newComponent, button) => {
    setCurrentComponent(newComponent);
    setButton(button)
  };
  console.log(button)
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
            <button 
              className= {button === 'buttonA'? 'active':'button'}  
              onClick={() => handleClick(<Reserves/>,'buttonA')}
            >
              <div className='info-button'>
                <FontAwesomeIcon icon={faBookmark} className='icons' />
                <h3 className='button-text'>Reservas</h3>
              </div>
            </button>
            <button 
              className= {button === 'buttonB'? 'active':'button'} 
              onClick={() => handleClick(<Client/>, 'buttonB')}
            >
              <div className='info-button'>
                <FontAwesomeIcon icon={faUserCircle} className='icons' />
                <h3 className='button-text'>Datos del cliente</h3>
              </div>
            </button>
            <button 
              className= {button === 'buttonD'? 'active':'button'} 
              onClick={() => handleClick(<Payments/>, 'buttonD')}
            >
              <div className='info-button'>
                <FontAwesomeIcon icon={faCreditCardAlt} className='icons' />
                <h3 className='button-text'>Pagos</h3>
              </div>
            </button>
            <button 
              className= {button === 'buttonE'? 'active':'button'}  
              onClick={() => handleClick(<Calendars/>, 'buttonE')}
            >
              <div className='info-button'>
                <FontAwesomeIcon icon={faCalendarAlt} className='icons' />
                <h3 className='button-text'>Calendario</h3>
              </div>
            </button>
            <button
              className= {button === 'buttonC'? 'active':'button'}  
              onClick={() => handleClick(<Messages/>, 'buttonC')}
            >
              <div className='info-button'>
                <FontAwesomeIcon icon={faCog} className='icons' />
                <h3 className='button-text'>Configuración</h3>
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
