import React from "react";
import Item from "./Item";

function ItemList({productos}) {
  return (
    <>
        {productos?.map((objetos) => (
          <Item
            key={objetos.id}
            id={objetos.id}
            nombre={objetos.nombre}
            detalle={objetos.detalle}
            precio={objetos.precio}
            cantidad={objetos.cantidad}
            categoria={objetos.categoria}
            imagen={objetos.imagen}
          />
        ))}
    </>
  )}
    
export default ItemList;


