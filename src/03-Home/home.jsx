import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookmark, 
  faCalendarAlt, 
  faCog, 
  faCreditCardAlt,  
} from '@fortawesome/free-solid-svg-icons';
import Reserves from './01-Reserves/Reserves';
import Payments from "./02-Payments/Payments";
import Calendars from './03-Calendar/Calendar';
import Messages from './04-Setting/Setting';
import { Link } from "react-router-dom";

import "./index.css";

const Home = () => {

  const [currentComponent, setCurrentComponent] = useState(<Reserves />);
  const [button, setButton] = useState('buttonA');

  const handleClick = (newComponent, button) => {
    setCurrentComponent(newComponent);
    setButton(button)
  };
  
  return (
    <div className='container-home'>
      <div className='container-info'>
        <div className='container-button'>
          <div className='container-title'>
            <div className='figura' />
            <h3 className='title-home'>PADEL Club</h3>
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
              <h3 className="title-name">Hola, Martin</h3>
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
