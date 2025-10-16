import React, { useState } from "react";

const ProductList = () => {
  const products = [
    { name: "Pen", price: 10, category: "Stationery" },
    { name: "Notebook", price: 50, category: "Stationery" },
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Bag", price: 1000, category: "Bags" },
    { name: "T-Shirt", price: 700, category: "Clothing" },
    { name: "Jeans", price: 1500, category: "Clothing" },
    { name: "Sneakers", price: 2500, category: "Shoes" },
    { name: "Sandals", price: 900, category: "Shoes" },
    { name: "Apple", price: 120, category: "Groceries" },
    { name: "Milk", price: 60, category: "Groceries" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Stationery">Stationery</option>
        <option value="Bags">Bags</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Shoes">Shoes</option>
        <option value="Groceries">Groceries</option>
      </select>

      <ul>
        {filteredProducts.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;