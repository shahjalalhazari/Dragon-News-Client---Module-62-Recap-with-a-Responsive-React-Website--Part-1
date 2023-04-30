/* eslint-disable no-unused-vars */
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className="mt-4 mb-5">
      <h4 className="text-bold">Login With</h4>
      <Card className="w-100 mt-3">
        <ListGroup variant="flush">
          <Link
            to="https://www.facebook.com/shahjalalhazari0/"
            className="rounded-top icons"
            target="_blank"
          >
            <ListGroup.Item className="py-3">
              <span className="sm-icon text-white" id="facebook">
                <FaFacebookF />
              </span>{" "}
              Facebook
            </ListGroup.Item>
          </Link>
          <Link
            to="https://github.com/shahjalalhazari"
            className="icons"
            target="_blank"
          >
            <ListGroup.Item className="py-3">
              <span className="sm-icon text-white" id="github">
                <FaGithub />
              </span>{" "}
              Github
            </ListGroup.Item>
          </Link>
          <Link
            to="https://www.instagram.com/shahjalalhazari/"
            className="rounded-bottom icons"
            target="_blank"
          >
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
