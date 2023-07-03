import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Content, Title } from "./LandingStyles";
import Gallery from "../../components/Gallery/Gallery";

const Landing = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(200, 170, 600)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                padding: 0,
            }}>
            <Content
                sx={{
                    padding: 0,
                }}>
                <Title>SUNSET SANDS HOTEL</Title>
                <Link to="/home">
                    <Button variant="contained">Book Now!</Button>
                </Link>
            </Content>
            <Gallery
                sx={{
                    backgroundSize: "cover",
                    overflowX: "hidden",
                }}
            />
        </Box>
    );
};

export default Landing;
