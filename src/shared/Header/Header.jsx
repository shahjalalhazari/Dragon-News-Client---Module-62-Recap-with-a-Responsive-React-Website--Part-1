// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "../../../public/logo.png";
import moment from "moment/moment";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="text-center my-5">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <p className="mt-3">Journalism Without Fear or Favour</p>
      <p className="mt-0">
        <strong>{moment().format("dddd, MMMM D, gggg")}</strong>
      </p>
    </Container>
  );
};

export default Header;
