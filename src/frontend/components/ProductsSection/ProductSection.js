import React from "react";
import { useProducts } from "../../contexts/products-context";
import { LandingPageCard } from "../LandingPageCard/LandingPageCard";
import "./ProductSection.css"

function ProductsSection({title}) {
    const {products}= useProducts();
    return (
        <>
            <div className="banner5__container flex--column ">
                <h1 className="heading1 title banner3__title text-align--center primary__font">{title}</h1>
                <div className="landingpage__cards flex--row">
                    {products.slice(0,3).map((product)=><LandingPageCard key={product._id} product={product}/>)}
                </div>
                <button className="btn btn-color--primary btn-font--secondary btn__outline">
                    <a href="/listingpage/listingpage.html">
                        View More
                    </a>
                </button>
            </div>
        </>
    );
}

export { ProductsSection }