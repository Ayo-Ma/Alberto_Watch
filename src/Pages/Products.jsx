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
      "Indulge in the epitome of sophistication with our luxury watch collection. Crafted with precision and adorned with exquisite materials, these timepieces are designed for those who seek unparalleled style and quality.",
    bgImageUrl: bg1,
  },
  {
    name: "Sports Watches",
    slug: "sports",
    description:
      "Engineered for durability and performance, our sports watches are the perfect companion for every adventure. Whether you're scaling mountains or diving deep, these rugged yet stylish watches are up for the challenge.",
    bgImageUrl: bg2,
  },
  {
    name: "Smart Watches",
    slug: "smart",
    description:
      "Stay connected, track your fitness, and elevate your tech game with our smart watch collection. Combining cutting-edge technology with sleek designs, these watches are perfect for the modern lifestyle.",
    bgImageUrl: bg3,
  },
  {
    name: "Vintage Watches",
    slug: "vintage",
    description:
      "Celebrate timeless craftsmanship with our vintage watch collection. Each piece tells a story, blending classic designs with enduring quality to bring history to life on your wrist",
    bgImageUrl:bg4,
  },
];

const Products = () => {
  return (
    <div className="all-products">
      <div className="products-hero">
        <h1>Discover Your Perfect Watch, <br /> One Tick at a Time</h1>
        <p>
          From luxury to vintage, explore timeless designs crafted to match your
          style.

        </p>
      </div>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.slug}
            // style={{ background:category.bgImageUrl }}
          >

            <div className="image"> 
              <img src={category.bgImageUrl} alt={category.name} />
            </div>
            <div className="category-slug-text">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <Link className="product-link" to={`/products/${category.slug}`}>
                Shop {category.name}
              </Link>
              </div>
              
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
