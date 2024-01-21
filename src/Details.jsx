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
  const calculatePrice = (destination, isRoundTrip, numPassengers) => {
    var basePrice;

    switch (destination) {
      case "Arendelle (FRZ)":
        basePrice = 240.0;
        break;
      case "Boise, Idaho, USA (BOI)":
          basePrice = 25.0;
          break;
      case "Buenos Aires, Argentina (EZE)":
        basePrice = 325.0;
        break;
      case "Ciudad Grieta, Alderaan (ALD)":
        basePrice = 1000000.0;
        break;
      case "Habana, Cuba (HAV)":
        basePrice = 189.0;
        break;
      case "La Paz, Bolivia (LAP)":
        basePrice = 255.15;
        break;
      case "Lima, Perú (LIM)":
        basePrice = 320.32;
        break;
      case "Madrid, España (MAD)":
        basePrice = 540.28;
        break;
      case "Mante, México (MNT)":
        basePrice = 199.99;
        break;
      case "Mazatlán, México (MZT)":
        basePrice = 350.5;
        break;
      case "Santiago, Chile (SNT)":
        basePrice = 720.12;
        break;
      default:
        console.error("Invalid destination: " + destination);
        return 0.0;
    }

    if (isRoundTrip === true) basePrice *= 2;

    return " $" + (basePrice * numPassengers).toFixed(2);
  };

  return (
    <div className="trip-details">
      <h2>¡Felicidades, {passengerName}, estás listo para viajar!</h2>
      <br />
      <h2>Destino: {destination}</h2>
      <h2>
        Saliendo del Aeropuerto de Boise (BOI) en {departDate}
      </h2>
      {isRoundTrip === true ? <h2>Volviendo {returnDate}</h2> : ""}
      <h2>Pasajeros: {numPassengers}</h2>
      <h2>Maletas: {numBags}</h2>
      <br />
      <h2>
        Explosivos son prohibidos.
        <br />
        Favor de llegar una hora temprano para el vuelo.
      </h2>
      <br />
      <br />
      <h1>
        Precio del boleto:
        {calculatePrice(destination, isRoundTrip, numPassengers)}
      </h1>
    </div>
  );
};
