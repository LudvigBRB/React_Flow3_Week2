import React from "react"; //nødvendig for at react virker
import "./App.css";
import pers from "./file2";
import { males, females } from "./file2";

const person = pers;
const { firstName: fn, email: em } = person;

const mf = [...males, ...females];
const mfe = [...males, "Kurt", "Helle", ...females, "Tina"];

//opgave 7
const personV2 = { ...person, friends: mf, phone: 12345678 };
console.log(personV2);

function App2() {
  return (
    <div className="App2">
      <p> {males[0]}</p>
      <p> {fn} </p>
      <p> {em} </p>
      <p>{mf}</p>
      <p>{mfe}</p>
    </div>
  );
}

export default App2; //eksportere App2 så den kan importeres et andet sted
