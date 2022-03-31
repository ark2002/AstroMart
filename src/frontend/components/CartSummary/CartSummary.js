import React from "react";

import { useCart } from "../../contexts";

import "./CartSummary.css"

const CartSummary = () => {
    const { cartSummary: { cartTotalProducts, cartTotalPrice, cartTotalAmount } } = useCart();

    return (
        <>
            <div className="cart__summary flex--column">
                <h1 className="primary__font text-align--center summary__heading">Cart Summary</h1>
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
                <button className="btn btn-color--primary btn-font--secondary order__btn">Proceed to Checkout</button>
            </div>
        </>
    );
}

export { CartSummary }