// src/components/Footer.jsx
import React from "react";
import { Box, Typography, IconButton, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Footer = ({ language }) => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ammarmalak243@gmail.com");
    alert("Email copied to clipboard!");
  };

  const socialLinks = [
    {
      icon: <InstagramIcon fontSize="inherit" />,
      href: "https://www.instagram.com/malora_arte/",
    },
    {
      icon: <LinkedInIcon fontSize="inherit" />,
      href: "https://www.linkedin.com/in/engmalakammar",
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        bgcolor: "#F28D8D",
        color: "#fff",
        py: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        mt: 6,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.2rem", sm: "1.5rem" },
        }}
      >
        {language === "en" ? "Contact Info" : "معلومات التواصل"}
        
      </Typography>

      {/* Social icons */}
      <Box sx={{ mb: 2 }}>
        {socialLinks.map((item, index) => (
          <IconButton
            key={index}
            component={Link}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#fff",
              mx: { xs: 0.5, sm: 1 },
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              transition: "0.3s",
              "&:hover": { color: "#88C9BF", transform: "scale(1.2)" },
            }}
          >
            {item.icon}
          </IconButton>
        ))}

        {/* Email with copy button */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            ml: 1,
            cursor: "pointer",
            color: "#fff",
            "&:hover": { color: "#88C9BF" },
          }}
          onClick={handleCopyEmail}
        >
          <EmailIcon fontSize="inherit" sx={{ mr: 0.5 }} />
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              textDecoration: "underline",
            }}
          >
            ammarmalak243@gmail.com
          </Typography>
          <ContentCopyIcon fontSize="inherit" sx={{ ml: 0.5 }} />
        </Box>
      </Box>

      <Typography variant="body2" sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}>
        © {new Date().getFullYear()} 
        {language === "en" ? "Malora's Arte. All rights reserved." : " كل الحقوق محفوظة لدى معرض مالورا الفني"}
      </Typography>
    </Box>
  );
};

export default Footer;
