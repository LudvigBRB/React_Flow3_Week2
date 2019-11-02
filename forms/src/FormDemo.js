import React, { useState } from "react";
import "./App.css";

const FormDemo = () => {
  const initialState = { name: "", age: "", email: "", phone: "" };

  const [person, setPerson] = useState(initialState);
  const handleSubmit = evt => {
    evt.preventDefault();
    window.alert(JSON.stringify(person));
    setPerson(initialState);
  };

  const handleInput = event => {
    //ved event
    const target = event.target; //henter target fra klik event
    const id = target.id; //henter ids fra form
    const value = target.value; //henter values fra form
    setPerson({ ...person, [id]: value }); //[id] : value sætter values ind i de korresponderende ids i person
  };

  return (
    <div style={{ marginTop: 25 }}>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <input id="name" type="text" placeholder="Name" value={person.name} />
        <br />
        <input
          id="phone"
          type="text"
          placeholder="Phone"
          value={person.phone}
        />
        <br />
        <input id="age" type="text" placeholder="Age" value={person.age} />
        <br />
        <input
          id="email"
          type="text"
          placeholder="email"
          value={person.email}
        />
        <br />
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
};

export default FormDemo;
