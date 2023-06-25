import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Title } from "./LandingStyles";
import Gallery from "../../components/Gallery/Gallery";

const Landing = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(200, 170, 600)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
            }}>
            <Container>
                <Content>
                    <Title>SUNSET SANDS HOTEL</Title>
                    <Link to="/home">
                        <Button variant="contained">Home</Button>
                    </Link>
                </Content>
            </Container>
            <Gallery />
        </Box>
    );
};

export default Landing;
