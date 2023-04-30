/* eslint-disable no-unused-vars */
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="mt-4 mb-5">
      <h4 className="text-bold">Login With</h4>
      <Card className="w-100 mt-3">
        <ListGroup variant="flush">
          <Link to="" className="rounded-top icons">
            <ListGroup.Item className="py-3">
              <span className="sm-icon text-white" id="facebook">
                <FaFacebookF />
              </span>{" "}
              Facebook
            </ListGroup.Item>
          </Link>
          <Link to="" className="icons">
            <ListGroup.Item className="py-3">
              <span className="sm-icon text-white" id="twitter">
                <FaTwitter />
              </span>{" "}
              Twitter
            </ListGroup.Item>
          </Link>
          <Link to="" className="rounded-bottom icons">
            <ListGroup.Item className="py-3">
              <span className="sm-icon text-white" id="instagram">
                <FaInstagram />
              </span>
              Instagram
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </Card>
    </div>
  );
};

export default SocialMedia;
