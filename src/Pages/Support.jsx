import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Css/SupportPage.css";
import { sectionVariants } from "../constants";
import { ToastContainer, toast } from "react-toastify"; 
import { Link, useLocation } from "react-router-dom";

const SupportPage = () => {


  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);





  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackData, setFeedbackData] = useState({
    rating: "",
    comments: "",
  });

  const toggleContactForm = () => {
    setContactFormVisible(!contactFormVisible);
  };

  const toggleFeedback = () => {
    setFeedbackVisible(!feedbackVisible);
  };

 
  const showToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };


  const validateContactForm = () => {
    const { name, email, message } = contactFormData;
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return false;
    }
    return true;
  };


  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
   
      showToast("Message sent successfully!");
      setContactFormData({ name: "", email: "", message: "" });
    }
  };

 
  const validateFeedbackForm = () => {
    const { rating, comments } = feedbackData;
    if (!rating || !comments) {
      toast.error("Please provide a rating and comments.");
      return false;
    }
    return true;
  };

  const handleFeedbackFormSubmit = (e) => {
    e.preventDefault();
    if (validateFeedbackForm()) {
      
      showToast("Thank you for your feedback!");
      setFeedbackData({ rating: "", comments: "" });
    }
  };

  return (
    <div className="support-page">
      <div className="support-hero">
        <motion.h1
          className="support-title"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={sectionVariants}
        >
          Support Center
        </motion.h1>
      </div>

      <motion.section
        className="faq"
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>How do I return a product?</strong>
            <p>
              To return a product, please visit our{" "}
              <Link to="/returns">Returns</Link> page for instructions.
            </p>
          </li>
          <li>
            <strong>How can I track my order?</strong>
            <p>
              You can track your order by visiting your{" "}
              <Link to="/orders">Order History</Link>.
            </p>
          </li>
          <li>
            <strong>What is the warranty on your products?</strong>
            <p>
              Our watches come with a 2-year warranty, which covers
              manufacturing defects. Learn more on our{" "}
              <Link to="/policies#warranty-policy">Warranty</Link> page.
            </p>
          </li>
        </ul>
        <button onClick={toggleContactForm} className="contact-btn">
          Need More Help? Contact Us
        </button>
      </motion.section>

 
      <motion.section
        className="knowledge-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <h2>Knowledge Base</h2>
        <p>Explore helpful articles on how to care for your watch, set time zones, and more:</p>
        <ul>
          <li><Link to="/blog/1">How to Take Care of Your Watch</Link></li>
          <li><Link to="/blog/2">Setting Time Zones on Your Watch</Link></li>
          <li><Link to="/blog/3">Cleaning Tips for Your Watch</Link></li>
        </ul>
      </motion.section>


      <motion.section
        className="feedback-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <button onClick={toggleFeedback} className="accordion-btn">
          {feedbackVisible ? "Hide Feedback Form" : "Leave Feedback"}
        </button>
        <motion.div
          initial="hidden"
          animate={feedbackVisible ? "visible" : "hidden"}
          variants={{
            hidden: { height: 0, opacity: 0 },
            visible: { height: "auto", opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          {feedbackVisible && (
            <div className="feedback-content">
              <h2>Feedback</h2>
              <form onSubmit={handleFeedbackFormSubmit}>
                <label>
                  Rate Us
                  <select
                    value={feedbackData.rating}
                    onChange={(e) =>
                      setFeedbackData({
                        ...feedbackData,
                        rating: e.target.value,
                      })
                    }
                  >
                    <option value="">--Select Rating--</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </label>
                <label>
                  Comments
                  <textarea
                    value={feedbackData.comments}
                    onChange={(e) =>
                      setFeedbackData({
                        ...feedbackData,
                        comments: e.target.value,
                      })
                    }
                    placeholder="Your Feedback"
                    rows="5"
                  />
                </label>
                <button type="submit">Submit Feedback</button>
              </form>
            </div>
          )}
        </motion.div>
      </motion.section>

      {contactFormVisible && (
        <motion.section
          className="contact-form"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Contact Support</h2>
          <form onSubmit={handleContactFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactFormData.name}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  name: e.target.value,
                })
              }
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactFormData.email}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  email: e.target.value,
                })
              }
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={contactFormData.message}
              onChange={(e) =>
                setContactFormData({
                  ...contactFormData,
                  message: e.target.value,
                })
              }
              required
            />

            <button type="submit">Submit</button>
          </form>
          <button onClick={toggleContactForm} className="close-form">
            Close
          </button>
        </motion.section>
      )}

   
      <ToastContainer />

      <motion.section
        className="support-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={sectionVariants}
      >
        <h2>Other Ways to Reach Us</h2>
        <p>If you prefer, you can reach us through the following:</p>
        <ul>
          <li>Email: <Link to="mailto:support@albertowatches.com">support@albertowatches.com</Link></li>
          <li>Phone: +123 456 7890</li>
          <li>Live Chat: Available on the bottom right of the page</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default SupportPage;
