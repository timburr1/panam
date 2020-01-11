import React, { useState, useEffect } from "react";
import { Details } from "./Details";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = () => {
  const [destination, setDestination] = useState("Madrid, Espana (MAD)");
  const [isRoundTrip, setRoundTrip] = useState(true);
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [passengerName, setPassengerName] = useState("Tu Nombre");
  const [passengerBirthday, setPassengerBirthday] = useState(
    new Date(2000, 0, 1)
  );
  const [numPassengers, setNumPassengers] = useState(1);
  const [numBags, setNumBags] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = () => {
    event.preventDefault();
    setShowDetails(true);
  };

  const convertDate = date => {
    if (date === null) return null;

    return (
      date.getFullYear() + "/" + date.getMonth() + 1 + "/" + date.getDate()
    );
  };

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
              <option>Arendelle (FRZ)</option>
              <option>Beunos Aires, Argentina (EZE)</option>
              <option>Cuidad Crevase, Alderaan (ALD)</option>
              <option>Habana, Cuba (HAV)</option>
              <option>Madrid, Espana (MAD)</option>
              <option>Mazatlan, Mexico (MZT)</option>
              <option>Meridian, Idaho, USA (KLN)</option>
            </select>
          </h2>
        </label>
        <label htmlFor="departDate">
          <h2>
            Fecha de Ida:
            <DatePicker
              showPopperArrow={false}
              selected={departDate}
              onChange={date => setDepartDate(date)}
              dateFormat="yyyy/MM/dd"
            />
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
        {isRoundTrip === true ? (
          <label htmlFor="returnDate">
            <h2>
              Fecha de Volver:
              <DatePicker
                showPopperArrow={false}
                selected={returnDate}
                onChange={date => setReturnDate(date)}
                dateFormat="yyyy/MM/dd"
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
            <DatePicker
              showPopperArrow={false}
              selected={passengerBirthday}
              onChange={date => setPassengerBirthday(date)}
              dateFormat="yyyy/MM/dd"
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
              id="numBags"
              value={numBags}
              type="number"
              onChange={event => setNumBags(event.target.value)}
            />
          </h2>
        </label>
        <div>
          <button onClick={() => setShowDetails(false)}>Reset</button>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </form>
      {showDetails === true ? (
        <Details
          destination={destination}
          isRoundTrip={isRoundTrip}
          departDate={convertDate(departDate)}
          returnDate={convertDate(returnDate)}
          passengerName={passengerName}
          numPassengers={numPassengers}
          numBags={numBags}
        />
      ) : (
        ""
      )}
    </div>
  );
};
