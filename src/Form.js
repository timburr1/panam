const Form = () => {    
    
    return React.createElement("div", {}, [
        React.createElement("form", {}, ["Form goes here."]),
    ])
};

export default Form;

/*<form onSubmit={this._handleSubmit}>        
        Destino: {<input type="text" value={destination} /><br /><br /> 
        <div className="radio">
          <label>
            <input 
              type="radio" 
              name="isRoundTrip" 
              value="true"
              checked={isRoundTrip === true}
              onChange={this._handleRadio} />
            Ida y Vuelta
          </label>
       </div>
       <div className="radio">
         <label>
           <input 
             type="radio" 
             name="isRoundTrip" 
             value="false"
             checked={isRoundTrip === false}
             onChange={this._handleRadio} />
           Solo Ida
         </label>
    </div> 
        DEPART DATE; RETURN DATE <br />< br />
        ¿Cual es tu apellido? <input type="text" value={passengerName} /><br /><br />
        Fecha de nacimiento <input type="date" value={passengerBirthday} /><br/><br/> 
        ¿Cuántos pasajeros? <input type="number" value={numPassengers} /><br /><br />
    ¿Cuántas maletas? <input type="number" value={numBags} /><br/><br/> 
        <button type="submit">Submit</button>
      </form>*/