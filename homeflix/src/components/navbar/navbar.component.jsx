import React from "react";
import { Navbar, NavbarBrand, Collapse, Nav } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar () {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home Flix</NavbarBrand>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;