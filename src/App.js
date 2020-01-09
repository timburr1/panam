import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

const App = () => {
  //const { destination, isRoundTrip, departDate, returnDate, passengerName, passengerGender, numPassengers, numBags } = trip;

  return (
    <div>      
      <h1>¡Bienvenidos a Aerolínea PanAmerica!</h1> 
        
      {/* <form>
        Destino: <input id="destination" type="text" value={destination} placeholder="Tu destino" /><br /><br />
        <input type="radio" value={isRoundTrip}  checked /> Solo Ida 
        <input type="radio" value={!isRoundTrip} /> Ida y Vuelta<br /><br />
        DEPART DATE; RETURN DATE <br />
        ¿Cual es tu apellido? <input type="text" id="passengerName" value={passengerName} placeholder="Tu nombre"/><br /><br />
        Fecha de nacimiento <input type="date" id="passengerBirthday" value={passengerBirthday} /><br/><br/>
        ¿Cuántos pasajeros? <input type="number" id="numPassengers" value={numPassengers} /><br /><br />
        ¿Cuántas maletas? <input type="number" id="numBags" id={numBags} /><br/><br/>
      </form>  */}
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
