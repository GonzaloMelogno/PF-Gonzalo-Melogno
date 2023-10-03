import React from 'react'
import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({products}) => {
  const { id } = useParams();
  const [product, setProduct ] = useState([]);

  useEffect(() => {
   setProduct(products)
    }, []);

    
  return (
    <>
      {product.map((producto) => (
        <><div key={producto.id}>
          <div>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ borderRadius: 'lg', width: '60%', height: '40%' }} />
          </div>
          <h2>{producto.nombre}</h2>
          <p>{producto.detalle}</p>
          <p>Categoria: {producto.categoria}</p>
          <p>Stock: {producto.cantidad}</p>
          <p>Precio: $ {producto.precio}</p>
        </div><ItemCount cantidad={producto.cantidad} />
        </>

      ))}
    </>

  );
      }

export default ItemDetail