import React, { createContext, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Home from "./pages/Home";

const CartContext = createContext(null);

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop/item/*" element={<Item />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
export { CartContext };
