import React from "react";
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/ShoppingCartContext";


const ItemCount = ({ cantidad, id, precio, nombre }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(1);


  const addItem = () => {
    if (count < cantidad) {
      setCount(count + 1);
   } else alert("Perdon! no tenemos tanto stock");
  };

  const substractItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
 
  const sendToCart = () => {
    setCart((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].cantidad += count;
        console.log(currentItems)
        return updatedItems;
      } else {
        return [...currentItems, {id, nombre, precio, cantidad: count}];
      }
    });
  };

  return (
    <>
      <div className="text-center">
        <Button variant="danger" onClick={substractItem}>
          -
        </Button>
        <span className="m-2 letters" style={{ fontSize: '1.5rem' }}>
          {count}
        </span>
        <Button variant="success" onClick={addItem}>
          +
        </Button>
        <hr />
        {cantidad > 0 ? (
          <button className="boton" variant="primary" onClick={sendToCart}>
            Agregar al carro
          </button>
        ) : (
          <p className="text-muted">Out of stock</p>
        )}
      </div>
    </>
  );
};

export default ItemCount;