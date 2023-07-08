import React, { useState } from "react";
import { Tabs, Tab, ThemeProvider, createTheme } from "@mui/material";
import AdminHotel from "./AdminHotel/AdminHotel";
import AdminRooms from "./AdminRooms/AdminRooms";
import AdminBookings from "./AdminBookings/AdminBookings";
import AdminUsers from "./AdminUsers/AdminUsers";
// import AdminAdmins from "./AdminAdmins/AdminAdmins";

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
        <ThemeProvider theme={theme}>
            <div>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary">
                    <Tab
                        label="Hotel"
                        sx={{
                            backgroundColor: "#C2C2C2",
                            color: "#868688",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    />
                    <Tab
                        label="Rooms"
                        sx={{
                            backgroundColor: "#C2C2C2",
                            color: "#868688",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    />
                    <Tab
                        label="Bookings"
                        sx={{
                            backgroundColor: "#C2C2C2",
                            color: "#868688",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    />
                    <Tab
                        label="Users"
                        sx={{
                            backgroundColor: "#C2C2C2",
                            color: "#868688",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    />
                    {/* <Tab
                        label="Admins"
                        sx={{
                            backgroundColor: "#C2C2C2",
                            color: "#868688",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    /> */}
                </Tabs>
                {selectedTab === 0 && <AdminHotel />}
                {selectedTab === 1 && <AdminRooms />}
                {selectedTab === 2 && <AdminBookings />}
                {selectedTab === 3 && <AdminUsers />}
                {/* {selectedTab === 4 && <AdminAdmins />} */}
            </div>
        </ThemeProvider>
    );
};

export default Admin;
