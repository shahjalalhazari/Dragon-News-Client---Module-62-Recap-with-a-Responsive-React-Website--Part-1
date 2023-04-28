// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navitems = () => {
  return (
    <Navbar expand="lg mt-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                <strong>Home</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-link">
                <strong>About</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-link text-">
                <strong>Career</strong>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav className="d-flex gap-3 align-center">
            <FaUserCircle
              className="my-auto"
              style={{ width: "40px", height: "40px" }}
            ></FaUserCircle>
            <Button variant="dark">
              <Link to="/" className="nav-link text-light">
                Login
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navitems;
