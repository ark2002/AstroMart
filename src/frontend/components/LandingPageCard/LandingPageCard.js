import React from "react";
import "./LandingPageCard.css"
function LandingPageCard({ product }) {
    const { title, price, newArrival, inStock , imageUrl } = product;
    return (
        <>
            <div className="card flex--column">
                <div className="card--hover flex--column">
                    <div className="card__aside">
                        <div className="card__figure">
                            <img src={imageUrl} alt={title} className="card__image" />
                            {newArrival && <span className="card__badge">new!!</span>}
                            {(inStock < 4) && <span className="card__badge">Few left!</span>}
                        </div>
                    </div>
                    <div className="card__header flex--column">
                        <h3 className="card__subtitle">{title}</h3>
                        <p className="card__subtitle">₹ {price}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export { LandingPageCard };