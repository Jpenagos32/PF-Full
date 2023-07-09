import React, { useState } from "react";
import { Tabs, Tab, createTheme, Grid, Typography } from "@mui/material";
import PutRooms from "./PutRooms/PutRooms";
import PostRooms from "./PostRooms/PostRooms";

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
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        color: "#0400CB",
                        textAlign: "Start",
                        margin: "20px",
                    }}>
                    Rooms Dashboard
                </Typography>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    textColor="primary"
                    indicatorColor="primary">
                    <Tab
                        label="Create Room"
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
                        label="Modify Room"
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
                {selectedTab === 0 && <PostRooms />}
                {selectedTab === 1 && <PutRooms />}
            </div>
        </Grid>
    );
};

export default AdminRooms;
