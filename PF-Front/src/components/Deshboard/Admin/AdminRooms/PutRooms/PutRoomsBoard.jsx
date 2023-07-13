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
    Switch,
    FormGroup,
    Snackbar,
    Alert,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Stack,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../../../../Firebase/Firebase.config";

const PutRoomsBoard = ({ roomNum, props }) => {
    const { available, active } = props;
    const [roomName, setRoomName] = useState("");
    const [roomType, setRoomType] = useState("");
    const [roomCapacity, setRoomCapacity] = useState(0);
    const [roomFacilities, setRoomFacilities] = useState([]);
    const [roomDescription, setRoomDescription] = useState("");
    const [bathImage1, setBathImage1] = useState(null);
    const [bathImage2, setBathImage2] = useState(null);
    const [bedImage, setBedImage] = useState(null);
    const [numberOfBeds, setNumberOfBeds] = useState(0);
    const [roomNumber, setRoomNumber] = useState(roomNum);
    const [roomPrice, setRoomPrice] = useState(0);
    const [openAlert, setOpenAlert] = useState(false);
    const [avai, setAvai] = useState(available);
    const [acti, setActi] = useState(active);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [confirmActi, setConfirmActi] = useState(false);
    const storage = getStorage(app);
    const handleSwitchToggle = () => {
        setActi(!acti);
        setConfirmActi(!confirmActi);
        setDialogOpen(true);
        props.active = !acti;
    };

    const handleDialogConfirm = () => {
        setConfirmActi(!confirmActi);
        setDialogOpen(false);
    };

    const handleDialogCancel = () => {
        setDialogOpen(false);
    };
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

            // Crea un objeto auxiliar para incluir solo las propiedades modificadas
            const updatedData = {};
            if (avai !== available && avai !== undefined && avai !== null) {
                updatedData.available = avai;
            }
            if (acti !== active && acti !== undefined && acti !== null) {
                updatedData.active = acti.toString();
            }
            if (roomName !== "") {
                updatedData.name = roomName;
            }
            if (roomType !== "") {
                updatedData.room_type = roomType;
            }
            if (roomCapacity !== 0) {
                updatedData.capacity = roomCapacity;
            }
            if (roomPrice !== 0) {
                updatedData.price = roomPrice;
            }
            if (numberOfBeds !== 0) {
                updatedData.number_of_beds = numberOfBeds;
            }
            if (bedImageURL !== null) {
                updatedData.image = { ...updatedData.image, bed: bedImageURL };
            }
            if (bathImage1URL !== null) {
                updatedData.image = {
                    ...updatedData.image,
                    bathroom: bathImage1URL,
                };
            }
            if (bathImage2URL !== null) {
                updatedData.image = {
                    ...updatedData.image,
                    bathroom2: bathImage2URL,
                };
            }
            if (roomFacilities.length > 0) {
                updatedData.facilities = roomFacilities;
            }
            if (roomDescription !== "") {
                updatedData.room_description = roomDescription;
            }

            const requestData = {
                room_number: +roomNum,
                available: avai,
                active: acti.toString(),
                ...updatedData,
            };

            console.log(requestData);
            const response = await axios.put("/rooms", requestData);

            console.log("Respuesta del servidor:", response.data);

            // Restablecer los campos del formulario
            setRoomName("");
            setRoomType("");
            setRoomCapacity(0);
            setRoomFacilities([]);
            setRoomDescription("");
            setBathImage1(null);
            setBathImage2(null);
            setBedImage(null);
            setNumberOfBeds(1);
            setRoomNumber(roomNum);
            setRoomPrice(0);
            setAvai(available);
            setActi(active);

            setOpenAlert(true);
        } catch (error) {
            console.log("Error al realizar la solicitud:", error);
        }
    };

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };
    const [openDialog, setOpenDialog] = useState(false);

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
                        md={12}
                        lg={12}
                        xl={12}>
                        <TextField
                            label="Room Number"
                            value={roomNum}
                            onChange={(e) => setRoomNumber(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                            disabled
                            inputProps={{
                                type: "number",
                                min: 0,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <div>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={avai}
                                        onChange={() => {
                                            setAvai(!avai);
                                            console.log(avai);
                                        }}
                                        color="primary"
                                    />
                                }
                                label={
                                    avai === true ? (
                                        <span>Remove Room from Home page</span>
                                    ) : (
                                        <span>Show Room on Home Page</span>
                                    )
                                }
                                sx={{
                                    borderRadius: "10px",
                                    backgroundColor: "#FFCDD2",
                                    margin: "1rem",
                                    paddingRight: "1rem",
                                }}
                            />
                            {/* <FormControlLabel
                                control={
                                    <Switch
                                        checked={acti}
                                        onChange={handleSwitchToggle}
                                        color="secondary"
                                    />
                                }
                                label={
                                    acti ? (
                                        <span>Active</span>
                                    ) : (
                                        <span>Not Active</span>
                                    )
                                }
                                sx={{ marginBottom: "1rem" }}
                            /> */}
                        </div>
                        <TextField
                            label="Room Name"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
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
                            inputProps={{
                                type: "number",
                                min: 0,
                                max: 10,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
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
                        {/* facilities */}
                        <FormControl
                            component="fieldset"
                            sx={{ marginBottom: "1rem" }}>
                            <FormLabel
                                component="legend"
                                sx={{ color: "#868688", fontSize: "15px" }}>
                                Facilities
                            </FormLabel>
                            <Stack
                                direction="column"
                                spacing={2}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={roomFacilities.includes(
                                                "Sauna"
                                            )}
                                            onChange={handleFacilityChange}
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
                                            onChange={handleFacilityChange}
                                            value="Jacuzzi"
                                        />
                                    }
                                    label="Jacuzzi"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={roomFacilities.includes(
                                                "Private Pool"
                                            )}
                                            onChange={handleFacilityChange}
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
                                            onChange={handleFacilityChange}
                                            value="Free Mini Bar"
                                        />
                                    }
                                    label="Free Mini Bar"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={roomFacilities.includes(
                                                "Welcome Gift"
                                            )}
                                            onChange={handleFacilityChange}
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
                                            onChange={handleFacilityChange}
                                            value="Airport Pickup"
                                        />
                                    }
                                    label="Airport Pickup"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={roomFacilities.includes(
                                                "Party Room"
                                            )}
                                            onChange={handleFacilityChange}
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
                                            onChange={handleFacilityChange}
                                            value="Safe Box"
                                        />
                                    }
                                    label="Safe Box"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={roomFacilities.includes(
                                                "Smart TV"
                                            )}
                                            onChange={handleFacilityChange}
                                            value="Smart TV"
                                        />
                                    }
                                    label="Smart TV"
                                />
                            </Stack>
                        </FormControl>
                        <Grid
                            container
                            direction="column"
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
                        marginLeft: "200px",
                        marginBottom: "50px",
                        backgroundColor: "#9A98FE",
                        "&:hover": {
                            backgroundColor: "#c2c1fe",
                        },
                    }}>
                    Modify Room
                </Button>
            </form>{" "}
            <Dialog
                open={dialogOpen}
                onClose={handleDialogCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Confirmar cambios"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {acti
                            ? "By deactivating this room, it will be disabled throughout the website."
                            : "By activating this room, it will be available to users throughout the website."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleDialogCancel}
                        color="primary">
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleDialogConfirm}
                        color="primary"
                        autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={openAlert}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert
                    onClose={handleCloseAlert}
                    severity="success"
                    sx={{ width: "80%", backgroundColor: "#A5D6A7" }}>
                    Room Was Successfully Updated!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default PutRoomsBoard;
