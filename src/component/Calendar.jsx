import { useState } from "react";
import "./calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const days = daysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    const calendarArray = [];

    for (let i = 0; i < firstDay; i++) {
      calendarArray.push(<div key={`empty-${i}`} className="empty-cell"></div>);
    }

    for (let day = 1; day <= days; day++) {
      const currentDate = new Date(year, month, day);
      const isToday = currentDate.toDateString() === new Date().toDateString();
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

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button
          onClick={() =>
            setSelectedDate(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() - 1,
                1
              )
            )
          }
        >
          Previous Month
        </button>
        <h2>
          {selectedDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={() =>
            setSelectedDate(
              new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1,
                1
              )
            )
          }
        >
          Next Month
        </button>
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
