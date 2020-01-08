class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Trip submitted for " + this.state.value);
    event.preventDafault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Destino:
          <input type="text" value={this.state.destination} />
        </label>
        <br />
        // TODO: solo ida v. ida y vuelta // TODO: datepickers
        <label>
          ¿Cual es tu apellido?
          <input type="text" value={this.state.passengerName} />
        </label>
        <br />
        //TODO: nino o nina?
        <label>
          Fecha de nacimiento
          <input type="date" value={this.state.passengerBirthday} />
        </label>
        <br />
        <label>
          ¿Cuántos pasajeros?
          <input type="number" value={this.state.numPassengers} />
        </label>
        <br />
        <label>
          ¿Cuántas maletas?
          <input type="number" value={this.state.numBags} />
        </label>
        <br />
        // TODO: Submit/Reset buttons
      </form>
    );
  }
}
