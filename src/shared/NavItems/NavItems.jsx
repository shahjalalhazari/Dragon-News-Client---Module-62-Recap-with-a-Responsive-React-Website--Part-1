// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import ActiveLink from "../../components/ActiveLink/ActiveLink";

const Navitems = () => {
  return (
    <Navbar expand="lg mt-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <ActiveLink to="/">Home</ActiveLink>
            </Nav.Link>

            <Nav.Link>
              <ActiveLink to="/about">About</ActiveLink>
            </Nav.Link>

            <Nav.Link className="nav-link">
              <ActiveLink to="/career">Career</ActiveLink>
            </Nav.Link>
          </Nav>

          <Nav className="d-flex gap-3">
            <FaUserCircle
              className="my-auto"
              style={{ width: "40px", height: "40px" }}
            ></FaUserCircle>
            <Button variant="dark" size="sm">
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
