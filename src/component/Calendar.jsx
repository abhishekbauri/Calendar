/* eslint-disable react/prop-types */
import { useState } from "react";
import "./calendar.css";

const Calendar = (props) => {
  const { reqMonths, reqYear } = props;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  let isToday;

  const renderCalendar = () => {
    const year = reqYear;
    const month = reqMonths;
    const days = daysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendarArray = [];

    for (let i = 0; i < firstDay; i++) {
      calendarArray.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }

    for (let day = 1; day <= days; day++) {
      const currentDate = new Date(year, month, day);
      isToday = currentDate.toDateString() === new Date().toDateString();
      const isSelected =
        currentDate.toDateString() === selectedDate.toDateString();

      calendarArray.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? "today" : ""} ${
            isSelected ? "selected" : ""
          }`}
          onClick={() => handleDateClick(currentDate)}
        >
          {day}
        </div>
      );
    }

    return calendarArray;
  };

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>
          {monthsArray[reqMonths]} {reqYear}
        </h2>
      </div>
      <div className="day-names">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
