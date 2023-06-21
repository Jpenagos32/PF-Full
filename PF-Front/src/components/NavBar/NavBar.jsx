import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from "react-router-dom";
import { LinkContainer, NavBarContainer, SocialIcon, SocialIconsContainer } from './NavBarStyles';

const NavBar = () => {
  return (

    
    <NavBarContainer>

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

    </NavBarContainer>
  );
};

export default NavBar;
