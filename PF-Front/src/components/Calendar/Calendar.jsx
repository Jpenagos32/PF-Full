import React, { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from '@mui/material/TextField';

export default function Calendar() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
       <div>Número de días seleccionados: {countSelectedDays()}</div>

       <div><h1>Choose Your Date</h1></div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label='Check In'
          value={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          label="Check Out"
          value={endDate}
          onChange={(date) => setEndDate(date)}
        />
      </DemoContainer>
      <h5>Adult</h5>
      <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      <h5>Child</h5>
      <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      
      <h5>Room</h5>
      <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      
    </LocalizationProvider>
    
  
   
    </div>
  );
}
