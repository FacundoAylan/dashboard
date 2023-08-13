import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './index.css';


const Client = () => {
  const accordionData = [
    { title: 'Cancha A', content: 'Contenido del Item 1.' },
    { title: 'Cancha B', content: 'Contenido del Item 2.' },
    { title: 'Cancha C', content: 'Contenido del Item 3.' },
  ];

  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  return (
    <div className='container-client'>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <h3>{item.title}</h3>
              <FontAwesomeIcon className='icon-accordion' icon={openItemIndex === index ? faChevronUp : faChevronDown} />
            </div>
            {openItemIndex === index && 
              <div className="accordion-content">
                <div>
                  <h3>Usuario</h3>
                  <h3>Miguel</h3>
                  <h3>Pedro</h3>
                  <h3>Juan</h3>
                </div>
                <div>
                  <h3>Fecha</h3>
                  <h3>25/08/2023</h3>
                  <h3>26/09/2023</h3>
                  <h3>27/10/2023</h3>
                </div>
                <div>
                  <h3>Hora</h3>
                  <h3>12:00 a 15:00 hs</h3>
                  <h3>12:00 a 15:00 hs</h3>
                  <h3>12:00 a 15:00 hs</h3>
                </div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  )
};

export default Client;