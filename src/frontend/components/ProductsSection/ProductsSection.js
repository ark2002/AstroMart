import React from "react";
import { Link } from "react-router-dom";

import { useProducts } from "../../contexts";
import { LandingPageCard } from "../LandingPageCard/LandingPageCard";

import "./ProductsSection.css"

function ProductsSection({ title }) {
    const { products } = useProducts();
    return (
        <>
            <div className="banner5__container flex--column ">
                <h1 className="heading1 title banner3__title text-align--center primary__font">{title}</h1>
                <div className="landingpage__cards flex--row">
                    {products.slice(0, 3).map((product) => <LandingPageCard key={product._id} product={product} />)}
                </div>
                <button className="btn btn-color--primary btn-font--secondary btn__outline">
                    <Link to="/products">
                        View More
                    </Link>
                </button>
            </div>
        </>
    );
}

export { ProductsSection }