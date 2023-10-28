import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext, useState, useEffect } from "react";
import Form from "./form";
import { Link } from "react-router-dom";

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

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const condition = () => {
    if (cart.length) {
      return (
        <><h2>Total: $ {total}</h2>
          <div>
            <Form/>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1>
            Su carro está vacio! por favor vea nuestro catálogo
          </h1>
          <Link to={"/"}>
            <button>
              inicio
            </button>
          </Link>
        </>
      );
    }
  };

  return (
    <>
        <h1>
          Carro
        </h1>
        <div>
          {cart.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div>
                  <div >{item.nombre}</div>
                  <div>cantidad:{item.cantidad}</div>
                  <div>
                    precio: $ {item.precio * item.cantidad}
                  </div>
                  <button onClick={() => handleDelete(item.id)}>
                    <span>borrar</span>
                  </button>
                </div>
              </React.Fragment>
            );
          })}
          <div>{condition()}</div>
        </div>
    </>
  );
};

export default Cart;