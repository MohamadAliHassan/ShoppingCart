import React, { useContext } from "react";
import { CartCard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCart } from "../context/CardContext";

export const Cart = () => {
  //What we have done now is that we destructured total from our cartContext.
  const { total } = useCart();
  useTitle("Cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];
  return (
    <main>
      <section className="cart">
        <h1>
          {" "}
          Cart items: {products.length} | Amount: ${total}
        </h1>
        {products.map((product) => (
          //provide the info about the product using props
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
