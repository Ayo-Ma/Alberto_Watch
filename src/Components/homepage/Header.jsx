/* eslint-disable no-unused-vars */
import { useState, useEffect, useMemo } from "react";
import { useCart } from "../CartContext";
import Nav from "./Nav";
import WhiteLogo from "../../assets/LogoBlack.svg";
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import SearchOverlay from "../about/SearchOverlay";
import "../../Css/Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartItems } = useCart();

  const cartCount = useMemo(() => {
    return (cartItems || []).reduce((sum, item) => sum + (item.quantity || 1), 0);
  }, [cartItems]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const toggleNavBar = () => setToggleNav((v) => !v);

  useEffect(() => {
    const locked = showSearch || toggleNav;
    document.body.style.overflow = locked ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showSearch, toggleNav]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setToggleNav(false);
        setShowSearch(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSearch = (term) => {
    console.log("Searching for:", term);
  };

  return (
    <>
      <header className="siteHeader">
        <div className="siteHeader__inner">
          <Link to="/" className="siteHeader__brand" aria-label="Alberto Watches Home">
            <img src={WhiteLogo} className="siteHeader__logo" alt="Alberto Watches" />
            <div className="siteHeader__brandText">
              <span className="siteHeader__brandName">Alberto</span>
              <span className="siteHeader__brandTag">Watches</span>
            </div>
          </Link>

          <Nav isVisible={toggleNav} onClose={() => setToggleNav(false)} />

          <div className="siteHeader__actions">
            <button onClick={toggleNavBar} className="siteHeader__iconBtn siteHeader__hamburger" aria-label="Open menu">
              <FiMenu />
            </button>

            <button className="siteHeader__iconBtn" onClick={() => setShowSearch(true)} aria-label="Search">
              <FiSearch />
            </button>

            <Link to="/cart" className="siteHeader__cartBtn" aria-label={`Cart (${cartCount})`}>
              <FiShoppingCart />
              {cartCount > 0 && <span className="siteHeader__badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

     
      <button
        className={toggleNav ? "siteHeader__backdrop siteHeader__backdrop--open" : "siteHeader__backdrop"}
        aria-label="Close menu backdrop"
        onClick={() => setToggleNav(false)}
      />

      <SearchOverlay
        isVisible={showSearch}
        onClose={() => setShowSearch(false)}
        onSearch={handleSearch}
      />
    </>
  );
};

export default Header;
