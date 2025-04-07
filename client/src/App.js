import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Academy from "./pages/Academy";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import { Analytics } from "@vercel/analytics/react";



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />

          {/* You can add other routes like About, Programs, etc. here later */}
        </Routes>
        <Analytics />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
