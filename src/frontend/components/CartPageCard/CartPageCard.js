import React from "react";
import { useNavigate } from "react-router-dom";

import { useCart, useWishlist } from "../../contexts";

import "./CartPageCard.css"

const CartPageCard = ({ product }) => {
    const { _id, title, price, imageUrl, description, qty } = product;

    const { wishlist, moveProductToWishlist } = useWishlist();
    const { removeProductFromCart, updateQuantityOfProductInCart } = useCart();

    const navigate = useNavigate();
    return (
        <>
            <div className="cart__item flex--row">
                <img src={imageUrl} alt="product_img" className="cart__img" />
                <div className="cart__copy flex--column">
                    <h2 className="cart__name secondary__font">{title}</h2>
                    <p className="cart__info secondary__font text__small">{description}</p>
                    <div className="cart__copy-btns flex--row">

                        {wishlist.find((product) => product._id === _id) ? (<button className="btn btn-color--primary btn-font--secondary" onClick={() => navigate("/wishlist")}>Go to Wishlist</button>) : (<button className="btn btn-color--primary btn-font--secondary" onClick={() => moveProductToWishlist(product)}>Move to Wishlist</button>)}
                        <button className="btn btn-font--secondary btn-transparent--primary" onClick={() => removeProductFromCart(_id)}>Remove from Cart</button>
                    </div>
                </div>
                <div className="cart__action flex--column">
                    <h3 className="cart__product-cost secondary__font">₹ {price * qty}</h3>
                    <div className="cart__product--quantity__container flex--row">
                        <button className="cart__product--quantity-btn secondary__font" onClick={() => qty === 1 ? removeProductFromCart(_id) : updateQuantityOfProductInCart(_id, "decrement")}>-</button>
                        <span className="cart__product--quantity secondary__font">{qty}</span>
                        <button className="cart__product--quantity-btn secondary__font" onClick={() => updateQuantityOfProductInCart(_id, "increment")}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { CartPageCard }