import React from "react";
import { useCart } from "../context/CartContext";

const UserCart = () => {
  const { cartItems, addTocart, removeFromCart } = useCart();

  return (
    <div>
      {cartItems.length === 0
        ? `Your cart is Emplty`
        : cartItems.map((item) => {
            return (
              <div className="cart-section">
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                  <h2>{item.price}</h2>
                  <h2>{item.model}</h2>
                </div>

                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            );
          })}
    </div>
  );
};

export default UserCart;
