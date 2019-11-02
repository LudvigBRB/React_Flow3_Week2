import React, { useState } from "react";

/**
 * App() er et komponent og får komponentet ListDemo() som gives en prop, numbers
 * App() returnerer()
 * ListDemo() får komponent NumberList() og giver den props.number som ListDemo() fik fra App()
 * ListDemo() giver prop til NumberList() og returnerer()
 * NumberList() får prop fra ListDemo(), udfører funktion og returnerer()
 *
 */

function NumberList({ numbers }) {
  //mapper alle elementer i numbers
  console.log("--NUMBERS -->", numbers);
  const listItems = numbers.map(n => <p key={n.toString()}>- {n}</p>);
  return listItems;
}
function ListDemo(props) {
  //Skrives "All numbers passed in via props" og giver props.numbers til NumberList
  console.log(props.numbers);
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  //gives numbers til ListDemo()
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
