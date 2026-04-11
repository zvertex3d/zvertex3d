import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VendorRegister from "./pages/VendorRegister";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;