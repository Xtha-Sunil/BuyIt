import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/" className="">
            BuyIt
          </Link>
        </div>
        <ul className="nav-links"></ul>
        {location.pathname !== "/addproduct" && (
          <Link to="/addproduct" className="add-product-btn">
            Add Product
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
