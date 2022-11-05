import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Item from "./pages/Item";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/shop/item/*" element={<Item />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
