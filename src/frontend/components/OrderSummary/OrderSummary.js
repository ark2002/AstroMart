import React from "react";

import { useAuth, useCart, useUser } from "../../contexts";
import { useNavigate } from "react-router-dom";

import "./OrderSummary.css";
import { clearCartService, loadScript } from "../../services";
import { toast } from "react-toastify";

const OrderSummary = () => {
  const {
    cartSummary: { cartTotalProducts, cartTotalPrice, cartTotalAmount },
    setCart,
  } = useCart();

  const {
    user: { selectedAddress },
  } = useUser();

  const {
    auth: { token },
  } = useAuth();

  const navigate = useNavigate();

  const { name, area, locality, city, pincode, state, mobile } =
    selectedAddress;

  async function displayRazorpay(e) {
    e.preventDefault();
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: "INR",
      amount: cartTotalAmount * 100,
      name: "AstroMart",
      description: "Thank you for trusting us",
      image: "",

      handler: async () => {
        const response = await clearCartService(token);
        setCart(response);
        navigate("/products");
        toast.success("Order Placed!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "dark",
        });
      },
      prefill: {
        contact: "9123456780",
        email: "aryaklahane@gmail.com",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <>
      <div className="cart__summary flex--column">
        <h1 className="primary__font text-align--center summary__heading">
          Cart Summary
        </h1>
        <div className="price__summary flex--row secondary__font">
          <h2>Price ({cartTotalProducts} Items)</h2>
          <h3 className="semibold">₹ {cartTotalPrice}</h3>
        </div>
        <div className="price__summary flex--row secondary__font">
          <h2>Discount</h2>
          <h3 className="semibold">₹ 0</h3>
        </div>
        <div className="price__summary flex--row secondary__font">
          <h2>Delivery </h2>
          <h3 className="semibold">Free</h3>
        </div>
        <div className="price__summary flex--row secondary__font">
          <h2 className="bold">Total Amount</h2>
          <h2 className="bold">₹ {cartTotalAmount}</h2>
        </div>
        <div className="price__summary secondary__font">
          <h1 className="primary__font text-align--center summary__heading">
            Address:
          </h1>
        </div>
        <div className="address flex--column secondary__font">
          <h3 className="bold text__small">{name},</h3>
          <p className="semibold text_small">
            {area}, {locality},
          </p>
          <p className="semibold text_small">
            {city}: {pincode}, {state}
          </p>
          <p className="semibold text_small">+91-{mobile}</p>
        </div>
        <button
          className="btn btn-color--primary btn-font--secondary order__btn"
          onClick={displayRazorpay}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  );
};

export { OrderSummary };
