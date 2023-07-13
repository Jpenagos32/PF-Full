import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    FormControlLabel,
    FormControl,
    Checkbox,
    Radio,
    RadioGroup,
    FormLabel,
    FormGroup,
    Snackbar,
    Alert,
    Box,
    Stack,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../../../../Firebase/Firebase.config";

const PostRooms = () => {
    const [roomName, setRoomName] = useState("");
    const [roomType, setRoomType] = useState("");
    const [roomCapacity, setRoomCapacity] = useState("");
    const [roomFacilities, setRoomFacilities] = useState([]);
    const [roomDescription, setRoomDescription] = useState("");
    const [bathImage1, setBathImage1] = useState(null);
    const [bathImage2, setBathImage2] = useState(null);
    const [bedImage, setBedImage] = useState(null);
    const [numberOfBeds, setNumberOfBeds] = useState(1);
    const [roomNumber, setRoomNumber] = useState(0);
    const [roomPrice, setRoomPrice] = useState(1);
    const [openAlert, setOpenAlert] = useState(false);

    const storage = getStorage(app);

    const uploadImage = async (file) => {
        const storageRef = ref(storage, file.name);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    };

    const onDropBed = (acceptedFiles) => {
        setBedImage(acceptedFiles[0]);
    };

    const onDropBath2 = (acceptedFiles) => {
        setBathImage2(acceptedFiles[0]);
    };

    const onDropBath1 = (acceptedFiles) => {
        setBathImage1(acceptedFiles[0]);
    };

    const { getRootProps: getBedRootProps, getInputProps: getBedInputProps } =
        useDropzone({ onDrop: onDropBed });

    const {
        getRootProps: getBath1RootProps,
        getInputProps: getBath1InputProps,
    } = useDropzone({ onDrop: onDropBath1 });

    const {
        getRootProps: getBath2RootProps,
        getInputProps: getBath2InputProps,
    } = useDropzone({ onDrop: onDropBath2 });

    const handleFacilityChange = (event) => {
        const facility = event.target.value;
        const updatedFacilities = [...roomFacilities];

        if (event.target.checked) {
            updatedFacilities.push(facility);
        } else {
            const index = updatedFacilities.indexOf(facility);
            if (index !== -1) {
                updatedFacilities.splice(index, 1);
            }
        }

        setRoomFacilities(updatedFacilities);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Sube las imágenes seleccionadas a Firebase Storage y obtén las URL de descarga
            const bedImageURL = bedImage ? await uploadImage(bedImage) : null;
            const bathImage1URL = bathImage1
                ? await uploadImage(bathImage1)
                : null;
            const bathImage2URL = bathImage2
                ? await uploadImage(bathImage2)
                : null;

            if (
                !roomName ||
                !roomNumber ||
                !roomType ||
                !roomCapacity ||
                !roomPrice ||
                !numberOfBeds ||
                !numberOfBeds ||
                !bedImageURL ||
                !bathImage1URL ||
                !bathImage2URL ||
                !roomFacilities ||
                !roomDescription
            ) {
                // Mostrar mensaje de error o realizar alguna otra acción
                alert("Complete All The Fields To Create The Room");
                return;
            }

            // Lógica para enviar los datos del formulario a tu backend
            const requestData = {
                name: roomName,
                room_number: roomNumber,
                room_type: roomType,
                available: true,
                capacity: roomCapacity,
                price: roomPrice,
                number_of_beds: numberOfBeds,
                image: {
                    bed: bedImageURL,
                    bathroom: bathImage1URL,
                    bathroom2: bathImage2URL,
                },
                facilities: roomFacilities,
                room_description: roomDescription,
            };

            const response = await axios.post("/rooms", requestData);

            console.log("Respuesta del servidor:", response.data);

            // Restablecer los campos del formulario
            setRoomName("");
            setRoomType("");
            setRoomCapacity("");
            setRoomFacilities([]);
            setRoomDescription("");
            setBathImage1(null);
            setBathImage2(null);
            setBedImage(null);
            setNumberOfBeds(1);
            setRoomNumber(0);
            setRoomPrice(1);

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
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={4}
                    marginTop={"-20px"}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}>
                        <TextField
                            label="Room Name"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                maxLength: 40,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Room Description"
                            value={roomDescription}
                            onChange={(e) => setRoomDescription(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                maxLength: 100,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Room Price"
                            value={roomPrice}
                            onChange={(e) => setRoomPrice(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                type: "number",
                                min: 0,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Room Number"
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                type: "number",
                                min: 0,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Number of Beds"
                            value={numberOfBeds}
                            onChange={(e) => setNumberOfBeds(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                type: "number",
                                min: 0,
                                max: 5,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Room Capacity"
                            value={roomCapacity}
                            onChange={(e) => setRoomCapacity(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            inputProps={{
                                type: "number",
                                min: 0,
                                max: 10,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}>
                        <FormControl
                            component="fieldset"
                            sx={{ marginBottom: "1rem" }}>
                            <FormLabel
                                component="legend"
                                sx={{ color: "#868688", fontSize: "15px" }}>
                                Room Type
                            </FormLabel>
                            <RadioGroup
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                row>
                                <FormControlLabel
                                    value="Single Room"
                                    control={<Radio color="primary" />}
                                    label="Single Room"
                                />
                                <FormControlLabel
                                    value="Double Room"
                                    control={<Radio color="primary" />}
                                    label="Double Room"
                                />
                                <FormControlLabel
                                    value="Suite Room"
                                    control={<Radio color="primary" />}
                                    label="Suite Room"
                                />
                            </RadioGroup>
                        </FormControl>

                        <Stack
                            direction="row"
                            spacing={2}>
                            <FormControl
                                component="fieldset"
                                sx={{ marginBottom: "1rem" }}>
                                <FormLabel
                                    component="legend"
                                    sx={{ color: "#868688", fontSize: "15px" }}>
                                    Facilities
                                </FormLabel>
                                <Grid
                                    container
                                    spacing={2}>
                                    <Grid
                                        item
                                        xs={4}
                                        sm={3}
                                        md={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Sauna"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Sauna"
                                                />
                                            }
                                            label="Sauna"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Jacuzzi"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Jacuzzi"
                                                />
                                            }
                                            label="Jacuzzi"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sm={3}
                                        md={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Private Pool"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Private Pool"
                                                />
                                            }
                                            label="Private Pool"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Free Mini Bar"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Free Mini Bar"
                                                />
                                            }
                                            label="Free Mini Bar"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sm={3}
                                        md={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Welcome Gift"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Welcome Gift"
                                                />
                                            }
                                            label="Welcome Gift"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Airport Pickup"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Airport Pickup"
                                                />
                                            }
                                            label="Airport Pickup"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sm={3}
                                        md={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Party Room"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Party Room"
                                                />
                                            }
                                            label="Party Room"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Safe Box"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Safe Box"
                                                />
                                            }
                                            label="Safe Box"
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={4}
                                        sm={3}
                                        md={2}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={roomFacilities.includes(
                                                        "Smart TV"
                                                    )}
                                                    onChange={
                                                        handleFacilityChange
                                                    }
                                                    value="Smart TV"
                                                />
                                            }
                                            label="Smart TV"
                                        />
                                    </Grid>
                                </Grid>
                            </FormControl>
                        </Stack>
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            spacing={2}>
                            <div
                                {...getBedRootProps()}
                                style={{
                                    minHeight: "100px",
                                    border: "2px dashed #9A98FE",
                                    padding: "1rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    margin: "0.5rem",
                                    maxWidth: "15vw",
                                }}>
                                <input {...getBedInputProps()} />
                                {bedImage ? (
                                    <img
                                        src={URL.createObjectURL(bedImage)}
                                        alt="BedImage"
                                        style={{
                                            margin: "0.5rem",
                                            maxWidth: "15vw",
                                            maxHeight: "100px",
                                        }}
                                    />
                                ) : (
                                    <p style={{ margin: 0 }}>
                                        Drag and drop the bed image here, or
                                        click to select
                                    </p>
                                )}
                            </div>
                            <div
                                {...getBath1RootProps()}
                                style={{
                                    margin: "0.5rem",
                                    minHeight: "100px",
                                    border: "2px dashed #9A98FE",
                                    padding: "1rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    maxWidth: "15vw",
                                }}>
                                <input {...getBath1InputProps()} />
                                {bathImage1 ? (
                                    <img
                                        src={URL.createObjectURL(bathImage1)}
                                        alt="Bath Image 1"
                                        style={{
                                            margin: "0.5rem",
                                            maxWidth: "15vw",
                                            maxHeight: "100px",
                                        }}
                                    />
                                ) : (
                                    <p style={{ margin: 0 }}>
                                        Drag and drop the first bath image here,
                                        or click to select
                                    </p>
                                )}
                            </div>
                            <div
                                {...getBath2RootProps()}
                                style={{
                                    margin: "0.5rem",
                                    minHeight: "100px",
                                    border: "2px dashed #9A98FE",
                                    padding: "1rem",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    maxWidth: "15vw",
                                }}>
                                <input {...getBath2InputProps()} />
                                {bathImage2 ? (
                                    <img
                                        src={URL.createObjectURL(bathImage2)}
                                        alt="Bath Image 2"
                                        style={{
                                            margin: "0.5rem",
                                            maxWidth: "15vw",
                                            maxHeight: "100px",
                                        }}
                                    />
                                ) : (
                                    <p style={{ margin: 0 }}>
                                        Drag and drop the second bath image
                                        here, or click to select
                                    </p>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: "170px",
                        borderRadius: "30px",
                        height: "45px",
                        color: "#868688",
                        marginTop: "15px",
                        marginLeft: "500px",
                        marginBottom : "50px",
                        backgroundColor: "#9A98FE",
                        "&:hover": {
                          backgroundColor: "#c2c1fe",
                        },
                      }}>
                    Create
                </Button>
            </form>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    sx={{ width: "80%", backgroundColor: "#A5D6A7" }}>
                    Room Was Created Successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default PostRooms;
