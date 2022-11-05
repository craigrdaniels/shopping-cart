import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";
import Item from "./pages/Item";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop/item/*" element={<Item />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
