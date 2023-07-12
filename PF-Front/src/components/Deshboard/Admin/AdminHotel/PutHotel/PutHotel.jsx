import React, { useState, useEffect } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Snackbar,
    Alert,
    Box,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import axios from "axios";
import PutHotelBoard from "./PutHotelBoard";
const PutHotel = () => {
    const [hotelData, setHotelData] = useState({});
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await axios.get("/hotel");
                const hotel = response.data[0];
                setHotelData(hotel);
            } catch (error) {
                console.log("Error fetching hotel data:", error);
            }
        };

        fetchHotelData();
    }, []);

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    return (
        <Box>
            <Grid
                container
                columnSpacing={2}
                marginTop={"20px"}>
                {" "}
                <Grid
                    marginTop={"2rem"}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}>
                    <PutHotelBoard props={hotelData} />
                </Grid>
                <Grid
                    marginTop={"2rem"}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}>
                    <Typography variant="h4">Hotel Information</Typography>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">
                                Hotel Name: {hotelData.name}
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                NIU: {hotelData.niu}
                            </Typography>
                            <br />{" "}
                            <Typography variant="body1">
                                Cancelation Policies: {hotelData.cancelation}
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                Translator:{" "}
                                {hotelData.translator ? "Yes" : "No"}
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                Tourist Guide:{" "}
                                {hotelData.tourist_guide ? "Yes" : "No"}
                            </Typography>
                            <br />
                            {hotelData.images && (
                                <>
                                    <Typography variant="body1">
                                        Images:
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Logo:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.logo}
                                        alt="Logo"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.logo}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Aerial View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.aerial}
                                        alt="Aerial View"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.views.aerial}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Lake View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.lake}
                                        alt="Lake View"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.views.lake}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Garden View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.garden}
                                        alt="Garden View"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.views.garden}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Mountain View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.mountain}
                                        alt="Mountain View"
                                    />
                                    <Typography variant="body1">
                                        {" "}
                                        {hotelData.images.views.mountain}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Beach View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.beach}
                                        alt="Beach View"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.views.beach}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        City View:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.views.city}
                                        alt="City View"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.views.city}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Reception:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.reception}
                                        alt="Reception"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.reception}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Pool:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.pool}
                                        alt="Pool"
                                    />

                                    <Typography variant="body1">
                                        {hotelData.images.pool}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Restaurant:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.restaurant}
                                        alt="Restaurant"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.restaurant}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Meeting Room:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.meeting_room}
                                        alt="Meeting Room"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.meeting_room}
                                    </Typography>
                                    <br />
                                    <Typography variant="body1">
                                        Bar:
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={hotelData.images.bar}
                                        alt="Bar"
                                    />
                                    <Typography variant="body1">
                                        {hotelData.images.bar}
                                    </Typography>
                                    <br />
                                </>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PutHotel;
