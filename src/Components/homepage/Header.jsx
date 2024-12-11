/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import Nav from "./Nav";
import WhiteLogo from "../../assets/LogoBlack.svg";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import SearchOverlay from "../about/SearchOverlay";
import Cart from "../about/Cart";
import { motion } from "framer-motion";
import "../../Css/Header.css";
import { Link, useLocation } from "react-router-dom";
import { sectionVariants } from "../../constants";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [toggleNav, setToggleNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { cartItems } = useCart();

  const toggleNavBar = () => {
    setToggleNav(!toggleNav);
    console.log(toggleNav);
  };

  useEffect(() => {
    document.body.style.overflow = showSearch ? "hidden" : "auto";
  }, [showSearch]);

  const handleSearch = (term) => {
    console.log("Searching for:", term);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="brand">
          <img src={WhiteLogo} className="brand-logo" alt="Logo" />
          <h2 className="brand-name">Alberto Watches Company</h2>
        </Link>

        <Nav isVisible={toggleNav} onClose={toggleNavBar} />
        <div className="third-menu">
          <button onClick={toggleNavBar} className="hamburger">
            <FiMenu />
          </button>
          <button className="search" onClick={() => setShowSearch(true)}>
            <FiSearch />
          </button>
          <Link to="/cart" className="cart">
            <FiShoppingCart />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </header>

      <SearchOverlay
        isVisible={showSearch}
        onClose={() => setShowSearch(false)}
        onSearch={handleSearch}
      />
    </>
  );
};

export default Header;
