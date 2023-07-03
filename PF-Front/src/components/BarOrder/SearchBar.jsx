import { Grid, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { fetchData } from "../../redux/slices/roomSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState({});
    const searchRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        const URL = "https://pf-back-production-6a7d.up.railway.app";
        console.log(searchValue);
        axios
            .get(`${URL}/rooms`, { params: searchValue })
            .then((response) => {
                const roomsData = response.data;
                console.log(roomsData);
                dispatch(fetchData(roomsData));
            })
            .catch((error) => {
                console.error(error);
            });
    }, [searchValue, dispatch]);

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            const value = searchRef.current.value;
            const searchObject = { room_name: value };
            setSearchValue(searchObject);
        }
    };

    return (
        <div>
            <Grid
                container
                spacing={2}
                style={{
                    marginBottom: "10px",
                    borderBottom: "1px solid",
                    color: "#9A98FE",
                }}>
                <Grid
                    item
                    xs={12}
                    md={9}></Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{ marginBottom: "10px" }}>
                    <TextField
                        id="standard-basic-fullWidth"
                        label="Search by Room Name!"
                        variant="standard"
                        inputRef={searchRef}
                        onKeyUp={handleKeyUp}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
