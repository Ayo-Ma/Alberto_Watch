import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "../Css/SupportPage.css";
import { sectionVariants } from "../constants";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";

import {
  LuSearch,
  LuMail,
  LuPhone,
  LuCalendar,
  LuMapPin,
  LuChevronDown,
  LuArrowUpRight,
} from "react-icons/lu";

const SupportPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // simple “FAQ search” (instant filtering)
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const faqs = useMemo(
    () => [
      {
        id: "returns",
        q: "How do returns work?",
        a: "You can return unworn items within 14 days. Keep the packaging and proof of purchase. For steps, see the Returns section in Policies.",
        linkText: "Read returns policy",
        linkTo: "/policies#return-policy",
      },
      {
        id: "shipping",
        q: "How long does delivery take?",
        a: "Orders usually ship within 24–48 hours. Delivery time depends on your location and courier availability.",
        linkText: "Shipping policy",
        linkTo: "/policies#shipping-policy",
      },
      {
        id: "warranty",
        q: "What does the warranty cover?",
        a: "We offer a 2-year warranty for manufacturing defects. It doesn’t cover accidental damage or water damage outside rated resistance.",
        linkText: "Warranty details",
        linkTo: "/policies#warranty-policy",
      },
      {
        id: "tracking",
        q: "How do I track my order?",
        a: "If you have an order number, you’ll see tracking updates as soon as the courier scans the package.",
        linkText: "Go to orders",
        linkTo: "/orders",
      },
    ],
    []
  );

  const filteredFaqs = faqs.filter((f) => {
    const text = `${f.q} ${f.a}`.toLowerCase();
    return text.includes(query.toLowerCase().trim());
  });

  // Contact form
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  // Booking / call form (wire later)
  const [booking, setBooking] = useState({
    fullName: "",
    email: "",
    phone: "",
    type: "visit", // visit | call
    date: "",
    note: "",
  });

  const showToast = (message) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: true,
    });

  const showError = (message) => toast.error(message, { position: "top-right" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const submitContact = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) return showError("Please fill in all fields.");
    if (!emailRegex.test(contact.email)) return showError("Enter a valid email address.");
    showToast("Message received. We’ll reply within 24 hours.");
    setContact({ name: "", email: "", message: "" });
  };

  const submitBooking = (e) => {
    e.preventDefault();
    if (!booking.fullName || !booking.email) return showError("Name and email are required.");
    if (!emailRegex.test(booking.email)) return showError("Enter a valid email address.");
    if (booking.type === "call" && !booking.phone) return showError("Phone number is required for a call.");
    if (booking.type === "visit" && !booking.date) return showError("Choose a preferred date for your visit.");
    showToast(booking.type === "visit" ? "Request sent. We’ll confirm your visit soon." : "Request sent. We’ll call you soon.");
    setBooking({ fullName: "", email: "", phone: "", type: "visit", date: "", note: "" });
  };

  return (
    <main className="support">
      {/* HERO */}
      <section className="support__hero">
        <div className="support__heroInner">
          <motion.h1
            className="support__title"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={sectionVariants}
          >
            Support, without the runaround.
          </motion.h1>
          <p className="support__subtitle">
            Find answers fast, or reach a real person. Book a showroom visit or request a call in seconds.
          </p>

          <div className="support__search" role="search" aria-label="Search support">
            <LuSearch className="support__searchIcon" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search returns, warranty, shipping…"
              type="search"
              aria-label="Search FAQs"
            />
          </div>

          <div className="support__quick">
            <a className="support__quickCard" href="#book-visit">
              <LuCalendar aria-hidden="true" />
              <div>
                <p className="support__quickTitle">Book a visit</p>
                <p className="support__quickText">Get priority service in-store.</p>
              </div>
            </a>

            <a className="support__quickCard" href="#book-visit">
              <LuPhone aria-hidden="true" />
              <div>
                <p className="support__quickTitle">Request a call</p>
                <p className="support__quickText">We’ll help you choose the right watch.</p>
              </div>
            </a>

            <a className="support__quickCard" href="#contact">
              <LuMail aria-hidden="true" />
              <div>
                <p className="support__quickTitle">Message support</p>
                <p className="support__quickText">We reply within 24 hours.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="support__container">
        {/* FAQ */}
        <motion.section
          className="support__section"
          id="faq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          variants={sectionVariants}
        >
          <header className="support__sectionHeader">
            <h2 className="support__h2">FAQs</h2>
            <p className="support__p">Clear answers to the questions people actually ask.</p>
          </header>

          <div className="support__faq">
            {filteredFaqs.length === 0 ? (
              <div className="support__empty">
                <p className="support__emptyTitle">No matches.</p>
                <p className="support__emptyText">Try “returns”, “shipping”, or “warranty”.</p>
              </div>
            ) : (
              filteredFaqs.map((f) => {
                const isOpen = openId === f.id;
                return (
                  <div key={f.id} className={`faqItem ${isOpen ? "faqItem--open" : ""}`}>
                    <button
                      className="faqItem__btn"
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : f.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="faqItem__q">{f.q}</span>
                      <LuChevronDown className="faqItem__chev" aria-hidden="true" />
                    </button>

                    {isOpen && (
                      <div className="faqItem__panel">
                        <p className="faqItem__a">{f.a}</p>
                        <Link className="faqItem__link" to={f.linkTo}>
                          {f.linkText} <LuArrowUpRight aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </motion.section>

        {/* BOOK VISIT / REQUEST CALL */}
        <motion.section
          className="support__section"
          id="book-visit"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          variants={sectionVariants}
        >
          <header className="support__sectionHeader">
            <h2 className="support__h2">Book a visit or request a call</h2>
            <p className="support__p">
              Short form. No back-and-forth. We confirm by email.
            </p>
          </header>

          <div className="support__grid">
            <form className="formCard" onSubmit={submitBooking} aria-label="Book a visit or request a call">
              <div className="formCard__row">
                <label className="formCard__label">
                  Type
                  <select
                    className="formCard__field"
                    value={booking.type}
                    onChange={(e) => setBooking((p) => ({ ...p, type: e.target.value }))}
                  >
                    <option value="visit">Showroom visit</option>
                    <option value="call">Phone call</option>
                  </select>
                </label>

                {booking.type === "visit" ? (
                  <label className="formCard__label">
                    Preferred date
                    <input
                      className="formCard__field"
                      type="date"
                      value={booking.date}
                      onChange={(e) => setBooking((p) => ({ ...p, date: e.target.value }))}
                    />
                  </label>
                ) : (
                  <label className="formCard__label">
                    Phone number
                    <input
                      className="formCard__field"
                      type="tel"
                      placeholder="+234..."
                      value={booking.phone}
                      onChange={(e) => setBooking((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </label>
                )}
              </div>

              <div className="formCard__row">
                <label className="formCard__label">
                  Full name
                  <input
                    className="formCard__field"
                    type="text"
                    placeholder="Your name"
                    value={booking.fullName}
                    onChange={(e) => setBooking((p) => ({ ...p, fullName: e.target.value }))}
                  />
                </label>

                <label className="formCard__label">
                  Email
                  <input
                    className="formCard__field"
                    type="email"
                    placeholder="you@email.com"
                    value={booking.email}
                    onChange={(e) => setBooking((p) => ({ ...p, email: e.target.value }))}
                  />
                </label>
              </div>

              <label className="formCard__label">
                What do you need help with?
                <textarea
                  className="formCard__field formCard__field--area"
                  rows={4}
                  placeholder="Example: I want a durable sports watch under $300…"
                  value={booking.note}
                  onChange={(e) => setBooking((p) => ({ ...p, note: e.target.value }))}
                />
              </label>

              <button className="formCard__cta" type="submit">
                Send request
              </button>

              <p className="formCard__micro">
                We respond within 24 hours. Appointments get priority service.
              </p>
            </form>

            <div className="infoCard" aria-label="Store information">
              <h3 className="infoCard__title">Showroom location</h3>
              <p className="infoCard__text">
                Banana Island, Lagos. If you’re coming for a specific model, book ahead so we can reserve it.
              </p>

              <div className="infoCard__rows">
                <div className="infoCard__row">
                  <LuMapPin aria-hidden="true" />
                  <div>
                    <p className="infoCard__label">Address</p>
                    <p className="infoCard__value">106 Close, Banana Island, Eti Osa 101003, Lagos</p>
                  </div>
                </div>

                <div className="infoCard__row">
                  <LuCalendar aria-hidden="true" />
                  <div>
                    <p className="infoCard__label">Hours</p>
                    <p className="infoCard__value">Mon – Fri, 8:00am – 5:30pm</p>
                  </div>
                </div>

                <div className="infoCard__row">
                  <LuPhone aria-hidden="true" />
                  <div>
                    <p className="infoCard__label">Phone</p>
                    <p className="infoCard__value">+234 8033566520</p>
                  </div>
                </div>
              </div>

              <div className="infoCard__actions">
                <a
                  className="infoCard__btn infoCard__btn--primary"
                  href="https://www.google.com/maps/search/?api=1&query=106%20Close%2C%20Banana%20Island%2C%20Eti%20Osa%20101003%2C%20Lagos"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
                <a className="infoCard__btn infoCard__btn--ghost" href="tel:+2348033566520">
                  Call store
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          className="support__section"
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          variants={sectionVariants}
        >
          <header className="support__sectionHeader">
            <h2 className="support__h2">Contact support</h2>
            <p className="support__p">Tell us what’s wrong. We’ll fix it or guide you fast.</p>
          </header>

          <form className="formCard" onSubmit={submitContact} aria-label="Contact support form">
            <div className="formCard__row">
              <label className="formCard__label">
                Name
                <input
                  className="formCard__field"
                  type="text"
                  value={contact.name}
                  onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                />
              </label>

              <label className="formCard__label">
                Email
                <input
                  className="formCard__field"
                  type="email"
                  value={contact.email}
                  onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="formCard__label">
              Message
              <textarea
                className="formCard__field formCard__field--area"
                rows={5}
                value={contact.message}
                onChange={(e) => setContact((p) => ({ ...p, message: e.target.value }))}
                placeholder="Example: My order hasn’t updated, order #1234…"
              />
            </label>

            <button className="formCard__cta" type="submit">
              Send message
            </button>

            <div className="support__channels">
              <p className="support__channelsTitle">Other options</p>
              <div className="support__channelsGrid">
                <a className="support__channel" href="mailto:support@albertowatches.com">
                  <LuMail aria-hidden="true" />
                  <span>support@albertowatches.com</span>
                </a>
                <a className="support__channel" href="tel:+2348033566520">
                  <LuPhone aria-hidden="true" />
                  <span>+234 8033566520</span>
                </a>
              </div>
            </div>
          </form>
        </motion.section>
      </div>

      <ToastContainer />
    </main>
  );
};

export default SupportPage;
