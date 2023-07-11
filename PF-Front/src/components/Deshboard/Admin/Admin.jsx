import React, { useState } from "react";
import { Tabs, Tab, createTheme, Grid, Typography } from "@mui/material";
import AdminHotel from "./AdminHotel/AdminHotel";
import AdminRooms from "./AdminRooms/AdminRooms";
import AdminBookings from "./AdminBookings/AdminBookings";
import AdminUsers from "./AdminUsers/AdminUsers";

const Admin = () => {
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
            sx={{ width: "auto", backgroundColor: "#FAFAFF" }}>
            <div style={{ width: "90%" }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        color: "#0400CB",
                        textAlign: "Start",
                        margin: "20px",
                    }}>
                    DASHBOARD
                </Typography>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary">
                    <Tab
                        label="Custome Hotel"
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
                        label="Manage Rooms"
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
                        label="Manage Reserves"
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
                        label="Manage Users"
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
                {selectedTab === 0 && <AdminHotel />}
                {selectedTab === 1 && <AdminRooms />}
                {selectedTab === 2 && <AdminBookings />}
                {selectedTab === 3 && <AdminUsers />}
            </div>
        </Grid>
    );
};

export default Admin;
