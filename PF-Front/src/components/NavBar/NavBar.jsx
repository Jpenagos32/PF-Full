import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";
import { LinkContainer, NavBarContainer1, NavBarContainer2, SocialIcon, SocialIconsContainer, Title } from './NavBarStyles';
import { Button  } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';

const NavBar = () => {
  const logo = "https://i.ibb.co/6yFp8Z7/logo-removebg-preview.png"
  return (

    <div>
    <NavBarContainer1>
      <LinkContainer>
      <NavLink to="/home" >
        Home
      </NavLink>
      </LinkContainer>

      <LinkContainer>
      <NavLink >
        My Account
      </NavLink>
      </LinkContainer> 

      <SocialIconsContainer>
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>
      </SocialIconsContainer>
    </NavBarContainer1>
    <NavBarContainer2>
    <NavBarContainer2>
    <img src={logo} alt="logo" height={100} style={{ padding: '5px'}} />
    <Button style={{ marginLeft : "380%" }} >Login</Button>
    <Button>Register</Button>
    </NavBarContainer2>
    <Title style={{ marginLeft : "60%" }} >Call Us Today (601) 787-5555</Title>
    </NavBarContainer2>
    </div>
  );
};

export default NavBar;
