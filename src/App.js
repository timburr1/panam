import React from "react";
import ReactDOM from "react-dom";
import TripForm from "./TripForm";

const App = () => {
  return (
    <div>
      <h1 id="root">¡Bienvenidos a Aerolínea PanAmerica!</h1>
      <TripForm />
    </div>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
