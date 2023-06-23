import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

const Footer = () => {
    return (
        <main
            style={{
                flex: 1,
            }}>
            <Grid
                container
                spacing={1}
                sx={{
                    fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    overflow: "hidden",
                    background: "rgb(225, 202, 252)",
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
                        spacing={1}>
                        <h2>Duplex Room</h2>
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
                        spacing={1}>
                        <h2>$3425.00</h2>
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
                        spacing={1}>
                        <div>
                            <h3>Facilities</h3>
                            <div>
                                <span>*Free Parking</span>
                                <br />
                                <span>*Jacuzzi</span>
                                <br />

                                <span>*WiFibar</span>
                                <br />
                                <span>*Mini Bar</span>
                            </div>
                        </div>
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
                        spacing={1}>
                        <div>
                            <h4>Policies</h4>
                            <span>Cambios</span>
                            <br />
                            <span>Cancelaciones</span>
                            <br />

                            <span>Modificacion de reservas</span>
                            <br />
                            <span>FAQ</span>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
};

export default Footer;
