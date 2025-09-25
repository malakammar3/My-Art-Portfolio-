// src/components/ArtworkModal.jsx
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { keyframes } from "@emotion/react";

// Fade + slide animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ArtworkModal = ({ open, onClose, title, image, description, onPrev, onNext }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!open) return;
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onPrev, onNext, onClose]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          animation: `${fadeIn} 0.5s ease-out`,
        }}
      >
        {title}
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          textAlign: "center",
          position: "relative",
          px: isXs ? 1 : 3,
          animation: `${fadeIn} 0.5s ease-out`,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxWidth: "100%",
            maxHeight: isXs ? "40vh" : "60vh",
            borderRadius: "12px",
            mx: "auto",
          }}
        />

        {description && (
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "#2F2F2F",
              maxWidth: 600,
              mx: "auto",
              textAlign: "justify",
            }}
          >
            {description}
          </Typography>
        )}

        {/* Navigation arrows */}
        <IconButton
          onClick={onPrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: isXs ? 8 : 16,
            transform: "translateY(-50%)",
            bgcolor: "#FAF3E0",
            "&:hover": { bgcolor: "#F28D8D" },
            p: isXs ? 0.5 : 1,
          }}
        >
          <ArrowBackIosNewIcon fontSize={isXs ? "small" : "medium"} />
        </IconButton>

        <IconButton
          onClick={onNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: isXs ? 8 : 16,
            transform: "translateY(-50%)",
            bgcolor: "#FAF3E0",
            "&:hover": { bgcolor: "#F28D8D" },
            p: isXs ? 0.5 : 1,
          }}
        >
          <ArrowForwardIosIcon fontSize={isXs ? "small" : "medium"} />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
