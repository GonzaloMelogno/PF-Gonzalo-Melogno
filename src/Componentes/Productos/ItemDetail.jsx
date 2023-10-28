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
        <>
        <div className='bk-black'>
        <div key={producto.id}>
          <div  >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className='img-detail' />
          </div>
          <h2  className='letters'>{producto.nombre}</h2>
          <p  className='letters'>{producto.detalle}</p>
          <p className='letters'>Categoria: {producto.categoria}</p>
          <p  className='letters'>Stock: {producto.cantidad}</p>
          <p  className='letters'>Precio: $ {producto.precio}</p>
        </div><ItemCount nombre={producto.nombre} precio={producto.precio} cantidad={producto.cantidad} id={producto.id} />
        </div>
        </>

      ))}
    </>

  );
      }

export default ItemDetail