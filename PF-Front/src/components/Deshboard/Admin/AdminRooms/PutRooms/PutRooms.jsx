import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Snackbar,
    Alert,
    Box,
    Stack,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../../../../Firebase/Firebase.config";
import PutRoomsBoard from "./PutRoomsBoard";
const PutRooms = () => {
    const [roomData, setRoomData] = useState({});
    const [roomInfo, setRoomInfo] = useState({});
    const [roomToUpdate, setRoomToUpdate] = useState({});
    const [openAlert, setOpenAlert] = useState(false);
    const [roomFacilities, setRoomFacilities] = useState([]);

    const handleInputChange = (e, key) => {
        const value = e.target.value;
        setRoomInfo((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (!roomInfo.room_number) {
                alert("Specify a Room Number");
                return;
            }

            const response = await axios.get(
                `/rooms/admin?room_number=${roomInfo.room_number}`
            );
            const room = response.data.room;
            setRoomData(room);

            setOpenAlert(true);
        } catch (error) {
            console.log("Error al realizar la solicitud:", error);
        }
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };

    return (
        <Box>
            <Grid
                marginTop={"2rem"}
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Room Number"
                        value={roomInfo.room_number || ""}
                        onChange={(e) => handleInputChange(e, "room_number")}
                        variant="outlined"
                        margin="normal"
                        required
                        inputProps={{
                            type: "number",
                            min: 0,
                        }}
                        sx={{ margin: "0.5rem" }}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: "170px",
                            borderRadius: "30px",
                            height: "45px",
                            color: "#868688",
                            marginTop: "10px",
                            marginLeft: "20px",
                            marginBottom: "50px",
                            backgroundColor: "#9A98FE",
                            "&:hover": {
                                backgroundColor: "#c2c1fe",
                            },
                        }}>
                        Get Room
                    </Button>
                </form>
            </Grid>
            {roomData && Object.keys(roomData).length > 0 && (
                <Grid
                    container
                    columnSpacing={4}
                    marginTop={"20px"}>
                    {" "}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}>
                        <PutRoomsBoard
                            props={roomData}
                            roomNum={roomInfo.room_number}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">
                                    Room Name: {roomData.name}
                                </Typography>
                                <br />
                                <Typography variant="h5">
                                    Available:{" "}
                                    {roomData.available
                                        ? "Available"
                                        : "Not Available"}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Room Number: {roomData.room_number}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Room Type: {roomData.room_type}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Capacity: {roomData.capacity}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Price: ${roomData.price}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Number of Beds: {roomData.number_of_beds}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Facilities:{" "}
                                    {roomData.facilities &&
                                        roomData.facilities.join(", ")}
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Room Description:{" "}
                                    {roomData.room_description}
                                </Typography>{" "}
                                <br />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={roomData.image?.bed}
                                    alt="Bed Image"
                                />
                                <Typography variant="body1">
                                    img URL: {roomData.image?.bed}
                                </Typography>
                                <br />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={roomData.image?.bathroom}
                                    alt="bathroom Image"
                                />
                                <Typography variant="body1">
                                    img URL: {roomData.image?.bathroom}
                                </Typography>
                                <br />
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={roomData.image?.bathroom2}
                                    alt="bathroom Image"
                                />
                                <Typography variant="body1">
                                    img URL: {roomData.image?.bathroom2}
                                </Typography>
                                <br />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}

            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    sx={{ width: "80%", backgroundColor: "#A5D6A7" }}>
                    Room Found Successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default PutRooms;
