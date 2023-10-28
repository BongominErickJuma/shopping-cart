import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cart }) => {
  const handleToggle = () => {
    document.body.classList.toggle("nav-open");
  };

  const handleRemove = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <div className="logo">
        <h2>
          <Link to="/">Categories</Link>
        </h2>
      </div>
      <p>
        <Link to="/cart" className="cart">
          Cart( {cart.length} )
        </Link>
      </p>
      <button className="nav-toggle" onClick={handleToggle}>
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link" onClick={handleRemove}>
              Categories
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/shirts" className="nav__link" onClick={handleRemove}>
              Shirts
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/shoes" className="nav__link" onClick={handleRemove}>
              Shoes
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/shorts" className="nav__link" onClick={handleRemove}>
              Shorts
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/trousers"
              className="nav__link"
              onClick={handleRemove}
            >
              Trousers
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/cart" className="nav__link" onClick={handleRemove}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
