/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Css/CategoryProducts.css";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [priceRange, setPriceRange] = useState([0, Infinity]); 
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const normalizedCategory = category.toLowerCase();

    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const categoryProducts = data[normalizedCategory] || [];
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };

    fetchProducts();
  }, [category]);


  useEffect(() => {
    const filtered = products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    applySorting(filtered); 
  }, [priceRange, products]);


  useEffect(() => {
    applySorting(filteredProducts);
  }, [sortOption]);

  const applySorting = (productsToSort) => {
    let sorted = [...productsToSort];
    if (sortOption === "priceLowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredProducts(sorted);
  };

  return (
    <div className="category-products">
      <h1>{category} Watches</h1>

      <div className="filter-sort">
        <div className="filter">
          <label>Filter by Price:</label>
          <select
            onChange={(e) => {
              const value = e.target.value.split(",").map(Number); // Parse range
              setPriceRange(value);
            }}
          >
            <option value="0,Infinity">All</option>
            <option value="0,200">Below $200</option>
            <option value="200,500">$200 - $500</option>
            <option value="500,Infinity">Above $500</option>
          </select>
        </div>

        <div className="sort">
          <label>Sort by:</label>
          <select
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">None</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p>No products match your filters.</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} loading="lazy" alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/products/${category}/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
