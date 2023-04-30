/* eslint-disable no-unused-vars */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from '../../../shared/RightSide/RightSide'

const Home = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <LeftSide />
          </Col>
          <Col lg={6}>
            <h4 className="text-bold">All News</h4>
          </Col>
          <Col lg={3}>
            <RightSide/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
