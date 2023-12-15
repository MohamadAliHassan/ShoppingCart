import React from "react";
import "./ProductCard.css";
import { useCart } from "../context/CardContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, image } = product;

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  );
};
