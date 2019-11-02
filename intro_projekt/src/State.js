import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * Opgaver til flow 3, 29/10
 * State med usestate og effect
 * 1)
 */

//export default

function Task(props) {
  const [count, setCount] = useState(props.initial);
  //todo: objekt til data, setTodo sætter dataeb

  //useEffect, placer callback funktion inde i denne, afslut med return for det rydder op
  const [todo, setTodo] = useState({ title: "" });
  useEffect(() => {
    function fetching() {
      fetch("https://jsonplaceholder.typicode.com/users/" + count)
        .then(res => res.json())
        .then(data => setTodo(data))
        .catch(err => console.log("Der skete en fejl: " + err));
    }
    fetching();
  }, [count]);

  useEffect(() => {
    function store() {
      localStorage.setItem("count", count);
      localStorage.getItem("count"); //Returns value as a string
    }
  }, [count]);

  return (
    <div>
      <p>DU klikkede {count} gange</p>
      <button onClick={() => setCount(count + props.counter)}>
        Tryk her for at inkremente
      </button>
      <button onClick={() => setCount(count - props.counter)}>
        Tryk her for at dekremente
      </button>
      <p>Navn: {todo.name}</p>
    </div>
  );
}

function State() {
  return (
    <div className="state">
      <p>Det virkede!</p>
      <Task initial={3} counter={1} />
    </div>
  );
}

export default State;
