import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
//import Form from "./Form";

const Form = () => {    
    
  return React.createElement("div", {}, [
      React.createElement("form", {}, ["Form goes here."]),
  ])
};

const App = () => {

  //TODO: Router element not working properly
  return React.createElement("div", {}, [
    React.createElement("header", {}, "¡Bienvenidos a Aerolínea PanAmerica!"),
    React.createElement(Form)
  ]); 
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));