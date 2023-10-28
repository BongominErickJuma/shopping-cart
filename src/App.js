import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopProducts from "./Components/ShopProducts";
import productList from "./Components/ProductsList";
import ShirtProducts from "./ProductItems/ShirtProducts";
import ShortProducts from "./ProductItems/ShortProducts";
import ShoeProducts from "./ProductItems/ShoeProducts";
import TrouserProducts from "./ProductItems/TrouserProducts";
import Shirts from "./ProductAssets/Shirts";
import Shorts from "./ProductAssets/Shorts";
import Shoes from "./ProductAssets/Shoes";
import Trousers from "./ProductAssets/Trousers";
import NotFound from "./Components/NotFound";

const getCartItem = (item) => {
  const storedItem = localStorage.getItem(item);

  if (storedItem) {
    return JSON.parse(localStorage.getItem(item));
  } else {
    return [];
  }
};

function App() {
  const [cart, setCart] = useState(getCartItem("cart"));

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pdt) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === pdt.id);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price += existingItem.stdPrice;
    } else {
      updatedCart.push({ ...pdt, quantity: 1, stdPrice: pdt.price });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (pdt) => {
    const updatedCart = cart.filter((item) => item.id !== pdt.id);
    setCart(updatedCart);
  };

  const decrementQuantity = (pdt) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === pdt.id);

    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      existingItem.price -= existingItem.stdPrice;
      setCart(updatedCart);
    }
  };

  const incrementQuantity = (pdt) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.id === pdt.id);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.price += existingItem.stdPrice;
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<ShopProducts products={productList} />} />
          <Route
            path="/shirts"
            element={<ShirtProducts products={Shirts} addToCart={addToCart} />}
          />
          <Route
            path="/shorts"
            element={<ShortProducts products={Shorts} addToCart={addToCart} />}
          />
          <Route
            path="/shoes"
            element={<ShoeProducts products={Shoes} addToCart={addToCart} />}
          />
          <Route
            path="/trousers"
            element={
              <TrouserProducts products={Trousers} addToCart={addToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                decrementQuantity={decrementQuantity}
                incrementQuantity={incrementQuantity}
                clearCart={clearCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
