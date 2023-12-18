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
      let newPair = [newDate.getMonth(), newDate.getFullYear()];
      monthsArray.push(newPair);
    }
    setMonths(monthsArray);
  };

  return (
    <div>
      {months.map((ele, index) => (
        <Calendar key={index} reqMonths={ele[0]} reqYear={ele[1]} />
      ))}
    </div>
  );
}

export default App;
