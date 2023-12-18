/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import Calendar from "./component/Calendar";

import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [months, setMonths] = useState([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    generateMonths();

    const currentMonth = new Date().getMonth();

    const scrollPosition = 6 * 360;

    // Set the scroll position using scrollTo
    if (calendarRef.current) {
      console.log(calendarRef.current);
      calendarRef.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const generateMonths = () => {
    const currentMonth = currentDate.getMonth();
    const monthsArray = [];

    for (let i = currentMonth - 6; i <= currentMonth + 6; i++) {
      const newDate = new Date(currentDate);
      newDate.setMonth(i);
      let newPair = [newDate.getMonth(), newDate.getFullYear()];
      monthsArray.push(newPair);
    }
    setMonths(monthsArray);
  };

  return (
    <div ref={calendarRef} style={{ overflowY: "scroll", height: "100vh" }}>
      {months.map((ele, index) => (
        <Calendar key={index} reqMonths={ele[0]} reqYear={ele[1]} />
      ))}
    </div>
  );
}

export default App;
