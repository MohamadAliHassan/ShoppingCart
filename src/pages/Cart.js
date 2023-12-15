import React, { useContext } from "react";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CardContext";

export const Cart = () => {
  //What we have done now is that we destructured total from our cartContext.
  const { total, cartList } = useCart();
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          {" "}
          Cart items: {cartList.length} | Amount: ${total}
        </h1>
        {cartList.map((product) => (
          //provide the info about the product using props
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
