import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";


    function NavBar() {
      return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Evermeet Tienda</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Ropa">Ropa</Nav.Link>
                <Nav.Link href="/Juegos">Juegos</Nav.Link>
                <Nav.Link href="/Cocina">Cocina</Nav.Link>
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
      );
    }
    
    export default NavBar