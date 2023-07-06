import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import { useDropzone } from "react-dropzone";

const AdminHotel = () => {
    const [hotelName, setHotelName] = useState("");
    const [hotelDescription, setHotelDescription] = useState("");
    const [hotelLogo, setHotelLogo] = useState(null);
    const [hotelFacade, setHotelFacade] = useState(null);
    const [hotelLobby, setHotelLobby] = useState(null);
    const [companyPolicies, setCompanyPolicies] = useState("");

    const onDropLogo = (acceptedFiles) => {
        setHotelLogo(acceptedFiles[0]);
    };

    const onDropFacade = (acceptedFiles) => {
        setHotelFacade(acceptedFiles[0]);
    };

    const onDropLobby = (acceptedFiles) => {
        setHotelLobby(acceptedFiles[0]);
    };

    const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } =
        useDropzone({ onDrop: onDropLogo });

    const {
        getRootProps: getFacadeRootProps,
        getInputProps: getFacadeInputProps,
    } = useDropzone({ onDrop: onDropFacade });

    const {
        getRootProps: getLobbyRootProps,
        getInputProps: getLobbyInputProps,
    } = useDropzone({ onDrop: onDropLobby });

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
                        label="Hotel Name"
                        value={hotelName}
                        onChange={(e) => setHotelName(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        inputProps={{
                            maxLength: 40,
                        }}
                        sx={{
                            margin: "0.5rem",
                        }}
                    />
                    <TextField
                        label="Hotel Description"
                        value={hotelDescription}
                        onChange={(e) => setHotelDescription(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        inputProps={{
                            maxLength: 100,
                        }}
                        sx={{
                            margin: "0.5rem",
                        }}
                    />
                    <TextField
                        label="Company Policies"
                        value={companyPolicies}
                        onChange={(e) => setCompanyPolicies(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        inputProps={{
                            maxLength: 100,
                        }}
                        sx={{
                            margin: "0.5rem",
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={6}>
                    <div
                        {...getLogoRootProps()}
                        style={{
                            margin: "0.5rem",
                            minHeight: "100px",
                            border: "2px dashed #9A98FE",
                            padding: "1rem",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}>
                        <input {...getLogoInputProps()} />
                        {hotelLogo ? (
                            <img
                                src={URL.createObjectURL(hotelLogo)}
                                alt="Hotel Logo"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the hotel logo image here, or
                                click to select
                            </p>
                        )}
                    </div>
                    <div
                        {...getFacadeRootProps()}
                        style={{
                            margin: "0.5rem",
                            minHeight: "100px",
                            border: "2px dashed #9A98FE",
                            padding: "1rem",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}>
                        <input {...getFacadeInputProps()} />
                        {hotelFacade ? (
                            <img
                                src={URL.createObjectURL(hotelFacade)}
                                alt="Hotel Facade"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the hotel facade image here, or
                                click to select
                            </p>
                        )}
                    </div>
                    <div
                        {...getLobbyRootProps()}
                        style={{
                            margin: "0.5rem",
                            minHeight: "100px",
                            border: "2px dashed #9A98FE",
                            padding: "1rem",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}>
                        <input {...getLobbyInputProps()} />
                        {hotelLobby ? (
                            <img
                                src={URL.createObjectURL(hotelLobby)}
                                alt="Hotel Lobby"
                                style={{
                                    margin: "0.5rem",
                                    maxWidth: "100%",
                                    maxHeight: "100px",
                                }}
                            />
                        ) : (
                            <p style={{ margin: 0 }}>
                                Drag 'n' drop the hotel lobby image here, or
                                click to select
                            </p>
                        )}
                    </div>
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

export default AdminHotel;
