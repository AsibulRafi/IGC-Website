import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {
  About,
  CFDTrading,
  Contact,
  Cookie,
  Crypto,
  Education,
  ForexTrading,
  Home,
  Lordknight,
  Privacy,
  Promotions,
  Regulation,
  Risk,
  RoyalHighness,
  Trading,
  Website,
} from "./Pages";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cfdTrading" element={<CFDTrading />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/education" element={<Education />} />
        <Route path="/forexTrading" element={<ForexTrading />} />
        {/* Accounts */}
        <Route path="/accounts/lordknight" element={<Lordknight />} />
        <Route path="/accounts/royalhighness" element={<RoyalHighness />} />
        <Route path="/accounts/promotions" element={<Promotions />} />
        {/* Documentation */}
        <Route path="/documentation/cookie" element={<Cookie />} />
        <Route path="/documentation/privacy" element={<Privacy />} />
        <Route path="/documentation/regulation" element={<Regulation />} />
        <Route path="/documentation/risk" element={<Risk />} />
        <Route path="/documentation/trading" element={<Trading />} />
        <Route path="/documentation/webiste" element={<Website />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
