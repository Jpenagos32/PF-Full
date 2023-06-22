import { styled } from '@mui/material/styles';

export const NavBarContainer1 = styled('div')({

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  padding: '0.5px',
  background: '#81D4FA',
});

export const NavBarContainer2 = styled('div')({

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const SocialIconsContainer = styled('div')({

  display: 'flex',
});

export const SocialIcon = styled('div')({

  marginRight: '10px',
});

export const LinkContainer = styled('div')({

    marginRight: '10px',
    
  });

export const Title = styled('h1')(({ theme }) => ({
    color: 'blue',
    textAlign: 'center',
    marginBottom: theme.spacing(-4),
    fontSize: '18px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '8px',
    },
  }));
