import "./Header.css";
import React from "react";
import { Link, Navlink } from "react-router-dom";
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
          <Navlink to="/" className="link">
            Home
          </Navlink>
          <Navlink to="/" className="link">
            Cart
          </Navlink>
        </nav>
        <Link to="/cart" className="items">
          <span>Cart: 2</span>
        </Link>
      </header>
    </>
  );
};
