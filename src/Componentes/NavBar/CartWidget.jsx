import React from "react";
import { CartContext } from "../context/ShoppingCartContext.jsx";
import { useContext } from "react";


const CartWidget = () => {

  const {cart, setCart} = useContext(CartContext);

  const quantity = cart.reduce ((acc, currentItems) => {
    return acc + currentItems.cantidad;
  }, 0);

  return (
    <>
    <div>
    <span class="material-symbols-outlined">
shopping_cart_checkout
</span>
      {quantity}
    </div>
    </>
  );
};

export default CartWidget;