import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { Card, Typography, Button, Grid } from '@mui/material'
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StyledDivider } from './SubTotalStyled';
import { useDispatch, useSelector } from 'react-redux';
import { DateContext } from '../../Context/DateContex';
import { countAdult, countChild, countRooms } from "../../redux/slices/bookingSlice";



export default function SubTotal() {
    const dispatch = useDispatch()
    const { startDate, endDate, setDateRange } = useContext(DateContext)
    const { child, adult, rooms, nights } = useSelector((state) => state.booking)


    const handleStartDateChange = (date) => {
        setDateRange(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setDateRange(startDate, date);
    };
    const handleAdultChange = (event) => {
        const { value } = event.target
        dispatch(countAdult(value))
    };

    const handleChildChange = (event) => {
        const { value } = event.target
        dispatch(countChild(value))
    };

    const handleRoomsChange = (event) => {
        const { value } = event.target
        dispatch(countRooms(value))
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

                <LocalizationProvider dateAdapter={AdapterDayjs}>

                    <DemoContainer components={['DatePicker']} sx={{ width: '232px', marginTop: '20px' }}>

                        <DatePicker
                            label='Check In'
                            value={startDate}
                            onChange={handleStartDateChange}

                        />

                    </DemoContainer>
                    <DemoContainer components={['DatePicker']} sx={{ width: '232px' }}>
                        <DatePicker
                            label="Check Out"
                            value={endDate}
                            onChange={handleEndDateChange}

                        />

                    </DemoContainer>
                    <Grid container spacing={2} marginTop={2} marginBottom={3}>

                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="subAdult"
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
                        <Grid item xs={12} sm={5}>
                            <TextField
                                id="subChild"
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
                        <Grid item xs={12} sm={17}>
                            <TextField
                                id="subRooms"
                                label="How many rooms"
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

                <StyledDivider />

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>

                        <Typography variant="h1" sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            color: '#868688',
                            marginTop: '30px',
                        }}>
                            SubTotal
                        </Typography>

                        <Typography variant="h1" sx={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            color: '#0400CB',
                            marginTop: '10px',
                        }}>
                            ({nights}Nights-{adult}Adult-{child}Child)
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <Typography variant="h1" sx={{
                            fontSize: '35px',
                            fontWeight: 'bold',
                            color: '#0400CB',
                            marginTop: '20px',
                        }}>
                            $130
                        </Typography>

                        <Typography variant="h1" sx={{
                            fontSize: '15px',
                            fontWeight: 'bold',
                            color: '#9A98FE',
                            marginLeft: '50px'
                        }}>
                            USD
                        </Typography>

                    </Grid>
                    <Grid container justifyContent="center" style={{ marginTop: "20px" }}>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: '30px',
                                marginBottom: "10px",
                                borderRadius: "20px",
                                fontSize: "17px",
                                width: '150px',
                            }}
                            sx={{
                                backgroundColor: "#9A98FE",
                                "&:hover": {
                                    backgroundColor: "#c2c1fe",
                                },
                            }}
                        >
                            PAY
                        </Button>
                        <Typography variant="h1" sx={{
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: '#9A98FE',
                            margin: '20px'
                        }}>
                            Please read and understand our cancellation policy prior to booking.
                        </Typography>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

