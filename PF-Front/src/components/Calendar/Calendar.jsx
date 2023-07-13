import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography, Card, TextField, Grid } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import Person2Icon from '@mui/icons-material/Person2';
import BedIcon from '@mui/icons-material/Bed';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { countAdult, countChild, countNights, countRooms } from "../../redux/slices/bookingSlice";
import { DateContext } from "../../Context/DateContex";


export default function Calendar() {

  const dispatch = useDispatch()
  const { adult, child, numberooms } = useSelector((state) => state.booking);
  const { startDate, endDate, setDateRange } = useContext(DateContext);
  const today = dayjs();
  const secondDateMin = startDate ? startDate.add(1, 'day') : null;
  const isSecondPickerDisabled = !startDate;

  const handleStartDateChange = (date) => {
    setDateRange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setDateRange(startDate, date);
  };

  const handleAdultChange = (event) => {
    const { value } = event.target
    if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
      dispatch(countAdult(value))
    }
  };

  const handleChildChange = (event) => {
    const { value } = event.target
    if (value === '' || (Number(value) >= 0 && !value.includes('-'))) {
      dispatch(countChild(value))
    }
  };

  // const handleRoomsChange = (event) => {
  //   const { value } = event.target
  //   if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
  //     dispatch(countRooms(value))
  //   }
  // };

  useEffect(() => {

    if (startDate && endDate) {
      const total = countSelectedDays();
      dispatch(countNights(total));
    }
  }, [startDate, endDate, dispatch]);


  const countSelectedDays = () => {
    if (startDate && endDate) {
      const start = dayjs(startDate);
      const end = dayjs(endDate);
      const diff = end.diff(start, 'day');
      return diff;
    }
    return 0;
  };
  return (
    <div>
      <Card elevation={0} sx={
        {
          backgroundColor: "#9A98FE",
          alignContent: 'center',
          padding: '15px',
          margin: '20px',
          marginBottom: '-22px'
        }
      }>
        <Typography variant="h1" sx={
          {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#FAFAFF',
            textAlign: 'center',
          }
        }> Choose your Date

        </Typography>
      </Card>

      <Card elevation={0} sx={
        {
          backgroundColor: "#F3F3F7",
          height: 'auto',
          padding: '15px',
          margin: '20px'
        }
      }>
        <Grid container  justifyContent="start" marginTop={0} marginBottom={2}>
          <Typography sx={
            {
              fontSize: '14px',
              color: '#9A98FE',
              marginLeft: '12px',
              display: 'flex',
            }
          }>
            <CalendarMonthIcon sx={
              {
                fontSize: '20px',
                color: '#9A98FE',
                marginRight: '2px',
              
              }
            } />

            ( {startDate && endDate ? (
              `${startDate.format('YYYY-MM-DD')} to ${endDate.format('YYYY-MM-DD')}`
            ) : (
              "No dates selected"
            )} )
          </Typography>
        </Grid>

        <Grid container spacing={0} justifyContent="center" >
          <Grid item xs={3} sm={3}>
            <Typography sx={
              {
                fontSize: '15px',
                color: '#C2C2C2',
                marginLeft: '15px',
                display: 'flex',
              }
            }>
              <Person2Icon sx={
                {
                  fontSize: '20px',
                  color: '#9A98FE',
                  marginRight: '2px',
                }
              } />
              {adult}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography sx={
              {
                fontSize: '15px',
                color: '#C2C2C2',
                marginLeft: '8px',
                display: 'flex',
              }
            }>
              <ChildCareIcon sx={
                {
                  fontSize: '20px',
                  color: '#9A98FE',
                  marginRight: '3px',
                }
              } />
              {child}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography sx={
              {
                fontSize: '15px',
                color: '#C2C2C2',
                marginLeft: '4px',
                display: 'flex',
              }
            }>
              <BedIcon sx={
                {
                  fontSize: '24px',
                  color: '#9A98FE',
                  marginRight: '2px',
                }
              } />
              {numberooms}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Typography sx={
              {
                fontSize: '15px',
                color: '#C2C2C2',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center'
              }
            }>
              <NightlightRoundIcon sx={
                {
                  fontSize: '20px',
                  color: '#9A98FE',
                  marginRight: '2px',
                }
              } />
              {countSelectedDays()}
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" spacing={0} marginBottom={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>

            <DemoContainer components={['DatePicker']} sx={{ width: '90%', marginTop: '20px' }}>

              <DatePicker
                label='Check In'
                value={startDate}
                minDate={today}
                onChange={handleStartDateChange}
              />

            </DemoContainer>
            <DemoContainer components={['DatePicker']} sx={{ width: '90%' }}>
              <DatePicker
                label="Check Out"
                value={endDate}
                minDate={secondDateMin}
                onChange={handleEndDateChange}
                disabled={isSecondPickerDisabled}
              />
            </DemoContainer>
            <Grid container justifyContent="center" spacing={1} marginTop={1} marginBottom={3}>
              <Grid item xs={6} sm={5}>
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
              <Grid item xs={6} sm={5}>
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
              {/* <Grid item xs={3} sm={3}>
                <TextField
                  id="value-Rooms"
                  label="Rooms "
                  type="number"
                  value={numberooms}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                  readOnly={true}
                />
              </Grid> */}
            </Grid>
          </LocalizationProvider>
        </Grid>
      </Card>
    </div>
  );
}

