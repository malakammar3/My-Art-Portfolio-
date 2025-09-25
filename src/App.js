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
  const [language, setLanguage] = useState("en"); // "en" or "ar"

  return (
    <Router>
      {!showMain ? (
        <WelcomePage
          onContinue={() => setShowMain(true)}
          language={language}
          onChangeLanguage={() =>
            setLanguage(prev => (prev === "en" ? "ar" : "en"))
          } // toggle between English and Arabic
        />

      ) : (
        <>
          <Navbar language={language} />
          <HeroSection language={language} />
          <GalleryPage language={language} />
          <Footer language={language} />
        </>
      )}
    </Router>
  );
}


export default App;
