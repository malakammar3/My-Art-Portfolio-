import React from "react";
import { Card, CardMedia, CardContent, Typography, useMediaQuery } from "@mui/material";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const GalleryCard = ({ title, image }) => {
  const isXs = useMediaQuery("(max-width:480px)");

  return (
    <Card
      sx={{
        maxWidth: { xs: "90%", sm: 345 },
        mx: "auto",
        my: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s, opacity 0.8s",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        },
        animation: `${fadeInUp} 0.8s ease-out`,
      }}
    >
      <CardMedia
        component="img"
        height={isXs ? 150 : 200}
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: "#2F2F2F", fontWeight: "bold", textAlign: "center" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
