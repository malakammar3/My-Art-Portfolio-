////////////////////////////////////////Welcome Page////////////////////////////////////////

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";

// invisible and shifted down 20px to full visible and back to its original position
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); } 
`;

const WelcomePage = ({onContinue}) => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FAF3E0", // background
        textAlign: "center",
        px: 2, // padding for very small screens
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "#F28D8D", // soft pink
          fontWeight: "bold",
          mb: 4,
          animation: `${fadeIn} 2s ease-out`,
          // responsive font sizes
          fontSize: {
            xs: "1.6rem", // extra small (mobile 320px)
            sm: "2rem",   // small (tablet portrait)
            md: "3rem",   // medium (tablet landscape / small laptop)
            lg: "3.5rem", // large
          },
        }}
      >
        Welcome to Malora&apos;s Art Portfolio
      </Typography>

      <Button
        variant="contained"
        onClick={onContinue} // navigate to Gallery page
        sx={{
          bgcolor: "#88C9BF", // mint green
          color: "#2F2F2F",
          fontWeight: "bold",
          borderRadius: "12px",
          animation: `${fadeIn} 3s ease-out`,
          "&:hover": { bgcolor: "#6faea6" },

          // responsive padding & font size
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          py: {
            xs: 1,
            sm: 1.2,
            md: 1.5,
          },
          fontSize: {
            xs: "0.8rem",
            sm: "0.9rem",
            md: "1rem",
          },
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default WelcomePage;
