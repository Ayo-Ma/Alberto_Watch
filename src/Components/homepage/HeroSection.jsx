import { useState, useEffect } from "react";
import "../../Css/HeroSection.css";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "/images/luxury/luxury2.webp";
import Image2 from "/images/sport/sport1.avif";
import Image3 from "/images/smart/smartWatch1.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const collections = [
    {
      title: "Luxury Watches",
      description: "Explore our exclusive luxury watch collection.",
      image: Image1,
      buttonText: "Shop Luxury",
      buttonLink: "/products/luxury",
    },
    {
      title: "Sport Watches",
      description: "Durable and stylish sport watches for every adventure.",
      image: Image2,
      buttonText: "Shop Sport",
      buttonLink: "/products/sports",
    },
    {
      title: "Smart Watches",
      description: "The latest in wearable technology.",
      image: Image3,
      buttonText: "Shop Smart",
      buttonLink: "/products/smart",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % collections.length);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, [collections.length]);

  const goPrev = () => setCurrentSlide((s) => (s - 1 + collections.length) % collections.length);
  const goNext = () => setCurrentSlide((s) => (s + 1) % collections.length);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-container">
        <AnimatePresence mode="wait">
          <motion.article
            key={currentSlide}
            className="hero-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="hero-media" aria-hidden>
              <img
                src={collections[currentSlide].image}
                alt={collections[currentSlide].title}
                className="hero-image"
              />
              <div className="hero-gradient" />
            </div>

            <div className="hero-content">
              <div className="hero-kicker">Curated Collections</div>
              <h1 className="hero-title">{collections[currentSlide].title}</h1>
              <p className="hero-desc">{collections[currentSlide].description}</p>
              <div className="hero-actions">
                <Link to={collections[currentSlide].buttonLink} className="hero-cta">
                  {collections[currentSlide].buttonText}
                </Link>
                <Link to="/products" className="hero-secondary" onClick={goNext} aria-label="See next">
                  Discover more
                </Link>
              </div>

              <div className="hero-controls">
                <button onClick={goPrev} aria-label="Previous slide" className="control-arrow">‹</button>
                <div className="dots">
                  {collections.map((_, i) => (
                    <button
                      key={i}
                      className={`dot ${i === currentSlide ? "active" : ""}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button onClick={goNext} aria-label="Next slide" className="control-arrow">›</button>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default HeroSection;
