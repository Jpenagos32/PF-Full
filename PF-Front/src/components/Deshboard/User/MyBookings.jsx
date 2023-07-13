import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { format, parseISO } from "date-fns";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItem,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const MyBookings = ({ userData }) => {
  const [BookingsData, setBookingsData] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const response = await axios.get("/hosts");
        const hosts = response.data.hosts;

        // Filtrar hosts por correo electrónico y nombre
        const filteredHosts = hosts.filter((host) => {
          const emailMatch = host.contact.email === userData.user_email;
          const nameMatch = host.first_name
            .toLowerCase()
            .includes(userData.user_first_name.toLowerCase());
          return emailMatch && nameMatch;
        });

        const reservations = filteredHosts[0].reservations;

        setBookingsData(reservations);
      } catch (error) {
        console.error("Error al buscar el host:", error);
      }
    };

    handleSearch();
  }, []);

  const handleupdateratings = async () => {
    if (!selectedRoom || ratingValue === 0 || !comment) {
      alert("Please, Complete all the fields to send your review");
      return;
    }

    const data = {
      room_number: selectedRoom,
      review_description: [comment],
      review_estrellas: [ratingValue]
    };

    try {
      const response = await axios.put("/rooms", data);
      setRatingValue(0);
      setSelectedRoom("");
      setComment("");
      alert("Review sent successfully");
    } catch (error) {
      console.error("Error al buscar el host:", error);
    }
  };

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: "#EFEEFF",
              borderBottom: "2px solid #9A98FE",
            }}
          >
            <TableRow>
              <TableCell sx={{ color: "#9A98FE" }}>Room Name</TableCell>
              <TableCell align="center" sx={{ color: "#9A98FE" }}>
                Room Price
              </TableCell>
              <TableCell align="center" sx={{ color: "#9A98FE" }}>
                Check-in Date
              </TableCell>
              <TableCell align="center" sx={{ color: "#9A98FE" }}>
                Check-out Date
              </TableCell>
              <TableCell align="center" sx={{ color: "#9A98FE" }}>
                Room Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {BookingsData.map((reservation, index) => (
              <TableRow key={index}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FAFAFF" : "#EFEEFF",
                  }}
                >
                  {reservation.room_name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FAFAFF" : "#EFEEFF",
                  }}
                >
                  ${reservation.room_price}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FAFAFF" : "#EFEEFF",
                  }}
                >
                  {format(parseISO(reservation.room_check_in), "dd-MM-yyyy")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FAFAFF" : "#EFEEFF",
                  }}
                >
                  {format(parseISO(reservation.room_check_out), "dd-MM-yyyy")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#FAFAFF" : "#EFEEFF",
                  }}
                >
                  {reservation.room_number}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#EFEEFF",
          marginTop: "25px",
          borderRadius: "5px",
          width: "100.2%",
        }}
      >
        <Grid container spacing={1}>
          <Grid xs>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#9A98FE",
                textAlign: "start",
                marginBottom: "10px",
                marginTop: "15px",
                marginLeft: "20px",
              }}
            >
              Review Your Stay
            </Typography>
            <FormControl
              fullWidth
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#9A98FE",
                textAlign: "start",
                marginTop: "-10px",
                marginLeft: "20px",
                width: "200px",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Select Your Room
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Your Room"
                value={selectedRoom}
                required
                onChange={handleRoomChange}
              >
                {BookingsData.map((reservation, index) => (
                  <MenuItem key={index} value={reservation.room_number}>
                    {reservation.room_number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs>
            <Typography
              component="legend"
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#9A98FE",
                textAlign: "start",
                marginBottom: "15px",
                marginTop: "20px",
                marginLeft: "-120px",
              }}
            >
              Stars For Your Stay
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginBottom: "8px",
                marginRight: "150px",
                marginLeft: "-118px",
                marginTop: "-10px",
              }}
            >
              Please rate your stay on a scale of 1 to 5, with 1 being the
              lowest and 5 being the highest.
            </Typography>
            <Rating
              name="simple-controlled"
              required
              value={ratingValue}
              onChange={(event, newValue) => {
                setRatingValue(newValue);
              }}
              sx={{ marginTop: "-50px", marginLeft: "-50px" }}
            />
          </Grid>
          <Grid xs>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#9A98FE",
                textAlign: "start",
                marginBottom: "15px",
                marginTop: "20px",
                marginLeft: "-170px",
              }}
            >
              Write a comment
            </Typography>
            <TextField
              id="outlined-basic"
              label="Comment"
              variant="outlined"
              fullWidth
              required
              value={comment}
              onChange={handleCommentChange}
              sx={{
                textAlign: "start",
                marginBottom: "15px",
                marginTop: "-10px",
                marginLeft: "-170px",
                width: "300px",
              }}
            />
            <Button
              variant="contained"
              onClick={handleupdateratings}
              sx={{
                width: "170px",
                borderRadius: "30px",
                height: "45px",
                color: "#868688",
                marginTop: "-7px",
                marginLeft: "25px",
                backgroundColor: "#9A98FE",
                "&:hover": {
                  backgroundColor: "#c2c1fe",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MyBookings;
