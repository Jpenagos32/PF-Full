import * as React from 'react';
import {  Tabs, Tab, createTheme, Card } from '@mui/material';
import SetAvailable from './Available/SetAvailable';
import Reserves from './Reserves/Reserves';
import UpComingsBookings from './UpComingsBookings/UpComingsBookings';

export default function AdminBookings() {

  const [selectedTab, setSelectedTab] = React.useState(0);
  

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#9A98FE",
      },
      text: {
        primary: "#868688",
      },
    },
  });

  return (
    <Card elevation={0}sx={{ backgroundColor: "#F3F3F7" }}>
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{
          borderRadius: '8px', 
          marginLeft: '15px'
        }}>
          <Tab
            label="Upcomings Check_Ins"
            sx={{
              backgroundColor: "#F3F3F7",
              color: "#868688",
              "&.Mui-selected": {
                color: "#9A98FE",
                backgroundColor: "#EFEEFF",
              },
              borderRadius: '8px'
            }}
          />
          <Tab
          label="Upcomings Check-Outs"
          sx={{
            backgroundColor: "#F3F3F7",
            color: "#868688",
            "&.Mui-selected": {
              color: "#9A98FE",
              backgroundColor: "#EFEEFF",
            },
            borderRadius: '8px'
          }}
        />
          <Tab
          label="Reserves List"
          sx={{
            backgroundColor: "#F3F3F7",
            color: "#868688",
            "&.Mui-selected": {
              color: "#9A98FE",
              backgroundColor: "#EFEEFF",
            },
            borderRadius: '8px'
          }}
        />

      </Tabs>
    
      {selectedTab === 0 && <UpComingsBookings/>}
      {selectedTab === 1 && <SetAvailable />}
      {selectedTab === 2 && <Reserves/>}
      
   
    </div>
   </Card>
  );
}

