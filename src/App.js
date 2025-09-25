// src/App.js
import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import WelcomePage from "./Components/WelcomePage/Welcome.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import GalleryPage from "./Components/GalleryPage/GalleryPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <Router>
      {!showMain ? (
        <WelcomePage onContinue={() => setShowMain(true)} />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <GalleryPage />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
