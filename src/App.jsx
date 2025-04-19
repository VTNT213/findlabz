
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound.jsx";
import LabSearch from "./pages/Labs";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/labs" element={<LabSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
