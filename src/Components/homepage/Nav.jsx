
/* eslint-disable react/prop-types */
import "../../Css/Nav.css";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ isVisible, onClose }) => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const handleClose = () => {
    // setShowDropdown(false);
    onClose();
  };

  return (
    <nav className={`nav ${isVisible ? "visible" : ""}`}>
      <button
        className="close-nav"
        role="button"
        onClick={handleClose}
        aria-label="Close navigation"
      >
        &times;
      </button>

      <ul className="navlinks">
        <li>
          <NavLink
           onClick={handleClose}
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li className="dropdown-parent">
          <NavLink
           onClick={handleClose}
            to="/products"
            className="products"
                                 
          >
            Products
          </NavLink>
          <ul className={`dropdown`}>
            <li>
              <NavLink  onClick={handleClose} to="/products/luxury">Luxury</NavLink>
            </li>
            <li>
              <NavLink  onClick={handleClose} to="/products/vintage">Vintage</NavLink>
            </li>
            <li>
              <NavLink  onClick={handleClose} to="/products/sports">Sports</NavLink>
            </li>
            <li>
              <NavLink  onClick={handleClose} to="/products/smart">Smart</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            to="/store-locator"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Store Locator
          </NavLink>
        </li>
        <li>
          <NavLink
           onClick={handleClose}
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            to="/support"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
