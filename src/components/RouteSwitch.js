import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Navbar from "./Navbar";
import Shop from "./pages/Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
