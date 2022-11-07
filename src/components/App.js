import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  readShoppingCart,
  writeShoppingCart,
} from "./pages/handlers/localStorage";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const CartContext = createContext(null);

const App = () => {
  const [cart, setCart] = useState(() => {
    // getting stored data
    const saved = readShoppingCart();
    return saved || [];
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    writeShoppingCart(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart, open, setOpen }}>
        <Navbar />
        <Cart />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop/item/*" element={<Item />} />
          <Route path="/shop/*" element={<Shop />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { CartContext };
