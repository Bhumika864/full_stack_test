import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  // Logic: Filter data dynamically on every render
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Product Catalog</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "250px" }}
      />

      {/* Category Filter */}
      <div style={{ marginBottom: "20px" }}>
        {["All", "Electronics", "Clothing", "Home"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginRight: "5px",
              backgroundColor: category === cat ? "#007bff" : "#f0f0f0",
              color: category === cat ? "white" : "black",
              border: "1px solid #ccc",
              cursor: "pointer",
              padding: "5px 10px",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}
            >
              <strong>{product.name}</strong> - {product.category} - ₹
              {product.price}
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default App;
