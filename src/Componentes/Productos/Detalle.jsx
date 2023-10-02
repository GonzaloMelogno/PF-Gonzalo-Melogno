import React from "react";
import DbProductos from "./DbProductos";
import Producto from "./Producto";

function Detalle(props) {
  const filtro = props.categoria;

  return (
    <>
      {DbProductos.map((p) =>
        filtro === "" ? (
          <Producto
            key={p.id}
            imagen={p.imagen}
            categoria={p.categoria}
            nombre={p.nombre}
            detalle={p.detalle}
            precio={p.precio}
            cantidad={p.cantidad}
          />
        ) : (
          p.categoria === filtro ? (
            <Producto
              key={p.id}
              imagen={p.imagen}
              categoria={p.categoria}
              nombre={p.nombre}
              detalle={p.detalle}
              precio={p.precio}
              cantidad={p.cantidad}
            />
          ) : (
            <></>
          )
        )
      )}
    </>
  );
}

export default Detalle;
