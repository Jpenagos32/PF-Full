import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: "white",
  fontSize: "16px",
  margin: "0",
  "&.active": {
    color: theme.palette.secondary.main,
  },
}));

const SocialIconsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
});

const SocialIcon = styled("div")({
  marginLeft: "10px",
  color: "white",
});

const Logo = styled("img")({
  height: "75px",
});

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo
              src="https://i.ibb.co/fFXPtrC/logo-removebg-preview.png"
              alt="logo"
            />
          </div>
          <SocialIconsContainer>
            <NavLinkStyled to="/account">My Account</NavLinkStyled>
            <SocialIcon>
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon>
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon>
              <TwitterIcon />
            </SocialIcon>
          </SocialIconsContainer>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerClose}>
        <List>
          <ListItem
            button
            component={NavLink}
            to="/home"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/account"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="My Account" />
          </ListItem>
        </List>
      </Drawer>

      <Toolbar />

      <div
        style={{
          position: "fixed",
          top: 60,
          right: 0,
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <Button>Login</Button>
        </div>
        <div>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
