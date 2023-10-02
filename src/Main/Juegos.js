import React from "react";
import Detalle from '../Componentes/Productos/Detalle';
import NavBar from "../Componentes/NavBar/Navbar";

function Juegos() {
  return (
    <div className="Juegos">
      <NavBar></NavBar>
      <h1>Juegos land</h1>
      <Detalle categoria="juegos"></Detalle>
    </div>
  );
}

export default Juegos;