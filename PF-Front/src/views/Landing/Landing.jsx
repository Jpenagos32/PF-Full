import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Title } from './LandingStyles';

const Landing = () => {
  const imageURL =
    'https://i.ibb.co/tcYb7xz/landscape-sea-water-sky-Tourism-hotel-792767-wallhere-com.jpg';

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container>
        <Content>
          <Title>SUNSET SANDS HOTEL</Title>
          <Link to="/home">
            <Button variant="contained">Home</Button>
          </Link>
        </Content>
      </Container>
    </Box>
  );
};

export default Landing;