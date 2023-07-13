import React, { useState } from "react";
import { Tabs, Tab, createTheme, Grid, Typography } from "@mui/material";
import PutRooms from "./PutRooms/PutRooms.jsx";
import PostRooms from "./PostRooms/PostRooms";
import DeleteRooms from "./DeleteRooms/DeleteRooms";

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
                    <Tab
                        label="Delete Room"
                        sx={{
                            backgroundColor: "#F3F3F7",
                            color: "red",
                            "&.Mui-selected": {
                                color: "#9A98FE",
                                backgroundColor: "#EFEEFF",
                            },
                        }}
                    />
                </Tabs>
                {selectedTab === 0 && <PostRooms />}
                {selectedTab === 1 && <PutRooms />}
                {selectedTab === 2 && <DeleteRooms />}
            </div>
        </Grid>
    );
};

export default AdminRooms;
