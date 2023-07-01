import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Typography,
    Card,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Slider,
    Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/slices/roomSlice";

export default function Filters() {
    const dispatch = useDispatch();

    const [selectedFilters, setSelectedFilters] = useState({});

    useEffect(() => {
        const URL = "https://pf-back-production-6a7d.up.railway.app";
        console.log(selectedFilters);
        axios
            .get(`${URL}/rooms`, { params: selectedFilters })
            .then((response) => {
                const roomsData = response.data;
                console.log(roomsData);
                dispatch(fetchData(roomsData));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [selectedFilters, dispatch]);

    const handleFilterChange = (event) => {
        const { name, value, checked } = event.target;

        setSelectedFilters((prevSelectedFilters) => {
            if (name === "facilities") {
                if (checked) {
                    const updatedFacilities = [
                        ...(prevSelectedFilters.facilities || ["Wifi"]),
                        value,
                    ];

                    return {
                        ...prevSelectedFilters,
                        facilities: updatedFacilities.length
                            ? updatedFacilities
                            : undefined,
                    };
                } else {
                    const updatedFacilities =
                        prevSelectedFilters.facilities?.filter(
                            (facility) => facility !== value
                        );

                    return {
                        ...prevSelectedFilters,
                        facilities: updatedFacilities.length
                            ? updatedFacilities
                            : undefined,
                    };
                }
            } else {
                return {
                    ...prevSelectedFilters,
                    [name]: parseInt(value),
                };
            }
        });
    };

    const handleResetFilters = () => {
        setSelectedFilters({});
    };

    const valuetext = (value) => `${value}`;

    return (
        <section>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#868688",
                        marginTop: "20px",
                        marginLeft: "30px",
                    }}>
                    Filter By
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleResetFilters}
                    sx={{ marginLeft: "3rem" }}>
                    Reset Filters
                </Button>
            </div>

            <Card
                elevation={0}
                sx={{
                    backgroundColor: "#F3F3F7",
                    height: "auto",
                    padding: "15px",
                    margin: "20px",
                    overflowY: "scroll",
                }}>
                <Typography
                    id="type_room"
                    level="body2"
                    fontWeight="lg"
                    mb={1}>
                    Max Price
                </Typography>
                <Slider
                    aria-label="Temperature"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={0}
                    max={500}
                    name="price"
                    onChange={handleFilterChange}
                />

                <Typography
                    id="type_room"
                    level="body2"
                    fontWeight="lg"
                    mb={1}>
                    Capacity
                </Typography>
                <RadioGroup
                    name="capacity"
                    value={selectedFilters.capacity || ""}
                    onChange={handleFilterChange}>
                    <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label="1 Guest (Single Room)"
                    />
                    <FormControlLabel
                        value={2}
                        control={<Radio />}
                        label="2 Guests (Double Room)"
                    />
                    <FormControlLabel
                        value={3}
                        control={<Radio />}
                        label="3 Guests (Triple Room)"
                    />
                    <FormControlLabel
                        value={4}
                        control={<Radio />}
                        label="4 Guests (Family Room)"
                    />
                </RadioGroup>

                <Typography
                    id="facilities"
                    variant="h2"
                    sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#868688",
                        marginTop: "20px",
                    }}>
                    Facilities
                </Typography>

                <FormControlLabel
                    control={
                        <Checkbox
                            name="facilities"
                            value="hdTv"
                            checked={
                                selectedFilters.facilities?.includes("hdTv") ||
                                false
                            }
                            onChange={handleFilterChange}
                        />
                    }
                    label="HD-TV"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="facilities"
                            value="roomService"
                            checked={
                                selectedFilters.facilities?.includes(
                                    "roomService"
                                ) || false
                            }
                            onChange={handleFilterChange}
                        />
                    }
                    label="Room-service"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="facilities"
                            value="parking"
                            checked={
                                selectedFilters.facilities?.includes(
                                    "parking"
                                ) || false
                            }
                            onChange={handleFilterChange}
                        />
                    }
                    label="Parking"
                />
            </Card>
        </section>
    );
}
