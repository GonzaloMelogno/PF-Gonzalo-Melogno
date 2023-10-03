import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import DbProductos from "./DbProductos";
import { useState, useEffect } from "react";




function ItemListContainer() {
  const {categoria} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const products = DbProductos
    setProducts(products);

 
  }, [])

  
  const catFilter = products.filter((producto) => producto.categoria === categoria);
  return(
<div>
{products.length > 0 ? (categoria ? <ItemList productos={catFilter} /> : <ItemList productos={products} />) : <>Cargando...</>}
</div>
  )}
export default ItemListContainer;

