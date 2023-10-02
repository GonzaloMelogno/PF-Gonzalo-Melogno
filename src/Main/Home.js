import React from "react";
import Detalle from '../Componentes/Productos/Detalle';
import NavBar from "../Componentes/NavBar/Navbar";

function Home() {
  return (
    <div className="Home">
      <NavBar></NavBar>
      <h1>Home land</h1>
      <Detalle categoria=""></Detalle>
    </div>
  );
}

export default Home;