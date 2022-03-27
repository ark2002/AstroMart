import React from "react";
import { Filter, ProductsList } from "../../components"
import { useFilters } from "../../contexts/filter-context";
import { useProducts } from "../../contexts/products-context";
import { ProductFilterCategory, ProductFilterRated, ProductsMaxPrice, ProductsSorted } from "../../utlis";

function ProductsScreen() {
  const { products } = useProducts();
  const { filters: { sortBy, categories, rating, maxPrice }, dispatchFilters } = useFilters();

  const sortedProducts = ProductsSorted(products, sortBy);
  const categorizedProducts = ProductFilterCategory(sortedProducts, categories);
  const ratedProducts = ProductFilterRated(categorizedProducts, rating);
  const rangedProducts = ProductsMaxPrice(ratedProducts, maxPrice)
  console.log("max price :" + maxPrice);


  return (
    <div className="listingpage__container flex--row">
      <Filter filters={{ sortBy, categories, rating }} dispatchFilters={dispatchFilters} />
      <ProductsList ratedProducts={rangedProducts} />
    </div>
  );
}

export { ProductsScreen };