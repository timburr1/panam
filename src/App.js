import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

const App = () => {
  //const { destination, isRoundTrip, departDate, returnDate, passengerName, passengerGender, numPassengers, numBags } = trip;

  const [destination, updatedDestination] = useState("Meridian, ID");
  const isRoundTrip = useState(true);
  const passengerName = useState("Fake Nombre");
  const passengerBirthday = useState(new Date(1, 1, 2000));
  const numPassengers = useState(1);
  const numBags = useState(1);

  return (
    <div>      
      <h1>¡Bienvenidos a Aerolínea PanAmerica!</h1> 
        
      <form>        
        Destino: <input type="text" value={destination} /><br /><br />
        Solo Ida o Ida y Vuelta?<br /><br />
        DEPART DATE; RETURN DATE <br />< br />
        ¿Cual es tu apellido? <input type="text" value={passengerName} /><br /><br />
        Fecha de nacimiento <input type="date" value={passengerBirthday} /><br/><br/> 
        ¿Cuántos pasajeros? <input type="number" value={numPassengers} /><br /><br />
        ¿Cuántas maletas? <input type="number" value={numBags} /><br/><br/>
        <button>Submit</button>
      </form>  
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
