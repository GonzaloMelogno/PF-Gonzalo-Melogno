import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"


const ItemDetailContainer = () => {
  const {id} = useParams();
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

  const catFilter = products.filter((product) => product.id === id);
 
  return (
    <>{products.length > 0 ? (id ? <ItemDetail products={catFilter} /> : <ItemDetail products={products} />) : <>Cargando...</>}
    </>
  );
};

export default ItemDetailContainer;

