import React from "react";

import "./ListingPageCard.css";

const ListingPageCard = ({ product }) => {
    const { title, price, newArrival, inStock, imageUrl, rating } = product;
    return (
        <>
            <div className="card flex--column">
                <div className="card--hover flex--column">
                    <div className="card__aside">
                        <div className="card__figure">
                            <img src={imageUrl} alt={title} className="card__image" />
                            <span className="material-icons card__wishlist">favorite_border</span>
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