import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";


const ItemCount = ({ cantidad}) => {
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

  return (
    <>
      <div className="text-center">
        <Button variant="danger" onClick={substractItem}>
          -
        </Button>
        <span className="m-2" style={{ fontSize: '1.5rem' }}>
          {count}
        </span>
        <Button variant="success" onClick={addItem}>
          +
        </Button>
        <hr />
        {cantidad > 0 ? (
          <Button variant="primary">
            Add to Cart
          </Button>
        ) : (
          <p className="text-muted">Out of stock</p>
        )}
      </div>
    </>
  );
};

export default ItemCount;