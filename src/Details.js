import React, { useState, useEffect } from "react";

export const Details = ({
  destination,
  isRoundTrip,
  departDate,
  returnDate,
  passengerName,
  numPassengers,
  numBags
}) => {
  return (
    <div className="trip-details">
      <h2>Felicidades, {passengerName}, estas listo para Viajar!</h2>
      <h2>Destino: {destination}</h2>
      <h2>
        Saliendo de Kellen Moore Aeropuerto Intergalactico en {departDate}
      </h2>
      {isRoundTrip === true ? <h2>Volviendo en {returnDate}</h2> : ""}
      <h2>Pasajeros: {numPassengers}</h2>
      <h2>Maletas: {numBags}</h2>
      <h2>
        Explosivos son prohibidos
        <br />
        Favor de llegar 1 hora temprano para el vuelo.
      </h2>
    </div>
  );
};
