import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar () {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Home Flix</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;