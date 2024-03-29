import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  // const [name,setName] = useState('')
  // const [description,setDescription] = useState('')
  // const [image,setImage] = useState('')
  // const [price,setPrice] = useState('')
  // const [category,setCategory] = useState('')
  // console.log(name,"name")
  // console.log(description,"description")
  // console.log(image,"image")
  // console.log(price,"price")
  // console.log(category,"category")
  const [data, setData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name
    // const value = e.target.value
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://6604da712ca9478ea17e9d6a.mockapi.io/products",
      data
    );
    if (response.status === 201) {
      navigate("/");
    } else {
      alert("Something went wrong, Try again !");
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container" style={{ marginTop: "20px" }}>
        <h2>Add New Product</h2>
        <form onSubmit={addProduct}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
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
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label for="price">price:</label>
            <input
              type="number"
              id="price"
              name="price"
              required
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
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
