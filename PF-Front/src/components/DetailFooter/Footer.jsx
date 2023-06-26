import { Grid } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Footer = (props) => {
    //const facilities = props.facilities;
    //const price = props.price;
    //const description = props.description
    //const name = props.name
    const name = "Duplex Room";
    const description =
        "descripcion ejemplo del tipo de habitacion mostrado en el datail, con fotos, facilities, precio por noche y nombre de la habitacion.";
    const facilities = {
        plancha: true,
        estufa: true,
        piscina: false,
        pulgas: true,
    };
    const price = 345;
    return (
        <main style={{ flex: 1, padding: "0 0 1rem 0" }}>
            <Grid
                container
                spacing={1}
                sx={{
                    fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                    overflow: "hidden",
                    background: "#efeeff",
                    flexWrap: "nowrap",
                }}>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}>
                    <Grid
                        container
                        spacing={1}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "40px",
                                fontWeight: "bold",
                                color: "#868688",
                                marginTop: "20px",
                            }}>
                            {name}
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#868688",
                                marginTop: "20px",
                            }}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    xl={3}>
                    <Grid
                        container
                        spacing={1}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bolder",
                                color: "#868688",
                                marginTop: "20px",
                            }}>
                            {"U$D"}
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: "50px",
                                fontWeight: "bolder",
                                color: "#0400cb",
                                marginTop: "20px",
                            }}>
                            {`${price}`}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: "#c2c2c2",
                                marginTop: "50px",
                            }}>
                            {"/night"}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    lg={2}
                    xl={2}>
                    <Grid
                        container
                        spacing={1}>
                        <div>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#868688",
                                    marginTop: "20px",
                                }}>
                                {"Facilities"}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    color: "#c2c2c2",
                                    marginTop: "5px",
                                }}>
                                {
                                    <div>
                                        {Object.entries(facilities).map(
                                            ([key, value]) => {
                                                if (value === true) {
                                                    return (
                                                        <React.Fragment
                                                            key={key}>
                                                            <span>{key}</span>
                                                            <br />
                                                        </React.Fragment>
                                                    );
                                                }
                                                return null;
                                            }
                                        )}
                                    </div>
                                }
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    xl={3}>
                    <Grid
                        container
                        spacing={1}>
                        <div>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#868688",
                                    marginTop: "20px",
                                }}>
                                {"Policies"}
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: "bold",
                                    color: "#c2c2c2",
                                    marginTop: "5px",
                                }}>
                                {
                                    <React.Fragment>
                                        <span>Reservation changes</span>
                                        <hr />
                                        <span>Cancelations</span>
                                        <hr />
                                        <span>Refunds</span>
                                        <hr />
                                        <span>FAQs</span>
                                        <hr />
                                    </React.Fragment>
                                }
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
};

export default Footer;
