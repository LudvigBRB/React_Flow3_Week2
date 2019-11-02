import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Task from "./State";
import Time from "./Timer";
import Counter from "./Counter";
import List from "./ListDemoApp";

//brug nedenstående til ALLE klasser i handleSelect
let app = <App />;

//brug denne metode til mange små opgaver
const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      {" "}
      {/* se nedenunder */}
      <a href="/" className="x" id="app1">
        {/* link til siden */}
        App {/* navn på link */}
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        App2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        App3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="state">
        state
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="time">
        tid
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="counter">
        counter
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="list">
        list
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      {
        /* baseret på valgt link ovenfor vælges en af disse klasser */
      }
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "state":
      app = <Task />;
      break;
    case "time":
      app = <Time />;
      break;
    case "counter":
      app = <Counter />;
      break;
    case "list":
      app = <List />;
      break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root")); //root div i index.html
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
