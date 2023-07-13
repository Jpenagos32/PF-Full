import React, { useState } from "react";
import { Tabs, Tab, createTheme, Grid, Typography, Box } from "@mui/material";
import MyProfile from "./MyProfile";
import MyBookings from "./MyBookings";
import Setting from "./Setting";

const User = ({ userData }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#9A98FE",
      },
      text: {
        primary: "#868688",
      },
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ width: "auto", backgroundColor: "#FAFAFF" }}
    >
      <div style={{ width: "80%", margin: "20px" }}>
        <Box sx={{ padding: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#0400CB",
              textAlign: "start",
              marginTop: "-2%",
              marginLeft: "-15.7px",
            }}
          >
            Welcome,
            <Box component="span" sx={{ marginLeft: "15px" }}>
              {userData.user_first_name}
            </Box>
          </Typography>
        </Box>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            borderRadius: "5px",
            width: "125%",
          }}
        >
          <Tab
            label="My Profile"
            sx={{
              backgroundColor: "#F3F3F7",
              color: "#868688",
              "&.Mui-selected": {
                color: "#9A98FE",
                backgroundColor: "#EFEEFF",
              },
            }}
          />
          <Tab
            label="My Bookings"
            sx={{
              backgroundColor: "#F3F3F7",
              color: "#868688",
              "&.Mui-selected": {
                color: "#9A98FE",
                backgroundColor: "#EFEEFF",
              },
            }}
          />
          <Tab
            label="Settings"
            sx={{
              backgroundColor: "#F3F3F7",
              color: "#868688",
              "&.Mui-selected": {
                color: "#9A98FE",
                backgroundColor: "#EFEEFF",
              },
            }}
          />
        </Tabs>
        {selectedTab === 0 && <MyProfile userData={userData} />}
        {selectedTab === 1 && <MyBookings userData={userData} />}
        {selectedTab === 2 && <Setting userData={userData} />}
      </div>
    </Grid>
  );
};

export default User;
