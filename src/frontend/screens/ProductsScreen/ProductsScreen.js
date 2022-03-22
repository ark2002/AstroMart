import React from "react";
import {Filter, ProductsList} from "../../components"

function ProductsScreen() {
  return (
    <div className="listingpage__container flex--row">
      <Filter />
      <ProductsList />
    </div>
  );
}

export { ProductsScreen };