import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ImageOverlay from "./components/ImageOverlay";
// pages
import Home from "./components/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import LatestNews from "./pages/LatestNews";
import Contact from "./pages/Contact";
import Basement from "./pages/Basement";
import WaterProofing from "./pages/WaterProofing";
import UnderPipping from "./pages/UnderPipping";
import VauletConversion from "./pages/VauletConversion";
import Structure from "./pages/Structure";
import Foundations from "./pages/Foundations";
import Building from "./pages/Building";
import Piling from "./pages/Piling";
import Stratford from "./pages/Stratford";
import Construction from "./pages/Construction";
import Companies from "./pages/Companies";
import NoTitle from "./pages/NoTitle";
import ScrollToTop from "./components/ScrollToTop";
// import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/latestnews" element={<LatestNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/basement" element={<Basement />} />
        <Route path="/waterproofing" element={<WaterProofing />} />
        <Route path="/underpipping" element={<UnderPipping />} />
        <Route path="/vauletconversion" element={<VauletConversion />} />
        <Route path="/structure" element={<Structure />} />
        <Route path="/foundations" element={<Foundations />} />
        <Route path="/building" element={<Building />} />
        <Route path="/piling" element={<Piling />} />
        <Route path="/stratford" element={<Stratford />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/notitle" element={<NoTitle />} />
        <Route path="/image" element={<ImageOverlay />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
