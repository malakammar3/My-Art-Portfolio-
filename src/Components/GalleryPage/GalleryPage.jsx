// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Fab, Zoom, IconButton } from "@mui/material";
import GalleryCard from "../GalleryCard/GalleryCard.jsx";
import Masonry from "@mui/lab/Masonry";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import art1 from "../../imgs/art1.jpg";
import art2 from "../../imgs/art2.jpg";
import art3 from "../../imgs/art3.jpg";
import art4 from "../../imgs/art4.jpg";
import art5 from "../../imgs/art5.jpg";
import art6 from "../../imgs/art6.jpg";
import art7 from "../../imgs/art7.jpg";
import art8 from "../../imgs/art8.jpg";
import art9 from "../../imgs/art9.jpg";


const artworks = [
  {
    title: { en: "Artwork 1", ar: "اللوحة 1" },
    image: art1,
    description: { en: "This is Artwork 1 description.", ar: "هذا وصف اللوحة 1" },
  },
  {
    title: { en: "Artwork 2", ar: "اللوحة 2" },
    image: art2,
    description: { en: "This is Artwork 2 description.", ar: "هذا وصف اللوحة 2" },
  },
  {
    title: { en: "Artwork 3", ar: "اللوحة 3" },
    image: art3,
    description: { en: "This is Artwork 3 description.", ar: "هذا وصف اللوحة 3" },
  },
  {
    title: { en: "Artwork 4", ar: "اللوحة 4" },
    image: art4,
    description: { en: "This is Artwork 4 description.", ar: "هذا وصف اللوحة 4" },
  },
  {
    title: { en: "Artwork 5", ar: "اللوحة 5" },
    image: art5,
    description: { en: "This is Artwork 5 description.", ar: "هذا وصف اللوحة 5" },
  },
  {
    title: { en: "Artwork 6", ar: "اللوحة 6" },
    image: art6,
    description: { en: "This is Artwork 6 description.", ar: "هذا وصف اللوحة 6" },
  },
  {
    title: { en: "Artwork 7", ar: "اللوحة 7" },
    image: art7,
    description: { en: "This is Artwork 7 description.", ar: "هذا وصف اللوحة 7" },
  },
  {
    title: { en: "Artwork 8", ar: "اللوحة 8" },
    image: art8,
    description: { en: "This is Artwork 8 description.", ar: "هذا وصف اللوحة 8" },
  },
  {
    title: { en: "Artwork 9", ar: "اللوحة 9" },
    image: art9,
    description: { en: "This is Artwork 9 description.", ar: "هذا وصف اللوحة 9" },
  },];

const GalleryPage = ({ language }) => {

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () => setSelectedIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  const handleNext = () => setSelectedIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));

  const handleScroll = () => setShowScroll(window.pageYOffset > 300);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container id="gallery" sx={{ mt: 6, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#F28D8D", fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }}
          >
            {language === "en" ? "🎨 My Art Gallery" : "🎨 معرض أعمالي الفنية"}
          </Typography>
          <Typography variant="body1" sx={{ color: "#2F2F2F", mt: 2 }}>
            {language === "en"
              ? "A collection of my favorite artworks, showcasing my style and inspiration."
              : "مجموعة من أعمالي الفنية المفضلة، تعرض أسلوبي وإلهامي."}
          </Typography>
        </Box>

        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2} sx={{ alignItems: "flex-start" }}>
          {artworks.map((art, index) => (
            <Box key={index} onClick={() => handleOpen(index)} sx={{ cursor: "pointer", breakInside: "avoid" }}>
              <GalleryCard
                title={art.title[language]}  // <-- dynamic title
                image={art.image}
      
              />
            </Box>
          ))}
        </Masonry>
      </Container>

      {/* Enhanced Artwork Modal */}
      {selectedIndex !== null && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1500,
            animation: "fadeIn 0.5s ease-out",
          }}
        >
          {/* Close Button */}
          <Fab
            size="small"
            onClick={handleClose}
            sx={{ position: "absolute", top: 16, right: 16, bgcolor: "#F28D8D", "&:hover": { bgcolor: "#F1A2A2" } }}
          >
            ✕
          </Fab>

          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 16, color: "#fff", bgcolor: "rgba(0,0,0,0.4)", "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", right: 16, color: "#fff", bgcolor: "rgba(0,0,0,0.4)", "&:hover": { bgcolor: "rgba(0,0,0,0.6)" } }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          {/* Artwork Display */}
          <Box
            sx={{
              maxWidth: { xs: "90%", md: "70%" },
              maxHeight: "80vh",
              textAlign: "center",
              animation: "zoomIn 0.4s ease-out",
            }}
          >
            <img
                src={artworks[selectedIndex].image}
                alt={artworks[selectedIndex].title[language]} // <-- use the selected language
                style={{
                    width: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    borderRadius: 12,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                }}
                />

                <Typography variant="h5" sx={{ mt: 2, color: "#F28D8D", fontWeight: "bold" }}>
                {artworks[selectedIndex].title[language]} 
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, color: "#fff" }}>
                {artworks[selectedIndex].description[language]} 
                </Typography>

          </Box>
        </Box>
      )}

      <Zoom in={showScroll}>
        <Fab
          color="secondary"
          onClick={scrollToTop}
          sx={{ position: "fixed", bottom: 32, right: 32, bgcolor: "#F28D8D", "&:hover": { bgcolor: "#F1A2A2" } }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </>
  );
};

export default GalleryPage;
