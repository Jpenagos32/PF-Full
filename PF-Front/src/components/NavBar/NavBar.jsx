import React, { useEffect, useState } from "react";
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
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

const Logo = styled("img")({
  height: "75px",
});

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    let timer;
    if (openDrawer) {
      timer = setTimeout(() => {
        setOpenDrawer(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [openDrawer]);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#9A98FE" }}>
        <Toolbar>
          <NavLinkStyled to="/home">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Logo
                src="https://i.ibb.co/fFXPtrC/logo-removebg-preview.png"
                alt="logo"
              />
            </div>
          </NavLinkStyled>
          <SocialIconsContainer>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </SocialIconsContainer>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerClose}
        ModalProps={{
          disableScrollLock: true,
          hideBackdrop: true,
        }}
        sx={{
          zIndex: 0,
          ".MuiDrawer-paper": {
            width: "300px",
            height: "200px",
            top: "80px",
            borderTopRightRadius: "0",
            borderTopLeftRadius: "10px",
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "10px",
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <ListItem
            sx={{
              justifyContent: "center",
              marginBottom: "1px",
            }}
          >
            <Button
              component={NavLink}
              to="/signin"
              onClick={handleDrawerClose}
              variant="contained"
              sx={{
                width: "80%",
                borderRadius: "30px",
                height: "45px",
                color: "#868688",
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              Sign In
            </Button>
          </ListItem>
          <Typography
            variant="h6"
            sx={{
              marginBottom: "1px",
              color: "#9A98FE",
            }}
          >
            ¿Are You New?
          </Typography>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1px",
              "&:hover": {
                backgroundColor: "#c2c1fe",
              },
            }}
            component={NavLink}
            to="/signup"
          >
            <ListItemText
              primary="Register"
              sx={{
                textAlign: "center",
                color: "#9A98FE",
                marginBottom: "1px",
              }}
            />
          </ListItem>
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#c2c1fe",
              },
            }}
            component={NavLink}
            to="/managerbooking"
          >
            <ListItemText
              primary="Manager Your Booking"
              sx={{
                textAlign: "center",
                color: "#9A98FE",
                marginTop: "-5px",
              }}
            />
          </ListItem>
        </List>
      </Drawer>

      <Toolbar />
    </div>
  );
};

export default NavBar;
