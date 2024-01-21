import { Form } from "./Form";
import LOGO_URL from "./images/logo.png";

const App = () => {
  return (
    <>
    <div id="logo">
    <img src={LOGO_URL} width="320" align="right" />
  </div>
      <div>
        <header>¡Bienvenidos a Aerolínea PanAmérica!</header>
        <br />
        <br />
        <Form />
      </div>
      </>
  );
};

export default App
