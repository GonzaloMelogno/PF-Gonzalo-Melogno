import React from "react";
import Detalle from '../Componentes/Productos/Detalle';
import NavBar from "../Componentes/NavBar/Navbar";

function Ropa() {
  return (
    <div className="Ropa">
      <NavBar></NavBar>
      <h1>Ropa land</h1>
      <Detalle categoria="ropa"></Detalle>
    </div>
  );
}

export default Ropa;