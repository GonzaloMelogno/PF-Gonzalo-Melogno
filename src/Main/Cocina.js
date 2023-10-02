import React from "react";
import Detalle from '../Componentes/Productos/Detalle';
import NavBar from "../Componentes/NavBar/Navbar";

function Cocina() {
  return (
    <div className="Cocina">
      <NavBar></NavBar>
      <h1>Cocina land</h1>
      <Detalle categoria="cocina"></Detalle>
    </div>
  );
}

export default Cocina;