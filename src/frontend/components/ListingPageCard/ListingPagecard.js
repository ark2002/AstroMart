import React from "react";

import { useNavigate } from "react-router-dom";
import { useAuth, UseWishlist } from "../../contexts"

import "./ListingPageCard.css";

const ListingPageCard = ({ product }) => {
    const { _id, title, price, newArrival, inStock, imageUrl, rating } = product;

    const navigate = useNavigate();

    const { auth } = useAuth();
    const { wishlist, moveProductToWishlist, removeProductFromWishlist } = UseWishlist();

    return (
        <>
            <div className="card flex--column">
                <div className="card--hover flex--column">
                    <div className="card__aside">
                        <div className="card__figure">
                            <img src={imageUrl} alt={title} className="card__image" />
                            {wishlist.find((product) => product._id === _id) ?
                                (<span className="material-icons card__wishlist" title="Remove from Wishlist" onClick={() => removeProductFromWishlist(product._id)}>favorite</span>) :
                                (<span className="material-icons card__wishlist" title="Add to Wishlist" onClick={() => {
                                    (auth.status) ? moveProductToWishlist(product) : navigate("/signin");
                                }}>favorite_border</span>)}
                            {newArrival && <span className="card__badge">new!!</span>}
                            {(inStock < 4) && <span className="card__badge">Few left!</span>}
                        </div>
                    </div>
                    <div className="card__header">
                        <h2 className="card__subtitle primary__font">{title}</h2>
                        <h3 className="card__rating secondary__font"><span className="material-icons card__star">star_rate</span>{rating}</h3>
                        <h4 className="card__subtitle secondary__font">₹ {price}</h4>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="card__actions flex--row">
                        <button className="card__txtbtn">Buy Now</button>
                        <button className="card__txtbtn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export { ListingPageCard };