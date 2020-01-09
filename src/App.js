import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import { Form } from "./Form";

const App = () => {
  return (
    <div>
      <header>¡Bienvenidos a Aerolínea PanAmerica!</header>
      <br />
      <br />
      <Form />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
