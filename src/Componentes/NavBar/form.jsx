import React, { useState, useContext } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { cart, setCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || name === "") {
    } else {
      addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail("");
  };

  const db = getFirestore();
  const orderCollection = collection(db, "order");
  const order = {
    name,
    email,
    cart,
  };

  const handleOrder = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId).then(() => {
        setCart([]);
        setOrderId(null);
      }).catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'white' }}>
          Complete los detalles de su orden
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <p>Nunca compartiremos tu información</p>
            </div>
            <label>Comentarios?</label>
            <textarea></textarea>
            <div >
              <button>
                confirmar orden
              </button>
            </div>
          </form>
        </div>
        
          <h1>
            Order ID:
          </h1>
          <h2>{orderId}</h2>
       
        <button onClick={handleOrder}>
          Copy ID
        </button>
      </div>
    </>
  );
};

export default Form;
