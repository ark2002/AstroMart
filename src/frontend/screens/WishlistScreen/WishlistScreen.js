import React from "react";

import { WishListCard } from "../../components";
import { UseWishlist } from "../../contexts";

import "./WishlistScreen.css"

function WishlistScreen() {
    const { wishlist } = UseWishlist();
    return (
        <>
            <div class="wishlist__container flex--column">
                <h1 class="wishlist__heading primary__font heading2">WishList</h1>
                {wishlist.map((product) => (<WishListCard key={product._id} product={product} />))}
            </div>
        </>
    );
}

export { WishlistScreen };