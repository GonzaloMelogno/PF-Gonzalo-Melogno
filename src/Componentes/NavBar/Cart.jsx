import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext, useState, useEffect } from "react";
import Form from "./form";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
       newTotal += item.precio * item.cantidad;
    });
    setTotal(newTotal);
   }, [cart]);

   const handleItemDeletion = (itemDeleted) => {
    setTotal(total - (itemDeleted.precio * itemDeleted.cantidad));
   };
   
   const handleDelete = (id) => {
    const updatedCart = cart.map((item) => {
       if (item.id === id) {
         if (item.cantidad > 1) {
           return { ...item, cantidad: item.cantidad - 1 };
         } else {
           handleItemDeletion(item);
           return null;
         }
       } else {
         return item;
       }
    });
   
    setCart(updatedCart.filter(item => item !== null));
   };
   
   const handleDeleteAll = (id) => {
    const itemsToDelete = cart.filter((item) => item.id === id);
    itemsToDelete.forEach(item => handleItemDeletion(item));
   
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
   };
  

  const condition = () => {
    if (cart.length) {
      return (
        <><h2 className='letters'>Total: $ {total}</h2>
          <div>
            <Form/>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1 className='letters'>
            Su carro está vacio! por favor vea nuestro catálogo
          </h1>
          <Link to={"/"}>
            <Button>
              inicio
            </Button>
          </Link>
        </>
      );
    }
  };

  return (
    <><div className="bk-black">
        <h1 className='letters'>
          Carro
        </h1>
        <div>
          {cart.map((item) => {
            return (
              <React.Fragment  key={item.id}>
                <div className="bk-black">
                  <div className='letters' >{item.nombre}</div>
                  <div className='letters'>cantidad:{item.cantidad}</div>
                  <div className='letters'>
                    precio: $ {item.precio * item.cantidad}
                  </div>
                  <Button className="boton-delete" variant="danger" onClick={() => handleDelete(item.id)}>
                    <span>borrar uno</span>
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteAll(item.id)}>
                    <span>borrar todos</span>
                  </Button>
                </div>
              </React.Fragment>
            );
          })}
          <div>{condition()}</div>
        </div>
        </div>
    </>
  );
};

export default Cart;