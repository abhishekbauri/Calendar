/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Calendar from "./component/Calendar";

import "./App.css";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [months, setMonths] = useState([]);

  useEffect(() => {
    generateMonths();
  }, []);

  const generateMonths = () => {
    const currentMonth = currentDate.getMonth();
    const monthsArray = [];

    for (let i = currentMonth - 6; i <= currentMonth + 6; i++) {
      const newDate = new Date(currentDate);
      newDate.setMonth(i);
      monthsArray.push(newDate);
    }

    setMonths(monthsArray);
    // console.log(monthsArray);
  };
  return (
    <>
      <Calendar />
    </>
  );
}

export default App;
