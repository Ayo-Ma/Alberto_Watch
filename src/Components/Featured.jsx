import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "../Css/Featured.css";
import { useCart } from "./CartContext";

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch("/featured.json");
        const data = await response.json();
        setFeaturedProducts(data.featured);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };

    fetchFeatured();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} has been added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

  return (
    <div className="featured-section">
      <h2>Featured Products</h2>
      <div className="featured-grid">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featured-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <div className="featured-actions">
              <Link to={`/products/${product.category}/${product.id}`} className="details-btn">
                Show Details
              </Link>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Featured;
