import React from "react";
import { useProducts } from "../../contexts/products-context";
import { ListingPageCard } from "../ListingPageCard/ListingPagecard";
import "./ProductsList.css"

const ProductsList = () => {
    const { products } = useProducts();
    return (
        <>
            <div className="productlist__container flex--column">
                <h1 className="secondary__font productlist__heading">All Products</h1>
                <div className="productlist flex--row">
                    {products.map((product) => <ListingPageCard key={product._id} product={product} />)}
                </div>
            </div>
        </>
    );
}

export { ProductsList };