import "../Css/Policies.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Policies = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="policies">
      <header className="policies__header">
        <p className="policies__eyebrow">Customer Care</p>
        <h1 className="policies__title">Policies</h1>
        <p className="policies__lead">
          Clear rules. No surprises. Here’s how shipping, returns, privacy, warranty, and terms work at Alberto Watches.
        </p>

        <nav className="policies__nav" aria-label="Policies navigation">
          <a className="policies__navLink" href="#shipping-policy">Shipping</a>
          <a className="policies__navLink" href="#return-policy">Returns</a>
          <a className="policies__navLink" href="#privacy-policy">Privacy</a>
          <a className="policies__navLink" href="#terms-of-service">Terms</a>
          <a className="policies__navLink" href="#warranty-policy">Warranty</a>
        </nav>
      </header>

      <section id="shipping-policy" className="policies__section">
        <h2 className="policies__h2">Shipping Policy</h2>
        <p className="policies__p">
          We aim to deliver your order quickly and securely. Here’s what to expect.
        </p>
        <ul className="policies__list">
          <li><strong>Processing:</strong> Orders ship within 1–3 business days. You’ll get tracking once dispatched.</li>
          <li><strong>Shipping options:</strong> Standard and express options are available at checkout.</li>
          <li><strong>International:</strong> Duties and taxes (if any) are the customer’s responsibility.</li>
          <li><strong>Delays:</strong> Rare, but possible. If something changes, we’ll notify you.</li>
        </ul>
      </section>

      <section id="return-policy" className="policies__section">
        <h2 className="policies__h2">Return Policy</h2>
        <p className="policies__p">
          If it’s not right for you, we’ll make returns straightforward.
        </p>
        <ul className="policies__list">
          <li><strong>Return window:</strong> Return within 30 days in original, unused condition.</li>
          <li><strong>Start a return:</strong> Contact support with proof of purchase and your order details.</li>
          <li><strong>Packaging:</strong> Include original packaging to avoid delays in processing.</li>
          <li><strong>Refunds:</strong> Processed back to the original method within 7–10 business days after inspection.</li>
        </ul>
      </section>

      <section id="privacy-policy" className="policies__section">
        <h2 className="policies__h2">Privacy Policy</h2>
        <p className="policies__p">
          We collect only what we need to serve you—and we protect it.
        </p>
        <ul className="policies__list">
          <li><strong>Data collected:</strong> Name, email, and address for order processing and support.</li>
          <li><strong>How it’s used:</strong> Fulfillment, customer care, and product updates (only with consent).</li>
          <li><strong>Sharing:</strong> We don’t sell your data. We only share what’s required for services like shipping.</li>
          <li><strong>Security:</strong> We apply standard safeguards to keep customer data protected.</li>
        </ul>
      </section>

      <section id="terms-of-service" className="policies__section">
        <h2 className="policies__h2">Terms of Service</h2>
        <p className="policies__p">
          By using this website, you agree to the following.
        </p>
        <ul className="policies__list">
          <li><strong>Product information:</strong> We aim for accuracy, but minor variations may occur.</li>
          <li><strong>Use of site:</strong> Use the website lawfully and avoid actions that disrupt our operations.</li>
          <li><strong>Pricing & availability:</strong> Can change without notice due to inventory or updates.</li>
          <li><strong>Liability:</strong> We’re not responsible for damages caused by misuse of products.</li>
        </ul>
      </section>

      <section id="warranty-policy" className="policies__section">
        <h2 className="policies__h2">Warranty Policy</h2>
        <p className="policies__p">
          We stand behind our watches with a limited warranty.
        </p>
        <ul className="policies__list">
          <li><strong>Coverage:</strong> 2-year limited warranty from the date of purchase.</li>
          <li><strong>What’s covered:</strong> Manufacturing defects (movement, hands, dial failures).</li>
          <li><strong>What’s not covered:</strong> Misuse, accidents, unauthorized repairs, and normal wear (scratches, battery life).</li>
          <li><strong>How to claim:</strong> Contact support with proof of purchase and a description of the issue.</li>
        </ul>
      </section>

      <footer className="policies__footer">
        <p className="policies__fineprint">
          Need help fast? Email{" "}
          <a className="policies__link" href="mailto:support@albertowatches.com">
            support@albertowatches.com
          </a>
          .
        </p>
      </footer>
    </main>
  );
};

export default Policies;
