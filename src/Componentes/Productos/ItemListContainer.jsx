import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"




function ItemListContainer() {
   
  const {categoria} = useParams();
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    const db = getFirestore();
    const dbtraida = collection(db, "Productos");
    getDocs(dbtraida).then((querySnapshot)=>{
      const products = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(products);
    });
  }, [])

  
  const catFilter = products.filter((producto) => producto.categoria === categoria);
  return(
<div>
{products.length > 0 ? (categoria ? <ItemList productos={catFilter} /> : <ItemList productos={products} />) : <>Cargando...</>}
</div>
  )}
export default ItemListContainer;

