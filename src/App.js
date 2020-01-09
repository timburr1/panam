import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import Form from "./Form";

const App = () => {

  //TODO: Router element not working properly
  return (
    <div>
      <header>
        <Link to="/">¡Bienvenidos a Aerolínea PanAmerica!</Link>
      </header> 
      <Router>  
        <Form path="/" />
      </Router> 
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
