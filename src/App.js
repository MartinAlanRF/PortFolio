import React from "react";
/*Se importa el enrutador*/
import AppRouter from "./routers/AppRouters";
/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
/* Importo mis estilos css */
import './components/styles/style.css';

const App = () => {
  return (
    <AppRouter/>
  )
}

export default App;