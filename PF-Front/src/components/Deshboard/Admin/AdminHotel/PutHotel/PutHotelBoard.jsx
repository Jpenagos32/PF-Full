import React, { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    FormControlLabel,
    Switch,
    Snackbar,
    Alert,
    Box,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../../../../Firebase/Firebase.config";

const PutHotelBoard = ({ props }) => {
    const { translator, tourist_guide, niu } = props;
    const [hotelName, setHotelName] = useState("");
    const [hotelCancelation, setHotelCancelation] = useState("");
    const [hotelNIU, setHotelNIU] = useState(niu);
    const [translatorChecked, setTranslatorChecked] = useState(
        translator || false
    );
    const [touristGuideChecked, setTouristGuideChecked] = useState(
        tourist_guide || false
    );

    const [openAlert, setOpenAlert] = useState(false);

    const storage = getStorage(app);
    const uploadImage = async (file) => {
        const storageRef = ref(storage, file.name);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        return downloadURL;
    };
    const onDropAerial = (acceptedFiles) => {
        setAerialImage(acceptedFiles[0]);
    };

    const onDropLake = (acceptedFiles) => {
        setLakeImage(acceptedFiles[0]);
    };

    const onDropMountain = (acceptedFiles) => {
        setMountainImage(acceptedFiles[0]);
    };
    const onDropGarden = (acceptedFiles) => {
        setGardenImage(acceptedFiles[0]);
    };

    const onDropBeach = (acceptedFiles) => {
        setBeachImage(acceptedFiles[0]);
    };

    const onDropCity = (acceptedFiles) => {
        setCityImage(acceptedFiles[0]);
    };
    const onDropReception = (acceptedFiles) => {
        setReceptionImage(acceptedFiles[0]);
    };

    const onDropPool = (acceptedFiles) => {
        setPoolImage(acceptedFiles[0]);
    };

    const onDropRestaurant = (acceptedFiles) => {
        setRestaurantImage(acceptedFiles[0]);
    };
    const onDropMeetingRoom = (acceptedFiles) => {
        setMeetingRoomImage(acceptedFiles[0]);
    };

    const onDropBar = (acceptedFiles) => {
        setBarImage(acceptedFiles[0]);
    };

    const onDropLogo = (acceptedFiles) => {
        setLogoImage(acceptedFiles[0]);
    };

    const [aerialImage, setAerialImage] = useState(null);
    const [lakeImage, setLakeImage] = useState(null);
    const [gardenImage, setGardenImage] = useState(null);
    const [mountainImage, setMountainImage] = useState(null);
    const [beachImage, setBeachImage] = useState(null);
    const [cityImage, setCityImage] = useState(null);
    const [receptionImage, setReceptionImage] = useState(null);
    const [poolImage, setPoolImage] = useState(null);
    const [restaurantImage, setRestaurantImage] = useState(null);
    const [meetingRoomImage, setMeetingRoomImage] = useState(null);
    const [barImage, setBarImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (files, fileRejections, event) =>
            handleDrop(files, event.target.name),
        accept: "image/*",
        maxFiles: 1,
    });

    const handleTranslatorChange = () => {
        setTranslatorChecked((prevChecked) => !prevChecked);
    };

    const handleTouristGuideChange = () => {
        setTouristGuideChecked((prevChecked) => !prevChecked);
    };

    const {
        getRootProps: getAerialRootProps,
        getInputProps: getAerialInputProps,
    } = useDropzone({ onDrop: onDropAerial });

    const { getRootProps: getLakeRootProps, getInputProps: getLakeInputProps } =
        useDropzone({ onDrop: onDropLake });

    const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } =
        useDropzone({ onDrop: onDropLogo });

    const { getRootProps: getBarRootProps, getInputProps: getBarInputProps } =
        useDropzone({ onDrop: onDropBar });

    const {
        getRootProps: getMeetingRoomRootProps,
        getInputProps: getMeetingRoomInputProps,
    } = useDropzone({ onDrop: onDropMeetingRoom });

    const {
        getRootProps: getRestaurantRootProps,
        getInputProps: getRestaurantInputProps,
    } = useDropzone({ onDrop: onDropRestaurant });

    const { getRootProps: getPoolRootProps, getInputProps: getPoolInputProps } =
        useDropzone({ onDrop: onDropPool });

    const {
        getRootProps: getReceptionRootProps,
        getInputProps: getReceptionInputProps,
    } = useDropzone({ onDrop: onDropReception });

    const { getRootProps: getCityRootProps, getInputProps: getCityInputProps } =
        useDropzone({ onDrop: onDropCity });

    const {
        getRootProps: getBeachRootProps,
        getInputProps: getBeachInputProps,
    } = useDropzone({ onDrop: onDropBeach });

    const {
        getRootProps: getMountainRootProps,
        getInputProps: getMountainInputProps,
    } = useDropzone({ onDrop: onDropMountain });

    const {
        getRootProps: getGardenRootProps,
        getInputProps: getGardenInputProps,
    } = useDropzone({ onDrop: onDropGarden });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const storageRef = ref(storage);
            const updatedData = {};
            const aerialImageURL = aerialImage
                ? await uploadImage(aerialImage)
                : null;
            const lakeImageURL = lakeImage
                ? await uploadImage(lakeImage)
                : null;
            const gardenImageURL = gardenImage
                ? await uploadImage(gardenImage)
                : null;
            const mountainImageURL = mountainImage
                ? await uploadImage(mountainImage)
                : null;
            const beachImageURL = beachImage
                ? await uploadImage(beachImage)
                : null;
            const cityImageURL = cityImage
                ? await uploadImage(cityImage)
                : null;
            const receptionImageURL = receptionImage
                ? await uploadImage(receptionImage)
                : null;
            const poolImageURL = poolImage
                ? await uploadImage(poolImage)
                : null;
            const restaurantImageURL = restaurantImage
                ? await uploadImage(restaurantImage)
                : null;
            const meetingRoomImageURL = meetingRoomImage
                ? await uploadImage(meetingRoomImage)
                : null;
            const barImageURL = barImage ? await uploadImage(barImage) : null;
            const logoImageURL = logoImage
                ? await uploadImage(logoImage)
                : null;
            // Crea un objeto auxiliar para incluir solo las propiedades modificadas
            if (
                hotelName !== "" &&
                hotelName !== null &&
                hotelName !== undefined
            ) {
                updatedData.name = hotelName;
            }
            if (
                hotelCancelation !== "" &&
                hotelCancelation !== null &&
                hotelCancelation !== undefined
            ) {
                updatedData.cancelation = hotelCancelation;
            }

            if (translatorChecked !== translator) {
                updatedData.translator = translatorChecked.toString();
            }

            if (touristGuideChecked !== tourist_guide) {
                updatedData.tourist_guide = touristGuideChecked.toString();
            }

            // Agrega las URL de descarga de las imágenes actualizadas al objeto de datos actualizado
            if (aerialImageURL) {
                updatedData.aerial = aerialImageURL;
            }

            if (lakeImageURL) {
                updatedData.lake = lakeImageURL;
            }

            if (gardenImageURL) {
                updatedData.garden = gardenImageURL;
            }

            if (mountainImageURL) {
                updatedData.mountain = mountainImageURL;
            }

            if (beachImageURL) {
                updatedData.beach = beachImageURL;
            }

            if (cityImageURL) {
                updatedData.city = cityImageURL;
            }

            if (receptionImageURL) {
                updatedData.reception = receptionImageURL;
            }

            if (poolImageURL) {
                updatedData.pool = poolImageURL;
            }

            if (restaurantImageURL) {
                updatedData.restaurant = restaurantImageURL;
            }

            if (meetingRoomImageURL) {
                updatedData.meeting_room = meetingRoomImageURL;
            }

            if (barImageURL) {
                updatedData.bar = barImageURL;
            }

            if (logoImageURL) {
                updatedData.logo = logoImageURL;
            }

            // Agrega las otras imágenes al objeto de datos actualizado

            const requestData = {
                niu: niu,
                ...updatedData,
            };

            console.log(requestData);
            const response = await axios.put("/hotel", requestData);
            console.log("Respuesta del servidor:", response.data);

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
                    spacing={4}>
                    <Grid
                        item
                        xs={12}
                        md={12}
                        lg={12}
                        xl={12}>
                        <TextField
                            label={`Hotel NIU: ${props.niu}`}
                            disabled
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            inputProps={{
                                maxLength: 10,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Hotel Name"
                            value={hotelName || ""}
                            onChange={(e) => setHotelName(e.target.value)}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            inputProps={{
                                maxLength: 40,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />
                        <TextField
                            label="Hotel Policies"
                            value={hotelCancelation || ""}
                            onChange={(e) =>
                                setHotelCancelation(e.target.value)
                            }
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            inputProps={{
                                maxLength: 40,
                            }}
                            sx={{ margin: "0.5rem" }}
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={translatorChecked}
                                    onChange={handleTranslatorChange}
                                    color="primary"
                                />
                            }
                            label="Translator"
                            sx={{ marginBottom: "1rem" }}
                        />

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={touristGuideChecked}
                                    onChange={handleTouristGuideChange}
                                    color="primary"
                                />
                            }
                            label="Tourist Guide"
                            sx={{ marginBottom: "1rem" }}
                        />

                        <Grid
                            container
                            spacing={2}>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                md={6}
                                lg={6}>
                                Aerial
                                <div
                                    {...getAerialRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getAerialInputProps()} />
                                    {aerialImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                aerialImage
                                            )}
                                            alt="Aerial Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the aerial image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                Lake
                                <div
                                    {...getLakeRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getLakeInputProps()} />
                                    {lakeImage ? (
                                        <img
                                            src={URL.createObjectURL(lakeImage)}
                                            alt="Lake Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Lake image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                Garden
                                <div
                                    {...getGardenRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getGardenInputProps()} />
                                    {gardenImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                gardenImage
                                            )}
                                            alt="Garden Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Garden image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                Mountain
                                <div
                                    {...getMountainRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getMountainInputProps()} />
                                    {mountainImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                mountainImage
                                            )}
                                            alt="Mountain Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Mountain image
                                            here, or click to select
                                        </p>
                                    )}
                                </div>
                                Beach
                                <div
                                    {...getBeachRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getBeachInputProps()} />
                                    {beachImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                beachImage
                                            )}
                                            alt="Beach Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Beach image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                City
                                <div
                                    {...getCityRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getCityInputProps()} />
                                    {cityImage ? (
                                        <img
                                            src={URL.createObjectURL(cityImage)}
                                            alt="City Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the City image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                Reception
                                <div
                                    {...getReceptionRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getReceptionInputProps()} />
                                    {receptionImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                receptionImage
                                            )}
                                            alt="Reception Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Reception image
                                            here, or click to select
                                        </p>
                                    )}
                                </div>
                                Pool
                                <div
                                    {...getPoolRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getPoolInputProps()} />
                                    {poolImage ? (
                                        <img
                                            src={URL.createObjectURL(poolImage)}
                                            alt="Pool Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Pool image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                                Restaurant
                                <div
                                    {...getRestaurantRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getRestaurantInputProps()} />
                                    {restaurantImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                restaurantImage
                                            )}
                                            alt="Restaurant Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Restaurant image
                                            here, or click to select
                                        </p>
                                    )}
                                </div>
                                Meeting Room
                                <div
                                    {...getMeetingRoomRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getMeetingRoomInputProps()} />
                                    {meetingRoomImage ? (
                                        <img
                                            src={URL.createObjectURL(
                                                meetingRoomImage
                                            )}
                                            alt="Meeting Room Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Meeting Room image
                                            here, or click to select
                                        </p>
                                    )}
                                </div>
                                Bar
                                <div
                                    {...getBarRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getBarInputProps()} />
                                    {barImage ? (
                                        <img
                                            src={URL.createObjectURL(barImage)}
                                            alt="Bar Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Bar image here, or
                                            click to select
                                        </p>
                                    )}
                                </div>
                                Logo
                                <div
                                    {...getLogoRootProps()}
                                    style={{
                                        minHeight: "100px",
                                        border: "2px dashed #9A98FE",
                                        padding: "1rem",
                                        borderRadius: "10px",
                                        cursor: "pointer",
                                        margin: "0.5rem",
                                        maxWidth: "15vw",
                                    }}>
                                    <input {...getLogoInputProps()} />
                                    {logoImage ? (
                                        <img
                                            src={URL.createObjectURL(logoImage)}
                                            alt="Logo Image"
                                            style={{
                                                margin: "0.5rem",
                                                maxWidth: "15vw",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    ) : (
                                        <p style={{ margin: 0 }}>
                                            Drag and drop the Logo image here,
                                            or click to select
                                        </p>
                                    )}
                                </div>
                            </Grid>
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
                    Modify Hotel
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
                    Hotel Was Successfully Updated!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default PutHotelBoard;
