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
    description: "Elegant designs crafted for sophistication.",
    link: "products/luxury",
    bgImage: `url(${bg1})`,
  },
  {
    id: 2,
    image: VintageImages,
    title: "Vintage Watches",
    description: "Timeless pieces with a story to tell.",
    link: "products/vintage",
    bgImage: `url(${bg2})`,
  },
  {
    id: 3,
    image: SmartImages,
    title: "Smart Watches",
    description: "The perfect fusion of cutting-edge technology and timeless design.",
    link: "products/smart",
    bgImage: `url(${bg3})`,
  },
  {
    id: 4,
    image: SmartImages,
    title: "Sport Watches",
    description: "Built for durability and performance in every adventure",
    link: "products/sports",
    bgImage: `url(${bg4})`,
  },
];

const ProductsSection = () => {
  return (
    <section className="products-section">
      <div className="products-intro">
        <h3>
         Explore the World of Watches
        </h3>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="category"
            style={{ backgroundImage: product.bgImage }}
          >
            <div className="cat-text">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <Link to={product.link} className="btn">
                View More{" "}
                <LuChevronRight
                  className="right-arrow"
                  style={{ fontSize: "2rem" }}
                />
              </Link>
            </div>
            <div className="image-cont">
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </div>
      <div className="cta">
        <Link to="/products" className="btn-primary">
          Browse All Watches
          <LuChevronRight
            className="right-arrow"
            style={{ fontSize: "2rem" }}
          />
        </Link>
      </div>{" "}
    </section>
  );
};

export default ProductsSection;
