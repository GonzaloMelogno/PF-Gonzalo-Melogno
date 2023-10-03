import React from 'react'
import { Card,CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({id,nombre,imagen,detalle,precio,cantidad,categoria}) => {
  return(<div key={id}>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
      {detalle}<br />
    $ {precio}<br />
    Stock: {cantidad}
      </Card.Text>
      <Link to={`/item/${id}`}>
      <Button variant="primary">Ver Detalle</Button>
      </Link>
    </Card.Body>
  </Card>
  </CardGroup>
  </div>
);
}

export default Item