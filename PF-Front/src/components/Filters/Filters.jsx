import React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';


export default function Filters() {

    return (
        <Box sx={{ width: 343 }}>
            <Typography id="stars" level="body2" fontWeight="lg" mb={2}>
                Stars rating
            </Typography>
            <Box role="group" aria-labelledby="stars">
                <List
                    orientation="vertical"
                    wrap
                    sx={{
                        '--List-gap': '8px',
                        '--ListItem-radius': '20px',
                    }}
                >
                    {[
                        '5 stars',
                        '4 stars',
                        '3 stars',
                        '2 stars',
                        '1 stars',

                    ].map((item, index) => (
                        <ListItem key={item}>
                            <Checkbox
                                disabled={index === 0}
                                overlay
                                disableIcon
                                variant="soft"
                                label={item}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>


            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1}>
                Acomodation Type
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">
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
            </Box>

            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1}>
                Facilities
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">
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
            </Box>
        </Box>

    )
}

