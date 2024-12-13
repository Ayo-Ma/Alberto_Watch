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
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
        <img src={MyLogo} alt="" />
      <h4>Alberto Watch company</h4>
      <p>Discover timeless elegance with our curated collection of watches designed for every occasion.</p>
    </div>


    <div className="footer-links">
      <h5>Quick Links</h5>
      <ul>
        <li><Link to="/about#hero">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/support/#faq">FAQs</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>


    <div className="footer-policies">
      <h5>Policies</h5>
      <ul>
        <li><Link to="/policies#shipping-policy">Shipping Policy</Link></li>
        <li><Link to="/policies#return-policy">Return Policy</Link></li>
        <li><Link to="/policies#privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/policies#terms-of-service">Terms of Service</Link></li>
      </ul>
    </div>


    <div className="footer-social">
      <h5>Follow Us</h5>
      <div className="social-icons">
        <Link to="https://facebook.com" className='link' target="_blank" rel="noopener noreferrer">Facebook</Link>
        <Link to="https://instagram.com" className='link' target="_blank" rel="noopener noreferrer">Instagram</Link>
        <Link to="https://twitter.com" className='link' target="_blank" rel="noopener noreferrer">Twitter</Link>
        <Link to="https://linkedin.com className='link'" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
      </div>
    </div>
  </div>


  <div className="footer-bottom">
    <p>&copy; 2024 Alberto Watch Company. All Rights Reserved.</p>
  </div>
</footer>

  )
}

export default Footer
