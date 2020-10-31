import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { NavLink, Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <NavLink
            to="/"
            isActive={({ isExact }) => isExact}
            activeStyle={{ color: "tomato" }}
          >
            Inicio
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            to="/personajes"
            isActive={(props) => {
              if (!props) return false;

              return props.isExact;
            }}
            activeStyle={{ color: "tomato" }}
          >
            Personajes
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};
