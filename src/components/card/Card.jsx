import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="card" key={product.id}>
      <img
        src={product.image && product.image}
        alt="Product Image"
        className="product-image"
      />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price}</p>
      </div>
      {/* <a href="/product">See more</a> */}
      <Link to={`/product/${product.id}`}>See More</Link>
    </div>
  );
};

export default Card;
