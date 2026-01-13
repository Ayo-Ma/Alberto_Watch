import '../../Css/Footer.css'
import { useEffect } from 'react'
import MyLogo from "../../assets/LogoBlack.svg"
import { Link , useLocation} from 'react-router-dom'
const Footer = () => {
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
    <footer className="site-footer">
  <div className="site-footer__container">

    <div className="site-footer__brand">
      <img src={MyLogo} alt="Alberto Watch Company logo" />
      <h4>Alberto Watch Company</h4>
      <p>
        Thoughtfully curated watches for everyday wear, special moments,
        and everything in between.
      </p>
    </div>

    <div role='navigation' className="site-footer__nav">
      <h5>Explore</h5>
      <ul>
        <li><Link to="/about#hero">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/support#contact">Contact</Link></li>
        <li><Link to="/support/#faq">FAQs</Link></li>
        <li><Link to="/blog">Journal</Link></li>
      </ul>
    </div>

    <div role='navigation' className="site-footer__nav">
      <h5>Legal</h5>
      <ul>
        <li><Link to="/policies#shipping-policy">Shipping</Link></li>
        <li><Link to="/policies#return-policy">Returns</Link></li>
        <li><Link to="/policies#privacy-policy">Privacy</Link></li>
        <li><Link to="/policies#terms-of-service">Terms</Link></li>
      </ul>
    </div>

    <div className="site-footer__social">
      <h5>Follow</h5>
      <ul>
        <li><Link to="https://facebook.com" target="_blank">Facebook</Link></li>
        <li><Link to="https://instagram.com" target="_blank">Instagram</Link></li>
        <li><Link to="https://twitter.com" target="_blank">Twitter</Link></li>
        <li><Link to="https://linkedin.com" target="_blank">LinkedIn</Link></li>
      </ul>
    </div>

  </div>

  <div className="site-footer__bottom">
    <p>© {new Date().getFullYear()} Alberto Watch Company. All rights reserved.</p>
  </div>
</footer>


  )
}

export default Footer
