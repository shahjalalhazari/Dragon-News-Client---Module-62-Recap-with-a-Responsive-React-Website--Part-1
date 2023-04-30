/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  
  // console.log(categories);


  return (
    <Container>
      <h4>All Categories</h4>
      <ul className="categories-list mt-3">
        {categories?.map((category) => (
          <li className="px-4 py-3 mb-2 text-bold" key={category.id}>
            <Link to="/" className="text-secondary">{category.name}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
