import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider } from "./frontend/contexts/products-context";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./frontend/contexts/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
