import React, { useState } from "react";
import { Tabs, Tab, createTheme, Grid, Typography } from "@mui/material";
import PostHotel from "./PostHotel/PostHotel.jsx";
import PutHotel from "./PutHotel/PutHotel";

const AdminRooms = () => {
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
            <div style={{ width: "100%" }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary">
                    <Tab
                        label="Modify Hotel Data"
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
                        label="Create Hotel"
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
                {selectedTab === 1 && <PostHotel />}
                {selectedTab === 0 && <PutHotel />}
            </div>
        </Grid>
    );
};

export default AdminRooms;
