/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialLogin = () => {
    return (
        <div>
          <h4 className="text-bold">Login With</h4>
          <div className="d-flex flex-column mt-3">
            <Link className="btn btn-outline-primary py-2 mb-2">
              <FaGoogle /> Login With Google
            </Link>
            <Link className="btn btn-outline-dark py-2">
              <FaGithub /> Login With GitHub
            </Link>
          </div>
        </div>
    );
};

export default SocialLogin;