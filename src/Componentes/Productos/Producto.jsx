import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";

function Producto(props) {
    
    return(
        <CardGroup>
        <Card style={{ width: '18rem' }} className="d-flex">
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text>
          {props.detalle}<br />
        $ {props.precio}<br />
        Stock: {props.cantidad}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      </CardGroup>
    );
}

export default Producto;