import React, { useState} from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "./index.css";

const CardCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthDays = [];

  for (let i = 1; i <= daysInMonth + firstDayOfMonth; i++) {
    if (i > firstDayOfMonth) {
      monthDays.push(i - firstDayOfMonth);
    } else {
      monthDays.push('');
    }
  }
  const isCurrentMonth = (date) => {
    const today = new Date();
    return (
      date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    );
  };
  const prevMonth = () => {
    if (!isCurrentMonth(currentDate)) {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    }
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const selectDay = (day) => {
    setSelectedDate(day);
  };
  return (
    <div className="container_calendar">
      <div className="calendar-header">
        <button onClick={prevMonth} className="button-prevMonth">
          <IoIosArrowBack className="card-icons"/>
        </button>
        <h1>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h1>
        <button onClick={nextMonth} className="button-nextMonth">
          <IoIosArrowForward className="card-icons"/>
        </button>
      </div>
      <div className="calendar-flex">
        <div className="calendar-header">Domingo</div>
        <div className="calendar-header">Lunes</div>
        <div className="calendar-header">Martes</div>
        <div className="calendar-header">Miércoles</div>
        <div className="calendar-header">Jueves</div>
        <div className="calendar-header">Viernes</div>
        <div className="calendar-header">Sábado</div>
      </div>
      <div className="container-days">
        {monthDays.map((day, index) => (
          <div 
            key={index}
            className={`calendar-day ${
              isCurrentMonth(currentDate) && day === selectedDate ? 'selected-day' : ''
            }`}
            onClick={() => selectDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCalendar;
