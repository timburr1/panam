import React, { useState, useEffect } from "react";

export const Form = () => {
  const [destination, setDestination] = useState("Madrid, Espana (MAD)");
  const [isRoundTrip, setRoundTrip] = useState(true);
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengerName, setPassengerName] = useState("Tu Nombre");
  const [passengerBirthday, setPassengerBirthday] = useState(
    new Date(2020, 0, 1)
  );
  const [numPassengers, setNumPassengers] = useState(1);
  const [numBags, setNumBags] = useState(1);

  return (
    <div className="form">
      <form>
        <label htmlFor="destination">
          <h2>
            Destino:
            <select
              id="destination"
              value={destination}
              onChange={event => setDestination(event.target.value)}
              onBlur={event => setDestination(event.target.value)}
            >
              <option>Arendelle (FRZN)</option>
              <option>Beunos Aires, Argentina (EZE)</option>
              <option>Cuidad Crevase, Alderaan (ALD)</option>
              <option>Habana, Cuba (HAV)</option>
              <option>Madrid, Espana (MAD)</option>
              <option>Mazatlan, Mexico (MZT)</option>
              <option>Meridian, Idaho, USA (KLN)</option>
            </select>
          </h2>
        </label>
        <label htmlFor="isRoundTrip">
          <h2>Tipo de Viaje:</h2>
          <h3>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="oneWay"
                  value={isRoundTrip === false}
                  checked={isRoundTrip === false}
                  onChange={event => setRoundTrip(false)}
                />
                Solo Ida
              </label>
              <label>
                <input
                  type="radio"
                  name="roundTrip"
                  value={isRoundTrip === true}
                  checked={isRoundTrip === true}
                  onChange={event => setRoundTrip(true)}
                />
                Ida y Vuelta
              </label>
            </div>
          </h3>
        </label>
        <label htmlFor="departDate">
          <h2>
            Fecha de Ida:
            <input
              id="departDate"
              value={departDate.toString()}
              type="date"
              onChange={event => setDepartDate(event.target.value)}
            />
          </h2>
        </label>
        {isRoundTrip === true ? (
          <label htmlFor="returnDate">
            <h2>
              Fecha de Volver:
              <input
                id="returnDate"
                value={returnDate.toString()}
                type="date"
                onChange={event => setReturnDate(event.target.value)}
              />
            </h2>
          </label>
        ) : (
          ""
        )}
        <label htmlFor="passengerName">
          <h2>
            Nombre de Pasajero:
            <input
              id="passengerName"
              value={passengerName}
              type="text"
              onChange={event => setPassengerName(event.target.value)}
            />
          </h2>
        </label>
        <label>
          <h2>
            Fecha de Nacimiento:
            <input
              id="passengerBirthday"
              value={passengerBirthday.toString()}
              type="date"
              onChange={event => setPassengerBirthday(event.target.value)}
            />
          </h2>
        </label>
        <label htmlFor="numPassengers">
          <h2>
            Pasajeros:
            <input
              id="numPassengers"
              value={numPassengers}
              type="number"
              onChange={event => setNumPassengers(event.target.value)}
            />
          </h2>
        </label>
        <label htmlFor="numBags">
          <h2>
            Maletas:
            <input
              od="numBags"
              value={numBags}
              type="number"
              onChange={event => setNumBags(event.target.value)}
            />
          </h2>
        </label>
        <button>Reset</button>
        <button>Submit</button>
      </form>
    </div>
  );
};
