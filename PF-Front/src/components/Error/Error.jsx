import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Content, Title } from "./ErrorStyles";
import Gallery from "../../components/Gallery/Gallery";

const Error = () => {
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
                    <Title>LOOKS LIKE NOTHING HERE</Title>
                    <Link to="/home">
                        <Button variant="contained">Back To Home</Button>
                    </Link>
                </Content>
            </Container>
            <Gallery />
        </Box>
    );
};

export default Error;
