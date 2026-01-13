import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Css/newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Enter an email address to continue.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("That doesn’t look like a valid email.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    toast.success("You're in. No spam — just good watches.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });

    setEmail("");
  };

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <p className="newsletter__eyebrow">Stay in the loop</p>
          <h2 id="newsletter-title" className="newsletter__title">
            New drops. Limited pieces. No noise.
          </h2>
          <p className="newsletter__subtitle">
            Get early access to new watches, restocks, and curated picks.
            We send emails only when there’s something worth seeing.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubscribe}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            className="newsletter__input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="newsletter__button" type="submit">
            Join newsletter
          </button>

          <p className="newsletter__microcopy">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Newsletter;
