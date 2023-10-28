import React from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


    function NavBar() {
      return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand  href="/">Evermeet Tienda</Navbar.Brand>
              <Nav className="me-auto">
              <Link to={"/"}><div className="navegacion">Home</div></Link>
              <Link to={`/categoria/${"ropa"}`}> <div className="navegacion">Ropa</div> </Link> 
              <Link to={`/categoria/${"juegos"}`}> <div className="navegacion">Juegos</div></Link>
              <Link to={`/categoria/${"cocina"}`}> <div className="navegacion">Cocina</div></Link>
              </Nav>
            </Container>
            <Link to={"/cart"}>
              <CartWidget  /> 
            </Link>
          </Navbar>
        </>
      );
    }
    
    export default NavBar

 