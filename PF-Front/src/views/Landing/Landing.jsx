import React, { useContext } from "react";
import { Box, Button, Grid, Card } from "@mui/material";
import { Link } from "react-router-dom";
import Gallery from "../../components/Gallery/Gallery";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateContext } from "../../Context/DateContex";
import dayjs from "dayjs";

export default function Landing() {
    const { startDate, endDate, setDateRange } = useContext(DateContext);
    const today = dayjs();
    const secondDateMin = startDate ? startDate.add(1, "day") : null;
    const isSecondPickerDisabled = !startDate;

    const handleStartDateChange = (date) => {
        setDateRange(date, endDate);
    };

    const handleEndDateChange = (date) => {
        setDateRange(startDate, date);
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "rgb(200, 170, 600)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Gallery
                sx={{
                    bottom: 0,
                    left: 0,
                    width: "130vw",
                    zIndex: -1,
                    backgroundSize: "contain",
                    overflowX: "hidden",
                    margin: 0,
                    borderColor: "black",
                }}
            />

            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={11} sm={7} lg={8}>
                    {/* <Typography
            variant="h1"
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#868688",
              marginTop: "17px",
              marginBottom: "10px",
              marginLeft: '30px'
            }}
          >
            {name}
          </Typography> */}
                    <Card
                        elevation={0}
                        sx={{
                            backdropFilter: 'blur(8px)',
                            backgroundColor: 'rgba(154, 152, 254, 0.78)',
                            p: 3
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                mt: -3
                            }}
                        >
                            <Grid item xs={10} sm={8}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label='Check In'
                                            value={startDate}
                                            minDate={today}
                                            onChange={handleStartDateChange}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    backgroundColor: 'rgba(239, 238, 255, 0.6)',
                                                    borderRadius: '10px',
                                                    color: '#868688',

                                                    transition: 'border-color 0.3s ease'
                                                },
                                                '& .MuiIconButton-root': {
                                                    color: '#9A98FE',
                                                },
                                                '& .MuiInputBase-root:hover': {
                                                    borderColor: '#EFEEFF',
                                                },
                                                '& .MuiInputBase-root:hover .MuiIconButton-root': {
                                                    color: '#EFEEFF',
                                                },
                                            }}
                                        />
                                        <DatePicker
                                            label="Check Out"
                                            value={endDate}
                                            minDate={secondDateMin}
                                            onChange={handleEndDateChange}
                                            disabled={isSecondPickerDisabled}
                                            sx={{
                                                '& .MuiInputBase-root': {
                                                    backgroundColor: 'rgba(239, 238, 255, 0.6)',
                                                    borderRadius: '10px',
                                                    color: '#868688',

                                                    transition: 'border-color 0.3s ease'
                                                },
                                                '& .MuiIconButton-root': {
                                                    color: '#9A98FE',
                                                },
                                                '& .MuiInputBase-root:hover': {
                                                    borderColor: '#EFEEFF',
                                                },
                                                '& .MuiInputBase-root:hover .MuiIconButton-root': {
                                                    color: '#EFEEFF',
                                                },
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link to="/home">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: "150px",
                                            borderRadius: "30px",
                                            color: "#EFEEFF",
                                            backgroundColor: "#9A98FE",
                                            "&:hover": {
                                                color: "#9A98FE",
                                                backgroundColor: "#EFEEFF",
                                            },
                                        }}
                                    >
                                        Book Now
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};