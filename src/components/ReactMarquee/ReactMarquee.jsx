// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const ReactMarquee = () => {
  return (
    <div className="d-flex gap-3 bg-light p-3 mt-3">
      <Button variant="danger">Latest</Button>
      <Marquee speed={80} pauseOnHover>
        <strong>Match Highlights: </strong> Germany vs Spain — as it happened !
        Match Highlights: Germany vs Spain as...
        <strong>Match Highlights: </strong> Germany vs Spain — as it happened !
        Match Highlights: Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default ReactMarquee;
