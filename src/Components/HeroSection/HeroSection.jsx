// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = ({ language }) => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "#FAF3E0",
        px: 2,
      }}
    >
      
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          color: "#F28D8D",
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
          animation: `${fadeInUp} 1s ease-out`,
        }}
      >
        {language === "en" ? "Welcome to Malora's Arte" : "مرحبًا بك في معرض مالورا الفني"}
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h5"
        sx={{
          color: "#2F2F2F",
          mb: 4,
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          animation: `${fadeInUp} 1.5s ease-out`,
        }}
      >
        {language === "en"
          ? "Explore my collection of artworks and creative inspiration."
          : "استكشف مجموعتي من الأعمال الفنية والإلهام الإبداعي."}
      </Typography>

      {/* Button */}
    <Button
        variant="contained"
        onClick={scrollToGallery}
        sx={{
            bgcolor: "#88C9BF",
            color: "#2F2F2F",
            fontWeight: "bold",
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            borderRadius: "12px",
            cursor: "pointer",
            "&:hover": { bgcolor: "#6faea6", transform: "scale(1.05)", transition: "0.3s" },
            animation: `${fadeInUp} 2s ease-out`,
        }}
        >
        {language === "en" ? "View Gallery" : "عرض المعرض"}
    </Button>

    </Box>
  );
};

export default HeroSection;
