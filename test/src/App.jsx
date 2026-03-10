import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

const ProductApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Catalog</h1>

      {/* Search and Filter Section */}
      <div style={styles.controls}>
        <input
          type="text"
          placeholder="Search product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />

        <div style={styles.filterGroup}>
          {["All", "Electronics", "Clothing", "Home"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                ...styles.filterBtn,
                backgroundColor: category === cat ? '#4A90E2' : '#fff',
                color: category === cat ? '#fff' : '#333',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <div style={styles.categoryTag}>{product.category}</div>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>₹{product.price.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>No products found matching your criteria.</div>
        )}
      </div>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  controls: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '40px',
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px 20px',
    fontSize: '16px',
    border: '2px solid #ddd',
    borderRadius: '25px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  filterGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
  },
  filterBtn: {
    padding: '8px 18px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  categoryTag: {
    fontSize: '12px',
    color: '#888',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  productName: {
    margin: '10px 0',
    fontSize: '1.2rem',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#27ae60',
  },
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '40px',
    color: '#999',
    fontSize: '1.2rem',
  }
};

export default ProductApp;