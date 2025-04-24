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
      image: `${Image1}`,
      buttonText: "Shop Luxury",
      buttonLink: "/products/luxury",
    },
    {
      title: "Sport Watches",
      description: "Durable and stylish sport watches for every adventure.",
      image: `${Image1}`,
      buttonText: "Shop Sport",
      buttonLink: "/products/sports",
    },
    {
      title: "Smart Watches",
      description: "The latest in wearable technology.",
      image: `${Image1}`,
      buttonText: "Shop Smart",
      buttonLink: "/products/smart",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % collections.length);
    }, 10000);

    return () => clearInterval(slideInterval);
  }, [collections.length]);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="hero-slide"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={collections[currentSlide].image}
            alt={collections[currentSlide].title}
            className="hero-image"
          />
          <div className="hero-text">
            <h2>{collections[currentSlide].title}</h2>
            <p>{collections[currentSlide].description}</p>
            <Link
              to={collections[currentSlide].buttonLink}
              className="hero-button"
            >
              {collections[currentSlide].buttonText}
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default HeroSection;
