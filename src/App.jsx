import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ProductsContext } from "./context/ProductsContext";
import { CART_KEY, FAVORITE_KEY } from "./constants/constants";

export const App = () => {
  const [productsInLSCart, setProductsInLSCart] = useState(
    JSON.parse(localStorage.getItem(CART_KEY)) || []
  );
  const [productsInLSFavorites, setProductsInLSFavorites] = useState(
    JSON.parse(localStorage.getItem(FAVORITE_KEY)) || []
  );
  const value = {
    productsInLSCart,
    setProductsInLSCart,
    productsInLSFavorites,
    setProductsInLSFavorites,
  };
  return (
    <ProductsContext.Provider value={value}>
      <Header />
      <Outlet />
      <Footer />
    </ProductsContext.Provider>
  );
};
