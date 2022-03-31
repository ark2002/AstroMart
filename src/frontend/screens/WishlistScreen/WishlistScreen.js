import React from "react";

import { WishListCard } from "../../components";
import { useWishlist } from "../../contexts";

import "./WishlistScreen.css"

function WishlistScreen() {
    const { wishlist } = useWishlist();
    return (
        <>
            <div className="wishlist__container flex--column">
                <h1 className="wishlist__heading primary__font heading2">WishList</h1>
                {wishlist.map((product) => (<WishListCard key={product._id} product={product} />))}
            </div>
        </>
    );
}

export { WishlistScreen };