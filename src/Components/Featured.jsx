import { useState, useEffect, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/featured.css";
import { useCart } from "./CartContext";

const Featured = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await fetch("/featured.json");
        const data = await response.json();
        setFeaturedProducts(data.featured || []);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    fetchFeatured();
  }, []);

  // Simple money formatting (keeps UI clean)
  const formatPrice = useMemo(
    () => (value) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(Number(value)),
    []
  );

  const handleAddToCart = (product) => {
    addToCart(product);

    toast.success(`Added “${product.name}” to your bag.`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
    });
  };

  return (
    <section className="featured" aria-labelledby="featured-title">
      <div className="featured__container">
        <header className="featured__header">
          <div className="featured__headline">
            <p className="featured__eyebrow">Handpicked</p>
            <h2 id="featured-title" className="featured__title">
              Featured pieces people keep coming back for.
            </h2>
            <p className="featured__subtitle">
              Curated for quality, comfort, and everyday wear. No endless scrolling — just the best picks.
            </p>
          </div>

          <div className="featured__meta">
            <div className="featured__metaItem">
              <span className="featured__metaValue">{featuredProducts.length || 0}</span>
              <span className="featured__metaLabel">featured today</span>
            </div>
            <div className="featured__metaItem">
              <span className="featured__metaValue">Free returns</span>
              <span className="featured__metaLabel">on all orders</span>
            </div>
          </div>
        </header>

        <div className="featured__grid" role="list">
          {featuredProducts.map((product) => (
            <article key={product.id} className="featuredCard" role="listitem">
              <div className="featuredCard__media">
                <img
                  className="featuredCard__image"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />
                {/* Optional tag: category if available */}
                {product.category ? (
                  <span className="featuredCard__tag">{product.category}</span>
                ) : (
                  <span className="featuredCard__tag">Featured</span>
                )}
              </div>

              <div className="featuredCard__body">
                <div className="featuredCard__top">
                  <h3 className="featuredCard__title">{product.name}</h3>
                  <p className="featuredCard__desc">{product.description}</p>
                </div>

                <div className="featuredCard__bottom">
                  <div className="featuredCard__priceRow">
                    <p className="featuredCard__price">{formatPrice(product.price)}</p>
                    <p className="featuredCard__microcopy">Ships in 24–48h • Free returns</p>
                  </div>

                  <button
                    type="button"
                    className="featuredCard__cta"
                    onClick={() => handleAddToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Featured;
