import { LuBadge, LuGlobe2, LuLightbulb } from "react-icons/lu";
import "../Css/about-page.css";
import StoryImage from "../assets/albertowatchemaker.webp";
import JohnAlberto from "../assets/john.webp";
import IssacMary from "../assets/mary.webp";
import { useLocation , Link} from "react-router-dom";
import { sectionVariants } from "../constants";

const Hero = () => (




  
  <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  variants={sectionVariants}
  className="hero" id="#hero">
    <motion.h1
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    >About Us</motion.h1>
    <motion.p
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    
    >Empowering People with Premium, <span style={{color:"var(--accent-color)"}}>High-Quality Watches</span></motion.p>
    <motion.p
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    
    >
      Your ultimate destination for luxury and technology-driven Watches that
      combine elegance with innovation.
    </motion.p>
  </motion.section>
);

const Mission = () => (
  <motion.section
  
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  variants={sectionVariants}
  
  className="mission">
    <motion.h2
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    >Our Mission</motion.h2>
    <motion.p
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    
    >
      Our mission is to offer premium Watches that are not just functional but
      also enhance your lifestyle. We strive to deliver a seamless experience
      with top-notch quality and unmatched customer service, making your
      everyday moments extraordinary.
    </motion.p>
  </motion.section>
);

const OurStory = () => (
  <motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  variants={sectionVariants}
  
  className="our-story">
    <motion.div className="our-story-intro">
      <motion.h2
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
      
      >Our Story</motion.h2>
      <motion.p
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
      
      
      >
        Founded in 1985, Alberto Watch began with a simple vision: to bring
        luxury and technology closer to consumers. From our humble beginnings to
        becoming a household name, we&apos;ve always focused on combining style,
        innovation, and excellence. Our dedication to quality and customer
        satisfaction has driven us to where we are today.
      </motion.p>
    </motion.div>

    <img className="story-image" src={StoryImage} alt="Our Story" />
  </motion.section>
);

const CoreValues = () => (
  <section className="core-values">
    <motion.h2
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    >Our Core Values</motion.h2>
    <motion.div  
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
     variants={sectionVariants}
    
    className="core-value-card-flex">
      {CoreValueCardData.map((card) => (
        <CoreValuesCard
          key={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </motion.div>
  </section>
);

const CoreValueCardData = [
  {
    id: "001",
    title: "Integrity",
    description:
      "We believe in doing the right thing, even when no one is watching.",
  },
  {
    id: "002",
    title: "Innovation",
    description:
      "We strive to push boundaries and bring cutting-edge solutions to our customers.",
  },
  {
    id: "003",
    title: "Quality",
    description:
      "We never compromise on quality, ensuring that every watch we sell is top-tier.",
  },
  {
    id: "004",
    title: "Customer Satisfaction",
    description:
      "Our customers are at the heart of everything we do, and we’re dedicated to meeting their needs.",
  },
];

// eslint-disable-next-line react/prop-types
const CoreValuesCard = ({ title, description }) => (
  <motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  variants={sectionVariants}
  className="core-values-card">
    <h4>{title}</h4>
    <motion.p
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    
    >{description}</motion.p>
  </motion.div>
);

const Team = () => (
  <section className="team">
    <motion.h2
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    >Meet Our Team</motion.h2>
    <motion.div className="team-member-cards">
    <motion.div className="team-member">
      
      <img src={JohnAlberto} alt="John Alberto" />

      <motion.div className="team-memeber-text">
      <h3>John Alberto</h3>
      <motion.p className="p-head">Founder & CEO</motion.p>
      <motion.p
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
      
      
      >
        John Alberto is the visionary behind Alberto Watch Company. A master
        watchmaker who blends traditional craftsmanship with modern design,
        John’s passion for horology drives the creation of timeless,
        high-quality timepieces. His dedication to precision and innovation
        ensures every watch is a piece of art, built to last for generations.
      </motion.p>
      </motion.div>
    
    </motion.div>
    <motion.div className="team-member">
      <img src={IssacMary} alt="Issac Mary" />
      <motion.div className="team-memeber-text">
      <h3>Issac Mary</h3>
      <motion.p className="p-head">COO</motion.p>
      <motion.p
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
      
      
      >
        Jane is responsible for day-to-day operations, ensuring everything runs
        smoothly and efficiently.
      </motion.p>
      </motion.div>
     
    </motion.div>
    </motion.div>
  </section>
);

const Achievements = () => (
  <section className="achievements">
    <motion.h2
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    >Our Achievements</motion.h2>
    <ul>
      <li>
        <LuBadge className="achievement-icon" />
       <motion.h2
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       > 2022</motion.h2>
       <motion.p
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       
       > Awarded Best Luxury Product of the Year</motion.p>
      </li>
      <li>
        <LuLightbulb className="achievement-icon"/>
       <motion.h2
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       > 2021</motion.h2>
       <motion.p
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       
       > Recognized as a top innovator in technology</motion.p>
      </li>
      <li>
        <LuGlobe2 className="achievement-icon"/>
       <motion.h2
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       > 2020</motion.h2>
       <motion.p
        initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
       
       
       > Reached 1 million happy customers worldwide</motion.p> 
      </li>
    </ul>
  </section>
);

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


// Testimonial Data
const testimonials = [
  {
    id: 1,
    quote: "You change the way I see luxury Watches now. The quality is unmatched!",
    name: "Mark Johnson"
  },
  {
    id: 2,
    quote: "The customer service is excellent. I highly recommend them!",
    name: "Sarah Smith"
  },
  {
    id: 3,
    quote: "I love the craftsmanship and attention to detail. Worth every penny!",
    name: "Gary Vee"
  },
  {
    id: 4,
    quote: "A truly remarkable experience. I am in awe of the design and functionality.",
    name: "Alex Hormonzi"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); 

      return () => clearInterval(interval); 
    }
  }, [hovered]);

  return (
    <section className="testimonials">
      <motion.h2
       initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
      
      >What Our Customers Say</motion.h2>
      <motion.div
        className="testimonial-carousel"
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)} 
        style={{ position: "relative", overflow: "hidden" }}
      >
        <motion.div
          className="carousel-inner"
          initial={{ x: "100%" }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} className="testimonial-item">
              <motion.p
               initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
              
              
              >&quot;{testimonial.quote}&quot;</motion.p>
              <motion.p
               initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
              
              
              >- {testimonial.name}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};



const CallToAction = () => (
  <section className="about-cta">
    <motion.h2
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    >Start Your Journey with Us</motion.h2>
    <motion.p
     initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={sectionVariants}
    
    
    >
      Explore our range of Watches and experience the luxury and innovation we
      offer. Join thousands of happy customers today!
    </motion.p>
    <Link to="/products" className="about-cta-btn">
      Browse Our Products
    </Link>
  </section>
);

const About = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <motion.div className="about-us">
      <Hero />
      <Mission />
      <OurStory />
      <CoreValues />
      <Team />
      <Achievements />
      <Testimonials />
      <CallToAction />
    </motion.div>
  );
};

export default About;
