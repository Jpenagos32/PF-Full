import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/slices/authSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useSelector((state) => state.loginStatus.user);

  useEffect(() => {}, [user]);

  useEffect(() => {
    let timer;
    if (openDrawer) {
      timer = setTimeout(() => {
        setOpenDrawer(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [openDrawer]);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

  const handleLogout = () => {
    logout();
    navigate("/home");
    handleDrawerClose();
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
          zIndex: 999,
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
          {!user && (
            <>
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
                onClick={handleDrawerClose}
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
                onClick={handleDrawerClose}
              >
                <ListItemText
                  primary="Manage Your Booking"
                  sx={{
                    textAlign: "center",
                    color: "#9A98FE",
                    marginTop: "-5px",
                  }}
                />
              </ListItem>
            </>
          )}

          {user && (
            <>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "#c2c1fe",
                  },
                }}
                component={NavLink}
                to="/myaccount"
                onClick={handleDrawerClose}
              >
                <ListItemText
                  primary="My Account"
                  sx={{
                    textAlign: "center",
                    color: "#9A98FE",
                    marginTop: "-5px",
                  }}
                />
              </ListItem>
              <ListItem
                sx={{
                  justifyContent: "center",
                  marginBottom: "1px",
                }}
              >
                <Button
                  onClick={handleLogout}
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
                  Sign Out
                </Button>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>

      <Toolbar />
    </div>
  );
};

export default NavBar;
