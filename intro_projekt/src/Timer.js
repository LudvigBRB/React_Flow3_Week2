// import React, { useState, useEffect } from "react";
// import "./App.css";

//Kig på Counter.js
//gør helt ligesom den, men twist den
//const [minute, setMinute] = setMinute(min = new Date().getMinutes());

// function Timer() {
//   // var hours = new Date().getHours(); //Current Hours
//   // var min = new Date().getMinutes(); //Current Minutes
//   // var sec = new Date().getSeconds(); //Current Seconds

import React, { useState, useEffect } from "react";

export default function Counter() {
  const [sec, setSec] = useState(new Date().getSeconds());
  const [min, setMin] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  const [runTimer, setRunTimer] = useState(false);

  useEffect(
    function() {
      if (runTimer === false) {
        //returnere hvis false, så kører useEffect ikke
        return;
      }
      const clear = setInterval(() => {
        setSec(sec => new Date().getSeconds());
        setMin(min => new Date().getMinutes());
        setHour(hour => new Date().getHours());
      }, 500);

      //Hvis nødvending, Clean up code
      return () => {
        console.log("Cleaning up");
        clearInterval(clear);
      };
    },
    [runTimer]
  );
  //ved klik på knap bliver runCounter true, useEffect kører
  return (
    <div>
      <h2>Timer Demo</h2>
      <button onClick={() => setRunTimer(!runTimer)}>Start Timer</button>
      <h2>
        {hour} : {min} : {sec}
      </h2>
    </div>
  );
}
