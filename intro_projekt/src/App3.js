import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import { names } from "./file2";
import { lotsNames } from "./moreNames";

function Welcome({ name, phone, isMember }) {
  const member = isMember ? "Yes" : "false"; //hvis isMember er sandt skriv "Yes", hvis falsk skriv "false"
  return (
    <p>
      Hello, {name} the phone: {phone} goddag {member}
    </p>
  );
}

Welcome.propTypes = {
  //definerer krav for props
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  isMember: PropTypes.bool
};

Welcome.defaultProps = {
  //isMember er default false
  isMember: false
};

function WelcomePerson(props) {
  //returner dette
  //const lis = lotsNames.map((n) => <p> {n.name} </p>)

  return (
    <p>
      Hi there, {props.person.firstName} {props.person.lastName} whose email is{" "}
      {props.person.email} Gender: {props.person.gender} Phone:{" "}
      {props.person.phone}
    </p>
  );
}

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.bool.isRequired
};

WelcomePerson.defaultProps = {
  gender: true
};

function App3() {
  //funktionen Welcome kaldes på nedenstående måde
  return (
    <div className="App3">
      <p>Hej</p>
      <Welcome name="Anders" />
      <Welcome name="Anne" phone="87654321" isMember={true} />
      <Welcome name="Asger" phone="76543456" isMember={true} />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
      {lotsNames.map(name => (
        <WelcomePerson person={name} />
      ))}
    </div>
    //<WelcomePerson names={lotsNames} />
  );
}

export default App3;
