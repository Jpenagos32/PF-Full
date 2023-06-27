import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { Typography, Card } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Grid from "@mui/material/Grid";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import Person2Icon from "@mui/icons-material/Person2";
import BedIcon from "@mui/icons-material/Bed";
import { countAdult, countChild, countRooms } from "../../redux/bookingSlice";

export default function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch();
  const adult = useSelector((state) => state.booking.adult);
  const child = useSelector((state) => state.booking.child);
  const rooms = useSelector((state) => state.booking.rooms);

  const handleAdultChange = (event) => {
    const { value } = event.target;
    dispatch(countAdult(value));
  };

  const handleChildChange = (event) => {
    const { value } = event.target;
    dispatch(countChild(value));
  };

  const handleRoomsChange = (event) => {
    const { value } = event.target;
    dispatch(countRooms(value));
  };

  const countSelectedDays = () => {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);
      const diff = end.diff(start, "day");
      return diff;
    }
    return 0;
  };

  return (
    <div>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "#F3F3F7",
          height: "auto",
          padding: "15px",
          margin: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#868688",
            marginTop: "20px",
          }}
        >
          {" "}
          Your Search Details
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "20px",
            color: "#9A98FE",
            marginLeft: "10px",
          }}
        >
          ({" "}
          {startDate && endDate
            ? `${startDate.format("YYYY-MM-DD")} to ${endDate.format(
                "YYYY-MM-DD"
              )}`
            : "No dates selected"}{" "}
          )
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            marginTop: "20px",
            color: "#C2C2C2",
            marginLeft: "10px",
          }}
        >
          <CalendarMonthIcon
            sx={{
              fontSize: "24px",
              color: "#9A98FE",
              mt: "5.0",
              marginRight: "10px",
              alignItems: "center",
            }}
          />
          {countSelectedDays()}
          Nights
        </Typography>

        <Grid container spacing={2} marginTop={2} marginBottom={3}>
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#C2C2C2",
                marginLeft: "10px",
              }}
            >
              <Person2Icon
                sx={{
                  fontSize: "24px",
                  color: "#9A98FE",
                  mt: "5.0",
                  marginRight: "10px",
                  alignItems: "center",
                }}
              />

              {adult}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#C2C2C2",
                marginLeft: "10px",
              }}
            >
              <ChildCareIcon
                sx={{
                  fontSize: "24px",
                  color: "#9A98FE",
                  mt: "5.0",
                  marginRight: "10px",
                  alignItems: "center",
                }}
              />

              {child}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              sx={{
                fontSize: "15px",
                color: "#C2C2C2",
                marginLeft: "10px",
              }}
            >
              <BedIcon
                sx={{
                  fontSize: "24px",
                  color: "#9A98FE",
                  mt: "5.0",
                  marginRight: "10px",
                  alignItems: "center",
                }}
              />

              {rooms}
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card
        elevation={0}
        sx={{
          backgroundColor: "#9A98FE",
          alignContent: "center",
          padding: "15px",
          margin: "20px",
          marginBottom: "-22px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#FAFAFF",
            textAlign: "center",
          }}
        >
          {" "}
          Choose your Date
        </Typography>
      </Card>

      <Card
        elevation={0}
        sx={{
          backgroundColor: "#F3F3F7",
          height: "auto",
          padding: "15px",
          margin: "20px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{ width: "232px", marginTop: "20px" }}
          >
            <DatePicker
              label="Check In"
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </DemoContainer>
          <DemoContainer components={["DatePicker"]} sx={{ width: "232px" }}>
            <DatePicker
              label="Check Out"
              value={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </DemoContainer>

          <Grid container spacing={2} marginTop={2} marginBottom={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="valueAdult"
                label="Adult"
                type="number"
                value={adult}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleAdultChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="ValueChild"
                label="Child"
                type="number"
                value={child}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChildChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="valueRooms"
                label="Rooms"
                type="number"
                value={rooms}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleRoomsChange}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Card>
    </div>
  );
}
