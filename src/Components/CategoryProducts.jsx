/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../Css/CategoryProducts.css";
import { useCart } from "./CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SKELETON_COUNT = 8;

const CategoryProducts = () => {
  const { category } = useParams();
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOption, setSortOption] = useState("featured");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const normalizedCategory = category.toLowerCase();

    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const categoryProducts = data[normalizedCategory] || [];
        setProducts(categoryProducts);
        setFilteredProducts(categoryProducts);
      } catch (error) {
        console.error("Error fetching category products:", error);
        setProducts([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const formatPrice = useMemo(
    () => (value) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(Number(value)),
    []
  );

  const withDefaults = (p) => {
    const rating = p.rating ?? (4.3 + ((p.id * 7) % 6) / 10);
    const reviews = p.reviews ?? (40 + (p.id * 13) % 260);
    const badge = p.badge ?? (p.price >= 1000 ? "Premium" : "Best value");
    const highlights =
      p.highlights ??
      (p.technologies?.slice(0, 2).map((t) => t.name) ?? ["Curated pick", "Fast delivery"]);
    return { ...p, rating, reviews, badge, highlights };
  };

  const applySorting = (list) => {
    const sorted = [...list];
    if (sortOption === "priceLowToHigh") sorted.sort((a, b) => a.price - b.price);
    if (sortOption === "priceHighToLow") sorted.sort((a, b) => b.price - a.price);
    if (sortOption === "alphabetical") sorted.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredProducts(sorted);
  };

  useEffect(() => {
    const filtered = products
      .map(withDefaults)
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    applySorting(filtered);
  }, [priceRange, products]);

  useEffect(() => {
    applySorting(filteredProducts);
  }, [sortOption]);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added “${product.name}” to your bag.`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
    });
  };

  const titleCase = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

  return (
    <main className="catPage">
      <header className="catPage__header">
        <div className="catPage__headerInner">
          <p className="catPage__eyebrow">Collections</p>
          <h1 className="catPage__title">{titleCase(category)} Watches</h1>
          <p className="catPage__subtitle">
            Curated picks designed for daily wear — clean design, reliable performance, and comfort.
          </p>

          <div className="catPage__stats" aria-live="polite">
            <span className="catPage__pill">
              {isLoading ? "Loading…" : `${filteredProducts.length} items`}
            </span>
            <span className="catPage__pill">Free returns</span>
            <span className="catPage__pill">Fast delivery</span>
          </div>
        </div>
      </header>

      <section className="catPage__content">
        <div className="catToolbar" aria-label="Filter and sort products">
          <div className="catToolbar__group">
            <label className="catToolbar__label" htmlFor="priceFilter">
              Price
            </label>
            <select
              id="priceFilter"
              className="catToolbar__select"
              onChange={(e) =>
                setPriceRange(
                  e.target.value
                    .split(",")
                    .map((v) => (v === "Infinity" ? Infinity : Number(v)))
                )
              }
              defaultValue="0,Infinity"
              disabled={isLoading}
            >
              <option value="0,Infinity">All prices</option>
              <option value="0,200">Below $200</option>
              <option value="200,500">$200 – $500</option>
              <option value="500,Infinity">Above $500</option>
            </select>
          </div>

          <div className="catToolbar__group">
            <label className="catToolbar__label" htmlFor="sortBy">
              Sort
            </label>
            <select
              id="sortBy"
              className="catToolbar__select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              disabled={isLoading}
            >
              <option value="featured">Featured</option>
              <option value="priceLowToHigh">Price: Low → High</option>
              <option value="priceHighToLow">Price: High → Low</option>
              <option value="alphabetical">A → Z</option>
            </select>
          </div>
        </div>

        {/* Skeletons */}
        {isLoading ? (
          <div className="catGrid" role="list" aria-label="Loading products">
            {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
              <div key={i} className="catCard catCard--skeleton" role="listitem" aria-hidden="true">
                <div className="catCard__media">
                  <div className="sk sk--media" />
                </div>
                <div className="catCard__body">
                  <div className="sk sk--title" />
                  <div className="sk sk--rating" />
                  <div className="sk sk--desc" />
                  <div className="catCard__chips">
                    <span className="sk sk--chip" />
                    <span className="sk sk--chip" />
                    <span className="sk sk--chip" />
                  </div>
                  <div className="catCard__bottom">
                    <div className="sk sk--price" />
                    <div className="sk sk--btn" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="catEmpty">
            <h2 className="catEmpty__title">No matches.</h2>
            <p className="catEmpty__text">
              Try adjusting your price range or sort option to see more options.
            </p>
          </div>
        ) : (
          <div className="catGrid" role="list">
            {filteredProducts.map((raw) => {
              const product = withDefaults(raw);
              return (
                <Link
                  key={product.id}
                  to={`/products/${category}/${product.id}`}
                  className="catCard"
                  role="listitem"
                >
                  <div className="catCard__media">
                    <img src={product.image} loading="lazy" alt={product.name} />
                    <span className="catCard__badge">{product.badge}</span>
                  </div>

                  <div className="catCard__body">
                    <div className="catCard__top">
                      <h3 className="catCard__title">{product.name}</h3>

                      <div className="catCard__rating" aria-label={`Rated ${product.rating} out of 5`}>
                        <span className="catCard__stars" aria-hidden="true">
                          {"★★★★★".slice(0, Math.round(product.rating))}
                          <span className="catCard__starsMuted">
                            {"★★★★★".slice(Math.round(product.rating))}
                          </span>
                        </span>
                        <span className="catCard__ratingText">
                          {product.rating.toFixed(1)} • {product.reviews} reviews
                        </span>
                      </div>
                    </div>

                    <p className="catCard__desc">{product.description}</p>

                    <div className="catCard__chips" aria-label="Key features">
                      {product.highlights.slice(0, 3).map((h, idx) => (
                        <span key={idx} className="catCard__chip">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="catCard__bottom">
                      <p className="catCard__price">{formatPrice(product.price)}</p>

                      <button
                        className="catCard__add"
                        onClick={(e) => handleQuickAdd(e, product)}
                        type="button"
                      >
                        Add to bag
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      <ToastContainer />
    </main>
  );
};

export default CategoryProducts;
