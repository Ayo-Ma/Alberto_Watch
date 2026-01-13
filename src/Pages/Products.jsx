import { Link } from "react-router-dom";
import "../Css/Products.css";
import bg1 from "../assets/categorybg1.webp";
import bg2 from "../assets/categorybg2.webp";
import bg3 from "../assets/categorybg3.webp";
import bg4 from "../assets/categorybg4.webp";
const categories = [
  {
    name: "Luxury Watches",
    slug: "luxury",
    description:
      "Refined pieces built for milestones, meetings, and everyday status—crafted with premium finishes and clean detail.",
    bgImageUrl: bg1,
  },
  {
    name: "Sports Watches",
    slug: "sports",
    description:
      "Made for movement. Durable, comfortable, and precise—built to keep up without looking bulky.",
    bgImageUrl: bg2,
  },
  {
    name: "Smart Watches",
    slug: "smart",
    description:
      "Modern features in a watch you’ll actually want to wear—clean design, practical tracking, effortless everyday use.",
    bgImageUrl: bg3,
  },
  {
    name: "Vintage Watches",
    slug: "vintage",
    description:
      "Classic designs with character. Timeless proportions, heritage styling, and the kind of details you don’t see today.",
    bgImageUrl: bg4,
  },
];

const Products = () => {
  return (
    <main className="categoryPage">
      <header className="categoryPage__hero">
        <div className="categoryPage__heroInner">
          <p className="categoryPage__eyebrow">Collections</p>
          <h1 className="categoryPage__title">
            Find the watch that fits your life.
          </h1>
          <p className="categoryPage__subtitle">
            Explore curated categories—from refined luxury to rugged sport.
          </p>
        </div>
      </header>

      <section className="categoryPage__section">
        <ul className="categoryGrid" role="list">
          {categories.map((category) => (
            <li key={category.slug} className="categoryCard" role="listitem">
              <div className="categoryCard__media">
                <img
                  src={category.bgImageUrl}
                  alt={category.name}
                  loading="lazy"
                />
              </div>

              <div className="categoryCard__content">
                <h2 className="categoryCard__title">{category.name}</h2>
                <p className="categoryCard__desc">{category.description}</p>

                <div className="categoryCard__meta">
                  <span>Curated picks</span>
                  <span className="dot" aria-hidden="true">
                    •
                  </span>
                  <span>Fast delivery</span>
                  <span className="dot" aria-hidden="true">
                    •
                  </span>
                  <span>Easy returns</span>
                </div>

                <Link
                  className="categoryCard__cta"
                  to={`/products/${category.slug}`}
                >
                  Shop {category.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Products;
