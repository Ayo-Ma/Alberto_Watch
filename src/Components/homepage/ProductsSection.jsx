import "../../Css/Products-section.css";
import LuxuryImages from "../../assets/about-grid-1.avif";
import VintageImages from "../../assets/roles.webp";
import SmartImages from "../../assets/image-grid-4.avif";
import bg1 from "../../assets/bg1.webp";
import bg2 from "../../assets/bg2.webp";
import bg3 from "../../assets/bg3.webp";
import bg4 from "../../assets/bg4.webp";
import { Link } from "react-router-dom";
import { LuChevronRight } from "react-icons/lu";

const products = [
  {
    id: 1,
    image: LuxuryImages,
    title: "Luxury Watches",
    description: "Signature pieces for events, work, and everyday status.",
    link: "products/luxury",
    bgImage: bg1,
    badge: "Best sellers",
  },
  {
    id: 2,
    image: VintageImages,
    title: "Vintage Watches",
    description: "Timeless classics—restored, authenticated, and ready to wear.",
    link: "products/vintage",
    bgImage: bg2,
    badge: "Collector picks",
  },
  {
    id: 3,
    image: SmartImages,
    title: "Smart Watches",
    description: "Modern features with a premium look—no “techy” plastic vibe.",
    link: "products/smart",
    bgImage: bg3,
    badge: "New arrivals",
  },
  {
    id: 4,
    image: SmartImages,
    title: "Sport Watches",
    description: "Built for movement—durable, precise, and comfortable.",
    link: "products/sports",
    bgImage: bg4,
    badge: "Performance",
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section" aria-labelledby="products-title">
      <div className="products-header">
        <div className="products-headline">
          <p className="products-eyebrow">Collections</p>
          <h2 id="products-title">Find your next watch in seconds.</h2>
          <p className="products-subtitle">
            Browse by style. Each category is curated—so you spend less time scrolling and more time choosing.
          </p>
        </div>

        <Link to="/products" className="btn btn-primary products-top-cta">
          Browse all watches <LuChevronRight className="chev" />
        </Link>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div
              className="product-bg"
              style={{ backgroundImage: `url(${product.bgImage})` }}
              aria-hidden="true"
            />

            <div className="product-content">
              <span className="product-badge">{product.badge}</span>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.description}</p>

              <Link to={`/${product.link}`} className="btn btn-ghost product-link">
                Shop this collection <LuChevronRight className="chev" />
              </Link>
            </div>

            <div className="product-media" aria-hidden="true">
              <img src={product.image} alt="" />
            </div>
          </article>
        ))}
      </div>

      <div className="products-bottom-cta">
        <Link to="/products" className="btn btn-primary">
          Browse all watches <LuChevronRight className="chev" />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSection;
