import React from "react";

import { CartPageCard, OrderSummary } from "../../components";
import { useCart } from "../../contexts";

import "./OrderSummaryScreen.css";

function OrderSummaryScreen() {
  const { cart } = useCart();
  return (
    <>
      <div className="cart__container flex--row">
        <h1 className="cart__heading primary__font heading2 text-align--center">
          Confirm Order
        </h1>
        <div className="cart__item-container flex--column">
          {cart.map((cartProduct) => (
            <CartPageCard key={cartProduct._id} product={cartProduct} />
          ))}
        </div>
        <OrderSummary />
      </div>
    </>
  );
}

export { OrderSummaryScreen };
