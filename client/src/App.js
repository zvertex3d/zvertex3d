import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";
import Search from "./pages/Search";
import Store from "./pages/Store";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/search" element={<Search />} />
        <Route path="/store/:code" element={<Store />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;