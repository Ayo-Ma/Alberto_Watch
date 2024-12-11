import "../../Css/Newsletter.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please enter your email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }

    toast.success("Thank you for subscribing!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
    });
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>

      <div className="control">
        <div className="newsletter-intro">
          <p>
            Subscribe to our free newsletter to get information about new watches.
          </p>
        </div>
        <form className="input" onSubmit={handleSubscribe}>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="sub" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;
