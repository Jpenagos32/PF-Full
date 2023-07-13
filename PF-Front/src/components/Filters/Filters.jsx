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
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function Filters() {
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    axios
      .get('/rooms', { params: selectedFilters })
      .then((response) => {
        const roomsData = response.data;
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
          const updatedFacilities = prevSelectedFilters.facilities?.filter(
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
          }}
        >
          Filter By
        </Typography>
        <Button
          variant="outlined"
          onClick={handleResetFilters}
          sx={{ marginLeft: "3rem" }}
        >
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
        }}
      >
        <Typography id="type_room" level="body2" fontWeight="lg" mb={1}>
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

        <Typography id="capa" level="body2" fontWeight="lg" mb={1}>
          Capacity
        </Typography>
        <RadioGroup
          name="capacity"
          value={selectedFilters.capacity || ""}
          onChange={handleFilterChange}
        >
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
          }}
        >
          Facilities
        </Typography>

        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Sauna"
              checked={selectedFilters.facilities?.includes("Sauna") || false}
              onChange={handleFilterChange}
            />
          }
          label="Sauna"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Jacuzzi"
              checked={selectedFilters.facilities?.includes("Jacuzzi") || false}
              onChange={handleFilterChange}
            />
          }
          label="Jacuzzi"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Private Pool"
              checked={
                selectedFilters.facilities?.includes("Private Pool") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Private Pool"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Free Mini Bar"
              checked={
                selectedFilters.facilities?.includes("Free Mini Bar") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Free Mini Bar"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Welcome Gift"
              checked={
                selectedFilters.facilities?.includes("Welcome Gift") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Welcome Gift"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Airport Pickup"
              checked={
                selectedFilters.facilities?.includes("Airport Pickup") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Airport Pickup"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Party Room"
              checked={
                selectedFilters.facilities?.includes("Party Room") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Party Room"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Safe Box"
              checked={
                selectedFilters.facilities?.includes("Safe Box") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Safe Box"
        />
       <FormControlLabel
          control={
            <Checkbox
              name="facilities"
              value="Smart TV"
              checked={
                selectedFilters.facilities?.includes("Smart TV") || false
              }
              onChange={handleFilterChange}
            />
          }
          label="Smart TV"
        />
      </Card>
    </section>
  );
}
