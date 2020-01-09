import React from "react";

export const Form = ({
  destination,
  isRoundTrip,
  departDate,
  passengerName,
  passengerBirthday,
  numPassengers,
  numBags
}) => {
  //   return React.createElement("div", {}, [
  //     React.createElement("form", {}, [
  //       React.createElement("h2", {}, "Destination: " + destination),
  //       React.createElement("h2", {}, "Round Trip? " + isRoundTrip),
  //       React.createElement("h2", {}, "Departure Date: " + departDate),
  //       React.createElement("h2", {}, "Passenger Name: " + passengerName),
  //       React.createElement("h2", {}, "Birthday: " + passengerBirthday),
  //       React.createElement("h2", {}, "Passengers: " + numPassengers),
  //       React.createElement("h2", {}, "Bags: " + numBags)
  //     ])
  //   ]);

  return (
    <div>
      <form>
        <h2>Destino: {destination}</h2>
        <h2>Fecha de Ida: {departDate.toString()}</h2>
        <h2>Ida y Vuelta? {isRoundTrip}</h2>
        <h2>Nombre de Pasajero: {passengerName}</h2>
        <h2>Fecha de Nacimiento: {passengerBirthday.toString()}</h2>
        <h2>Pasajeros: {numPassengers}</h2>
        <h2>Maletas: {numBags}</h2>
      </form>
    </div>
  );
};
