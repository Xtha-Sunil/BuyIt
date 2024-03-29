import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">PMS</div>
        <ul className="nav-links">
          {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li> */}
        </ul>
        {/* conditional rendering using && operator */}
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
