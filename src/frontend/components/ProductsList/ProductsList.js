import React from "react";

import { ListingPageCard } from "../ListingPageCard/ListingPagecard";

import "./ProductsList.css"

const ProductsList = ({ ratedProducts }) => {

    return (
        <>
            <div className="productlist__container flex--column">
                <h1 className="secondary__font productlist__heading">All Products</h1>
                <div className="productlist flex--row">
                    {ratedProducts.map((product) => <ListingPageCard key={product._id} product={product} />)}
                </div>
            </div>
        </>
    );
}

export { ProductsList };