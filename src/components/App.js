import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { readShoppingCart, writeShoppingCart } from "./handlers/localStorage";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";
import PageNotFound from "./pages/PageNotFound";

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
        <div className="flex flex-col border border-gray-600 min-h-screen">
          <Navbar />
          <Cart />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shop/item/*" element={<Item />} />
            <Route path="/shop/*" element={<Shop />} />
            <Route element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { CartContext };
