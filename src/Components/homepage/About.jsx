import "../../Css/About-Highlight.css";
import WatchGridItem from "./WatchGridItem";
import imge1 from "../../assets/about-grid-1.avif";
import imge2 from "../../assets/about-grid-2.avif";
import imge3 from "../../assets/image-grid-3.webp";
import imge4 from "/images/smart/smartWatch1.webp";
import { Link } from "react-router-dom";

const watchData = [
  {
    image: imge1,
    title: "Luxury Watches",
    description: "Signature pieces for formal moments and everyday status.",
    link: "products/luxury",
  },
  {
    image: imge2,
    title: "Vintage Collection",
    description: "Classic designs with character—restored and authenticated.",
    link: "products/vintage",
  },
  {
    image: imge3,
    title: "Smart Watches",
    description: "Modern tools that still look premium on the wrist.",
    link: "products/smart",
  },
  {
    image: imge4,
    title: "Sport Watches",
    description: "Built for movement—tough, precise, and comfortable.",
    link: "products/sports",
  },
];

const About = () => {
  return (
    <section className="About-Highlight" aria-labelledby="about-title">
      <div className="about-container">
        <header className="about-intro">
          <p className="about-eyebrow">Since 1985</p>
          <h2 id="about-title" className="about-title">
            Watches made to outlast trends.
          </h2>
          <p className="about-subtitle">
            We curate, service, and authenticate timepieces that feel as good as they look—so you can buy
            with confidence, not guesswork.
          </p>

          <div className="about-cta-row">
            <Link to="/about" className="btn btn-primary">
              Explore our story
            </Link>
            <Link to="/products" className="btn btn-ghost">
              Browse collections
            </Link>
          </div>

          <div className="about-trust">
            <div className="trust-item">
              <p className="trust-title">Authenticity-first</p>
              <p className="trust-desc">Every piece is verified before it hits the shelf.</p>
            </div>
            <div className="trust-item">
              <p className="trust-title">In-house service</p>
              <p className="trust-desc">Repairs, sizing, maintenance, and appraisals.</p>
            </div>
            <div className="trust-item">
              <p className="trust-title">Curated, not crowded</p>
              <p className="trust-desc">Tight selection from brands people actually want.</p>
            </div>
          </div>
        </header>

        <div className="about-grid" aria-label="Watch categories">
          {watchData.map((watch, index) => (
            <WatchGridItem
              key={index}
              image={watch.image}
              title={watch.title}
              description={watch.description}
              link={watch.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
