// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../shared/Header/Header";
import ReactMarquee from "../../components/ReactMarquee/ReactMarquee";
import Navitems from "../../shared/NavItems/Navitems";
import { Col, Container, Row } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const Main = () => {
  return (
    <>
      <Header></Header>
      <ReactMarquee />
      <Navitems />
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <Categories/>
          </Col>
          <Col lg={6}>Here will be all news.</Col>
          <Col lg={3}>This is Right side</Col>
        </Row>
      </Container>
      {/* <Outlet></Outlet> */}
    </>
  );
};

export default Main;
