import React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import { Typography, Card } from "@mui/material";


export default function Filters() {

    return (
        <>
            <Typography variant="h1" sx={
                {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#868688',
                    marginTop: '20px',
                    marginLeft: '30px'
                }
            }> Filter By

            </Typography>

            <Card elevation={0} sx={
                {
                    backgroundColor: "#F3F3F7",
                    height: 'auto',
                    padding: '15px',
                    margin: '20px'
                }
            }>

                <Typography id="type_room" level="body2" fontWeight="lg" mb={1}>
                    Acomodation Type
                </Typography>


                <List size="sm">
                    <ListItem>
                        <Checkbox label="Standar Room" defaultChecked />
                    </ListItem>
                    <ListItem>
                        <Checkbox label="Familiar Room" />
                    </ListItem>
                    <ListItem>
                        <Checkbox label="Suite" />
                    </ListItem>
                </List>

                <Typography id="facilities" level="body2" fontWeight="lg" mb={1}>
                    Facilities
                </Typography>

                <List size="sm">
                    <ListItem>
                        <Checkbox label="HD-TV" defaultChecked />
                    </ListItem>
                    <ListItem>
                        <Checkbox label="Room-service" />
                    </ListItem>
                    <ListItem>
                        <Checkbox label="Parking" />
                    </ListItem>
                </List>

            </Card>
        </>

    )
}

