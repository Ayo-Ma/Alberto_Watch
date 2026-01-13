/* eslint-disable react/prop-types */
import "../../Css/Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const Nav = ({ isVisible, onClose }) => {
  const [openProducts, setOpenProducts] = useState(false);

  const handleClose = () => {
    setOpenProducts(false);
    onClose();
  };

  const linkClass = ({ isActive }) =>
    isActive ? "siteNav__link siteNav__link--active" : "siteNav__link";

  return (
    <nav
      className={isVisible ? "siteNav siteNav--open" : "siteNav"}
      aria-label="Main"
    >
      <button
        className="siteNav__close"
        onClick={handleClose}
        aria-label="Close navigation"
      >
        ×
      </button>

      <ul className="siteNav__links">
        <li>
          <NavLink onClick={handleClose} to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li className="siteNav__item siteNav__item--hasMenu">
          {/* Desktop link */}
          <NavLink onClick={handleClose} to="/products" className={linkClass}>
            Products
          </NavLink>

          {/* Mobile dropdown button */}
          <button
            className="siteNav__dropdownBtn"
            onClick={() => setOpenProducts((v) => !v)}
            aria-expanded={openProducts}
            aria-controls="products-submenu"
            type="button"
          >
            Products
            <LuChevronDown
              className={
                openProducts
                  ? "siteNav__chev siteNav__chev--open"
                  : "siteNav__chev"
              }
            />
          </button>

          <ul
            id="products-submenu"
            className={
              openProducts
                ? "siteNav__submenu siteNav__submenu--open"
                : "siteNav__submenu"
            }
          >
            <li>
              <NavLink
                onClick={handleClose}
                to="/products/luxury"
                className={linkClass}
              >
                Luxury
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/products/vintage"
                className={linkClass}
              >
                Vintage
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/products/sports"
                className={linkClass}
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClose}
                to="/products/smart"
                className={linkClass}
              >
                Smart
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            onClick={handleClose}
            to="/store-locator"
            className={linkClass}
          >
            Store Locator
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClose} to="/support" className={linkClass}>
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
