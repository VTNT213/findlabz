
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
