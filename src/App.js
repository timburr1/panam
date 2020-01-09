import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
//import Form from "./Form";

const Form = ({destination, isRoundTrip, departDate, passengerName, passengerBirthday, numPassengers, numBags}) => {    
    
  return React.createElement("div", {}, [
      React.createElement("form", {}, [
        React.createElement("h2", {}, "Destination: " + destination),
        React.createElement("h2", {}, "Round Trip? " + isRoundTrip),
        React.createElement("h2", {}, "Departure Date: " + departDate),
        React.createElement("h2", {}, "Passenger Name: " + passengerName),
        React.createElement("h2", {}, "Birthday: " + passengerBirthday),
        React.createElement("h2", {}, "Passengers: " + numPassengers),
        React.createElement("h2", {}, "Bags: " + numBags),
      ])
  ])
};

const App = () => {

  return React.createElement("div", {}, [
    React.createElement("header", {}, "¡Bienvenidos a Aerolínea PanAmerica!"),
    React.createElement(Form, {destination: "Madrid, Espana", isRoundTrip: true, departDate: new Date(), returnDate: new Date(),
    passengerName: "Tu Nombre", passengerGender: 'm', passengerBirthday: new Date(1, 1, 2000), numPassengers: 1, numBags: 1}, )
  ]); 
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));