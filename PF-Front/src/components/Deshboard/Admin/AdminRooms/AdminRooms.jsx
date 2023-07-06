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
} from "@mui/material";
import { useDropzone } from "react-dropzone";

const AdminRooms = () => {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí va la lógica para enviar los datos del formulario a firebase y a mongo
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid
                container
                spacing={2}>
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
                    <div
                        {...getBedRootProps()}
                        style={{
                            minHeight: "100px",
                            border: "2px dashed #9A98FE",
                            padding: "1rem",
                            borderRadius: "10px",
                            cursor: "pointer",
                            margin: "0.5rem",
                        }}>
                        <input {...getBedInputProps()} />
                        {bedImage ? (
                            <img
                                src={URL.createObjectURL(bedImage)}
                                alt="BedImage"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the bed image here, or click to
                                select
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
                        }}>
                        <input {...getBath1InputProps()} />
                        {bathImage1 ? (
                            <img
                                src={URL.createObjectURL(bathImage1)}
                                alt="Bath Image 1"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the first bath image here, or
                                click to select
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
                        }}>
                        <input {...getBath2InputProps()} />
                        {bathImage2 ? (
                            <img
                                src={URL.createObjectURL(bathImage2)}
                                alt="Bath Image 2"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the second bath image here, or
                                click to select
                            </p>
                        )}
                    </div>
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
                                value="Single"
                                control={<Radio color="primary" />}
                                label="Single"
                            />
                            <FormControlLabel
                                value="Double"
                                control={<Radio color="primary" />}
                                label="Double"
                            />
                            <FormControlLabel
                                value="Suite"
                                control={<Radio color="primary" />}
                                label="Suite"
                            />
                        </RadioGroup>
                    </FormControl>
                    <FormControl
                        component="fieldset"
                        sx={{ marginBottom: "1rem" }}>
                        <FormLabel
                            component="legend"
                            sx={{ color: "#868688", fontSize: "15px" }}>
                            Facilities
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roomFacilities.includes(
                                            "WiFi"
                                        )}
                                        onChange={handleFacilityChange}
                                        value="WiFi"
                                    />
                                }
                                label="WiFi"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roomFacilities.includes("TV")}
                                        onChange={handleFacilityChange}
                                        value="TV"
                                    />
                                }
                                label="TV"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={roomFacilities.includes(
                                            "Air Conditioning"
                                        )}
                                        onChange={handleFacilityChange}
                                        value="Air Conditioning"
                                    />
                                }
                                label="Air Conditioning"
                            />
                        </FormGroup>
                    </FormControl>
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
                        }}
                        sx={{ margin: "0.5rem" }}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginLeft: "47vw" }}>
                Submit
            </Button>
        </form>
    );
};

export default AdminRooms;
