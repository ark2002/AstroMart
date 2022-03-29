import React from "react";

import { useCart, useWishlist } from "../../contexts";

import "./WishListCard.css"

const WishListCard = ({ product }) => {
    const { title, price, imageUrl, description } = product;

    const { removeProductFromWishlist } = useWishlist();

    const { cart, addProductToCart, updateQuantityOfProductInCart } = useCart();

    const addToCartHandler = (product) => {
        if (cart.find((cartProduct) => cartProduct._id === product._id)) {
            updateQuantityOfProductInCart(product._id, "increment");
        } else {
            addProductToCart(product);
        }
    };

    return (
        <>
            <div className="wishlist__item flex--row">
                <img src={imageUrl} alt="product_img" className="wishlist__img" />
                <div className="wishlist__copy flex--column">
                    <h2 className="wishlist__name secondary__font">{title}</h2>
                    <p className="wishlist__info secondary__font text__small">{description}</p>
                    <button className="btn btn-color--primary btn-font--secondary" onClick={() => addToCartHandler(product)}>Add to Cart</button>
                </div>
                <div className="wishlist__action flex--column">
                    <h3 className="wishlist__product-cost secondary__font">Rs. {price}/-</h3>
                    <button className="wishlist__selection" onClick={() => removeProductFromWishlist(product._id)}>
                        <span className="material-icons" title="Remove from Wishlist">favorite</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export { WishListCard };