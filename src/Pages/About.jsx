import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../Css/about-page.css";
import { sectionVariants } from "../constants";

import StoryImage from "../assets/albertowatchemaker.webp";
import JohnAlberto from "../assets/john.webp";
import IssacMary from "../assets/mary.webp";

import {
  LuBadgeCheck,
  LuSparkles,
  LuShieldCheck,
  LuHeartHandshake,
  LuChevronRight,
} from "react-icons/lu";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const coreValues = useMemo(
    () => [
      {
        id: "001",
        icon: <LuShieldCheck aria-hidden="true" />,
        title: "Integrity",
        description: "No shortcuts. No fake specs. What you see is what you get.",
      },
      {
        id: "002",
        icon: <LuSparkles aria-hidden="true" />,
        title: "Innovation",
        description: "Modern tech where it matters—without losing timeless design.",
      },
      {
        id: "003",
        icon: <LuBadgeCheck aria-hidden="true" />,
        title: "Quality",
        description: "Materials, finishing, and performance—checked like it’s our name on it.",
      },
      {
        id: "004",
        icon: <LuHeartHandshake aria-hidden="true" />,
        title: "Customer-first",
        description: "Fast support. Clear policies. A brand that actually answers.",
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      { year: "2022", title: "Luxury Product of the Year", detail: "Recognized for design and finishing." },
      { year: "2021", title: "Top Innovation Brand", detail: "For tech-forward wearables & durability." },
      { year: "2020", title: "1M+ Customers", detail: "Trusted by collectors worldwide." },
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      { id: 1, quote: "This changed the way I see premium watches. The finishing is insane.", name: "Mark Johnson" },
      { id: 2, quote: "Customer service is fast, clear, and actually helpful.", name: "Sarah Smith" },
      { id: 3, quote: "Craftsmanship is top-tier. Worth every penny.", name: "Gary Vee" },
      { id: 4, quote: "Minimal design, serious presence. It just feels expensive.", name: "Alex Hormozi" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const t = setInterval(() => setCurrentIndex((i) => (i + 1) % testimonials.length), 3500);
    return () => clearInterval(t);
  }, [hovered, testimonials.length]);

  return (
    <main className="about">
      {/* HERO */}
      <motion.section
        className="about__hero"
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <div className="about__heroInner">
          <p className="about__eyebrow">About Alberto</p>
          <h1 className="about__title">Built for time. Designed for presence.</h1>
          <p className="about__subtitle">
            We create premium watches that feel effortless—clean design, dependable performance,
            and the kind of quality you notice every time you wear it.
          </p>

          <div className="about__heroCtas">
            <Link className="about__btn about__btn--primary" to="/products">
              Browse watches <LuChevronRight aria-hidden="true" />
            </Link>
            <Link className="about__btn about__btn--ghost" to="/support#contact">
              Contact support
            </Link>
          </div>
        </div>
      </motion.section>

      <div className="about__container">
        {/* MISSION */}
        <motion.section
          className="about__panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="about__panelHeader">
            <h2 className="about__h2">Our Mission</h2>
            <p className="about__p">
              To build watches that upgrade your daily life—reliable, premium, and made to last.
              No noise. Just quality you can trust.
            </p>
          </div>

          <div className="about__highlights">
            <div className="highlight">
              <p className="highlight__title">Design-first</p>
              <p className="highlight__text">Minimal shapes, strong presence, zero clutter.</p>
            </div>
            <div className="highlight">
              <p className="highlight__title">Built to last</p>
              <p className="highlight__text">Durability and comfort you feel every day.</p>
            </div>
            <div className="highlight">
              <p className="highlight__title">Service that shows up</p>
              <p className="highlight__text">Clear policies and support that responds.</p>
            </div>
          </div>
        </motion.section>

        {/* STORY */}
        <motion.section
          className="about__story"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="about__storyText">
            <h2 className="about__h2">Our Story</h2>
            <p className="about__p">
              Founded in 1985, Alberto started with one obsession: build watches that look clean,
              feel premium, and perform like a tool—not a toy.
            </p>

            <ul className="about__bullets">
              <li><span className="dot" /> Craftsmanship-first manufacturing</li>
              <li><span className="dot" /> Modern materials, timeless design</li>
              <li><span className="dot" /> Trusted by collectors and everyday wearers</li>
            </ul>
          </div>

          <div className="about__storyMedia">
            <img src={StoryImage} alt="Watchmaking craftsmanship" />
          </div>
        </motion.section>

        {/* CORE VALUES */}
        <motion.section
          className="about__values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <header className="about__sectionHeader">
            <h2 className="about__h2">Core Values</h2>
            <p className="about__p">The standards we won’t compromise—ever.</p>
          </header>

          <div className="about__valueGrid">
            {coreValues.map((v) => (
              <div key={v.id} className="valueCard">
                <div className="valueCard__icon">{v.icon}</div>
                <h3 className="valueCard__title">{v.title}</h3>
                <p className="valueCard__text">{v.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TEAM */}
        <motion.section
          className="about__team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <header className="about__sectionHeader">
            <h2 className="about__h2">Meet the Team</h2>
            <p className="about__p">Small team. Serious standards.</p>
          </header>

          <div className="about__teamList">
            <div className="person">
              <img src={JohnAlberto} alt="John Alberto" />
              <div className="person__text">
                <div className="person__top">
                  <h3>John Alberto</h3>
                  <span className="person__role">Founder & CEO</span>
                </div>
                <p>
                  Master watchmaker focused on precision, finishing, and design discipline.
                  Every model starts with: “Would I wear this daily for 5 years?”
                </p>
              </div>
            </div>

            <div className="person">
              <img src={IssacMary} alt="Issac Mary" />
              <div className="person__text">
                <div className="person__top">
                  <h3>Issac Mary</h3>
                  <span className="person__role">COO</span>
                </div>
                <p>
                  Keeps operations tight: sourcing, quality checks, fulfillment, and customer experience.
                  The goal is simple—no excuses, just consistency.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section
          className="about__achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <header className="about__sectionHeader">
            <h2 className="about__h2">Milestones</h2>
            <p className="about__p">Progress you can measure.</p>
          </header>

          <div className="about__stats">
            {achievements.map((a) => (
              <div key={a.year} className="stat">
                <p className="stat__year">{a.year}</p>
                <p className="stat__title">{a.title}</p>
                <p className="stat__detail">{a.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="about__testimonials"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <header className="about__sectionHeader about__sectionHeader--center">
            <h2 className="about__h2">What customers say</h2>
            <p className="about__p">Real reactions. No marketing fluff.</p>
          </header>

          <div
            className="quote"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p className="quote__text">“{testimonials[currentIndex].quote}”</p>
            <p className="quote__name">— {testimonials[currentIndex].name}</p>

            <div className="quote__dots" aria-label="testimonial pagination">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  className={`dotBtn ${i === currentIndex ? "dotBtn--active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="about__cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          <div className="about__ctaInner">
            <h2 className="about__h2">Ready to find your next daily wear?</h2>
            <p className="about__p">
              Explore luxury, smart, sport, and vintage collections—designed to look clean and feel premium.
            </p>
            <Link className="about__btn about__btn--primary" to="/products">
              Browse products <LuChevronRight aria-hidden="true" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
