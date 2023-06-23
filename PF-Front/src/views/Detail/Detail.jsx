import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/DetailFooter/Footer";
import Calendar from "../../components/Calendar/Calendar";

import Reviews from "../../components/Reviews/Reviews";

const Detail = () => {
    return (
        <main style={{ margin: "0 1rem 1rem 0" }}>
            <Grid
                container
                spacing={1}
                sx={{
                    fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    overflow: "hidden",
                    background: "#ffffff",
                    height: "140vh",
                    flexWrap: "wrap",
                }}>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            height: "100vh",
                            width: "100%",
                            p: 2,
                        }}>
                        <Gallery />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            margin: "1rem 0 0.1rem 0",
                            borderRadius: "5px",
                            height: "100vh",
                            backgroundColor: "rgb(225, 202, 252)",
                            p: 2,
                        }}>
                        <Calendar />
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={8}
                    lg={8}
                    xl={8}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            margin: "0.1rem",
                            borderRadius: "5px",
                            height: "40vh",
                            backgroundColor: "rgb(225, 202, 252)",
                            p: 2,
                        }}>
                        <Footer>footer</Footer>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={4}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            margin: "0.1rem",
                            borderRadius: "5px",
                            height: "40vh",
                            backgroundColor: "rgb(225, 202, 252)",
                            p: 2,
                        }}>
                        <Reviews />
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
};

export default Detail;
