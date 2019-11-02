import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [runCounter, setRunCounter] = useState(false);

  useEffect(
    function() {
      if (runCounter === false) {
        //returnere hvis false, så kører useEffect ikke
        return;
      }
      const clear = setInterval(() => {
        setCount(count => count + 1);
      }, 500);

      //Hvis nødvending, Clean up code
      return () => {
        console.log("Cleaning up");
        clearInterval(clear);
      };
    },
    [runCounter]
  );
  //ved klik på knap bliver runCounter true, useEffect kører
  return (
    <div>
      <h2>Couter Demo</h2>
      <button onClick={() => setRunCounter(!runCounter)}>Start Timer</button>
      <h2>{count}</h2>
    </div>
  );
}
