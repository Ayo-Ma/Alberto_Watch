import "../../Css/Newsletter.css";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>

      <div className="control">
        <div className="newsletter-intro">
          <p>
            Subscribe to our free newsletter  to get Information about new watches?
          </p>
        </div>
        <div className="input">
          <input type="email" name="email" className="email" required />
          <button className="sub" type="submit">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
