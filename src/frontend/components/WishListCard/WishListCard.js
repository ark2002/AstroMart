import React from "react";

import { UseWishlist } from "../../contexts";

import "./WishListCard.css"

const WishListCard = ({ product }) => {
    const { title, price, imageUrl, description } = product;

    const { removeProductFromWishlist } = UseWishlist();

    return (
        <>
            <div class="wishlist__item flex--row">
                <img src={imageUrl} alt="product_img" class="wishlist__img" />
                <div class="wishlist__copy flex--column">
                    <h2 class="wishlist__name secondary__font">{title}</h2>
                    <p class="wishlist__info secondary__font text__small">{description}</p>
                    <button class="btn btn-color--primary btn-font--secondary">Add to Cart</button>
                </div>
                <div class="wishlist__action flex--column">
                    <h3 class="wishlist__product-cost secondary__font">Rs. {price}/-</h3>
                    <button class="wishlist__selection" onClick={()=>removeProductFromWishlist(product._id)}>
                        <span class="material-icons" title="Remove from Wishlist">favorite</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export { WishListCard };