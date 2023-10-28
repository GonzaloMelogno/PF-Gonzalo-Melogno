import React from 'react'
import { Card,CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({id,nombre,imagen,detalle,precio,cantidad,categoria}) => {
  return(<div key={id}>
    <CardGroup>
    <Card className='bk-black'>
    <Card.Img className='img-home' variant="top" src={imagen} />
    <Card.Body>
      <Card.Title  className='letters' >{nombre}</Card.Title>
      <Card.Text  className='letters'>
      {detalle}<br />
    $ {precio}<br />
    Stock: {cantidad}
      </Card.Text>
      <Link to={`/item/${id}`}>
      <Button className='letters' variant="primary">Ver Detalle</Button>
      </Link>
    </Card.Body>
  </Card>
  </CardGroup>
  </div>
);
}

export default Item