import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";
import Marketplace from "./pages/Marketplace";
import Services from "./pages/Services";
import Search from "./pages/Search";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minHeight="100vh">

        <Navbar />

        <Box flex={1}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor-register" element={<VendorRegister />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/search" element={<Search />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Box>

        <Footer />

      </Box>
    </BrowserRouter>
  );
}

export default App;