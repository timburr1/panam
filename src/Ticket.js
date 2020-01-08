class Ticket extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };
  
      //TODO: reset button to go back to the Trip Form
    }
    
    handleReset(event) {
      alert("Returning to homepage.");
      event.preventDafault();
    }
  
    render() {
      return (
          <div>
            <h2>¡Felicidades, estas listo para viajar!</h2>
            <p>Salidiando de Kellen Moore Aeropuerto Intergalactico en Meridian, Idaho. </p>
        </div>
      );
    }
  }
  