import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import DbProductos from "./DbProductos";


const ItemDetailContainer = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);
 

  useEffect(()=>{
    const products = DbProductos
    setProducts(products);

 
  }, [])

  const catFilter = products.filter((product) => product.id === parseInt(id));
 
  return (
    <>{products.length > 0 ? (id ? <ItemDetail products={catFilter} /> : <ItemDetail products={products} />) : <>Cargando...</>}
    </>
  );
};

export default ItemDetailContainer;

