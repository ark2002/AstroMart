import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";
import { ScrollToTop } from "../hooks/ScrollToTop";
import {
  CartScreen,
  CheckOutScreen,
  HomeScreen,
  OrderSummaryScreen,
  ProductsScreen,
  SignInScreen,
  SignUpScreen,
  WishlistScreen,
} from "../screens";

const Router = () => {
  const {
    auth: { status },
  } = useAuth();
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductsScreen />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishlistScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckOutScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/ordersummary"
          element={
            <PrivateRoute>
              <OrderSummaryScreen />
            </PrivateRoute>
          }
        />
        {!status && (
          <>
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </>
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </ScrollToTop>
  );
};
export { Router };
