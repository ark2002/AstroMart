import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import { ProductsProvider, FilterProvider, AuthProvider, WishlistProvider } from "./frontend/contexts";

import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <FilterProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </FilterProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
