import React from 'react';
import './index.css';
import CardCalendar from './CardCalendar';

const Calendars = () => {

  return (
    <div className='container-calendars'>
      <h1>Calendario</h1>
        <div className='card-calendar'>
          <CardCalendar/>
      </div>
    </div>
  )
};

export default Calendars;