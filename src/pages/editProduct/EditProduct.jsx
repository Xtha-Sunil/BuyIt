import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./EditProduct.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://6604da712ca9478ea17e9d6a.mockapi.io/products/${id}`
      );
      setData(response.data);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `https://6604da712ca9478ea17e9d6a.mockapi.io/products/${id}`,
      data
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong, Try again !");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container" style={{ marginTop: "20px" }}>
        <h2>Edit Product</h2>
        <form onSubmit={updateProduct}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              value={data.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              name="image"
              required
              value={data.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              required
              value={data.category}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
