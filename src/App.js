import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Form } from "./Form";

const App = () => {
  return (
    <div>
      <header>¡Bienvenidos a Aerolínea PanAmerica!</header>
      <Form
        destination="Madrid, Espana"
        isRoundTrip="true"
        departDate={new Date()}
        returnDate={new Date()}
        passengerName="Tu Nombre"
        passengerGender="m"
        passengerBirthday={new Date(2000, 0, 1)}
        numPassengers="1"
        numBags="1"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
