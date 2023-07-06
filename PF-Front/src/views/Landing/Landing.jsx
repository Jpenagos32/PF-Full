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

const Landing = () => {

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
  return (
    <Box
    sx={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgb(200, 170, 600)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Gallery
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundSize: 'cover',
        overflowX: 'hidden',
      }}
    />

    <Grid container  justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={7} >
        <Card elevation={0} sx={{  backdropFilter: 'blur(8px)', backgroundColor: 'rgba(154, 152, 254, 0.78)', p: 2.5 }}>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']} >
                <DatePicker
                  label='Check In'
                  value={startDate}
                  minDate={today}
                  onChange={handleStartDateChange}
                  sx={{
                    '& .MuiInputBase-root': {
                      backgroundColor: '#EFEEFF',
                    
                      transition: 'border-color 0.3s ease'
                    },
                    '& .MuiIconButton-root': {
                      color: '#9A98FE', // Establece el color del icono
                    },
                    '& .MuiInputBase-root:hover': {
                      borderColor: '#EFEEFF',
                    },
                    '& .MuiInputBase-root:hover .MuiIconButton-root': {
                      color: '#C2C2C2 ', // Establece el color del icono al hacer hover
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
                      backgroundColor: '#EFEEFF',
                    
                      transition: 'border-color 0.3s ease'
                    },
                    '& .MuiIconButton-root': {
                      color: '#9A98FE', // Establece el color del icono
                    },
                    '& .MuiInputBase-root:hover': {
                      borderColor: '#EFEEFF',
                    },
                    '& .MuiInputBase-root:hover .MuiIconButton-root': {
                      color: '#C2C2C2 ', // Establece el color del icono al hacer hover
                    },
                  }}
                />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

                {startDate && endDate ?
            <Grid item xs={12} sm={3} sx={{  display: 'flex', justifyContent: 'center' }}>
              <Link to="/home">
                <Button
                  variant="contained"
                  sx={{
                    width: '150px',
                    borderRadius: '30px',
                    color: '#EFEEFF',
                    backgroundColor: '#9A98FE',
                    '&:hover': {
                      color: '#9A98FE',
                      backgroundColor: '#EFEEFF',

                    },
                  }}
                >
                 
                  Book Now
                </Button>
              </Link>
            </Grid>
                :null }
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </Box>

  );
};

export default Landing;

    // <Box
    //   sx={{
    //     width: "100%",
    //     height: "100vh",
    //     backgroundColor: "rgb(200, 170, 600)",
    //     backgroundPosition: "center",
    //     backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat",
    //     display: "flex",
    //     flexDirection: "column",
    //     padding: 0,
    //   }}
    // >
    //   <Content
    //     sx={{
    //       padding: 0,
    //     }}
    //   >
    //     <Title>SUNSET SANDS HOTEL</Title>
    //     <Link to="/home">
    //       <Button
    //         variant="contained"
    //         sx={{
    //           width: "150px",
    //           borderRadius: "30px",
    //           color: "#white",
    //           backgroundColor: "#9A98FE",
    //           "&:hover": {
    //             backgroundColor: "#c2c1fe",
    //           },
    //         }}
    //       >
    //         Book Now!
    //       </Button>
    //     </Link>
    //   </Content>
    //   <Gallery
    //     sx={{
    //       backgroundSize: "cover",
    //       overflowX: "hidden",
    //     }}
    //   />
    // </Box>