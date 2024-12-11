/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/SearchOverlay.css";

const SearchOverlay = ({ isVisible, onClose, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchTerm.trim() === "") {
        setFilteredResults([]);
        return;
      }

      try {
        const response = await fetch("/products.json");
        const data = await response.json();

     
        const allProducts = Object.entries(data).flatMap(([category, products]) =>
          products.map((product) => ({ ...product, category }))
        );

        
        const results = allProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredResults(results);
      } catch (error) {
        console.error("Error fetching products for search:", error);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  const handleNavigate = (path) => {
    setSearchTerm(""); 
    setFilteredResults([]);
    onClose();
    navigate(path);
  };

  return (
    <div
      onClick={onClose}
      className={`search-overlay ${isVisible ? "visible" : ""}`}
    >
      <div onClick={(e) => e.stopPropagation()} className="overlay-content">
        <button
          className="close-overlay"
          onClick={onClose}
          aria-label="Close search overlay"
        >
          &times;
        </button>
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Type something..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredResults.length > 0 && (
          <ul className="search-results">
            {filteredResults.map((result) => (
              <li
                key={result.id}
                onClick={() =>
                  handleNavigate(
                    `/products/${result.category}${
                      result.id ? `/${result.id}` : ""
                    }`
                  )
                }
              >
                <img src={result.image} alt={result.name} />
                <div>
                  <p>{result.name}</p>
                  <small>Category: {result.category}</small>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;
