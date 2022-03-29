import React from "react";

import { CartPageCard, CartSummary } from "../../components";
import { useCart } from "../../contexts";

import "./CartScreen.css";

function CartScreen() {
    const { cart } = useCart();
    return (
        <>
            <div className="cart__container flex--row">
                <h1 className="cart__heading primary__font heading2 text-align--center">cart</h1>
                <div className="cart__item-container flex--column">
                    {cart.map((cartProduct) => <CartPageCard key={cartProduct._id} product={cartProduct} />)}
                </div>
                <CartSummary />
            </div>
        </>
    );
}

export { CartScreen };