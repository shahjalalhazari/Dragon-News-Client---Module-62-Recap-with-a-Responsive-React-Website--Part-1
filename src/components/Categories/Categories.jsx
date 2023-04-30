/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  // console.log(categories);

  return (
    <Container>
      <h4 className="text-bold">All Categories</h4>
      {categories?.map((category) => (
        <div className="categories-list my-3 py-3" key={category.id}>
          <h6 className="my-auto">
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-bold ms-5 text-black"
            >
              {category.name}
            </Link>
          </h6>
        </div>
      ))}
    </Container>
  );
};

export default Categories;
