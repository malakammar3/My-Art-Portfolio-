import React from "react";
import { Box, Button, Typography, Link } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); } 
`;

const WelcomePage = ({ onContinue, language, onChangeLanguage }) => {

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FAF3E0",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#F28D8D",
          fontWeight: "bold",
          mb: 4,
          animation: `${fadeIn} 2s ease-out`,
          fontSize: {
            xs: "1.6rem",
            sm: "2rem",
            md: "3rem",
            lg: "3.5rem",
          },
        }}
      >
        {language === "en" ? "Welcome to Malora's Arte Portfolio" : "مرحبًا بك في معرض مالورا الفني"}
      </Typography>


      <Button
        variant="contained"
        onClick={onContinue}
        sx={{
            bgcolor: "#88C9BF",
            color: "#2F2F2F",
            fontWeight: "bold",
            borderRadius: "12px",
            animation: `${fadeIn} 3s ease-out`,
            "&:hover": { bgcolor: "#6faea6" },
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 1, sm: 1.2, md: 2 },
            my: {xs: 1, sm: 1.2, md: 6},
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
        }}
      >
        {language === "en" ? "Continue" : "متابعة"}
      </Button>
        
        <Link
        component="button"
        sx={{
            mb: 3,
            color: "#F28D8D",
            fontWeight: "bold",
            textDecoration: "underline",
            animation: `${fadeIn} 2.5s ease-out`,
            fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
        onClick={() => onChangeLanguage(language === "en" ? "ar" : "en")}
        >
        {language === "en"
            ? "إذا أردت النسخة العربية من الموقع اضغط هنا"
            : "Click here for English version"}
        </Link>


    </Box>
  );
};

export default WelcomePage;
