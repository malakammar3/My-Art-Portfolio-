// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ language }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Navbar items
    const navItems = language === "en"
    ? [
        { label: "Home", link: "/#welcome" },
        { label: "Gallery", link: "/#gallery" },
        { label: "Contact", link: "/#contact" },
      ]
    : [
        { label: "الرئيسية", link: "/#welcome" },
        { label: "المعرض", link: "/#gallery" },
        { label: "اتصل بنا", link: "/#contact" },
      ];

  // Drawer content for mobile
  const drawer = (
    <Box
      sx={{ width: { xs: 200, sm: 250 }, textAlign: "center" }}
      onClick={handleDrawerToggle}
    >
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        Malora's Arte
      </Typography>
      <List>
        {navItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={HashLink}
            smooth
            to={item.link}
            scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
            sx={{
              textAlign: "center",
              "&:hover": { bgcolor: "#F28D8D", color: "#fff", borderRadius: 1 },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#F28D8D" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Malora's Art
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={HashLink}
                smooth
                to={item.link}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#6faea6", borderRadius: 1 },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // improves mobile performance
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
