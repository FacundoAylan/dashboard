import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './index.css';

const Calendars = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <div className='container-calendars'>
      <h1>Calendario</h1>
        <div className='calendar'>
          <Calendar
            onChange={handleDateChange}
            defaultActiveStartDate={selectedDate}
          />
      </div>
    </div>
  )
};

export default Calendars;