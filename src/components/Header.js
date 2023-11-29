import "./Header.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/logo.jpg";
export const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="Gojo" />
          <span>Shopping Cart</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>
            Home
          </NavLink>
          <NavLink to="/cart" className="link">
            Cart
          </NavLink>
        </nav>
        <Link to="/cart" className="items">
          <span>Cart: 2</span>
        </Link>
      </header>
    </>
  );
};
