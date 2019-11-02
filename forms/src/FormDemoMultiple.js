import React, { useState } from "react";

function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value; //om type er checkBox eller value input
    const name = target.name; //tag name
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    window.alert(JSON.stringify(reservation));
    setReservation(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>Pay by Credit Card: </label>
        <input
          name="payByCreditCard"
          type="checkbox"
          checked={reservation.payByCreditCard}
        />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          placeholder="First Name"
        />
        <input
          name="lastName"
          value={reservation.lastName}
          placeholder="Last Name"
        />
        <input name="email" value={reservation.email} placeholder="Email" />
        <input name="phone" value={reservation.phone} placeholder="Phone" />
        <input name="street" value={reservation.street} placeholder="Street" />
        <input name="city" value={reservation.city} placeholder="City" />
        <input name="zip" value={reservation.zip} placeholder="Zip" />
        <input
          name="country"
          value={reservation.country}
          placeholder="Country"
        />
        <button>Submit</button>
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
