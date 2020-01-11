import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form } from "./Form";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>¡Bienvenidos a Aerolínea PanAmerica!</header>
        <br />
        <br />
        <Form />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
