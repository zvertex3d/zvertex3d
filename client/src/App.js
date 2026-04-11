import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";
import Search from "./pages/Search";
import Order from "./pages/Order";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marketplace from "./pages/Marketplace";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order" element={<Order />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;