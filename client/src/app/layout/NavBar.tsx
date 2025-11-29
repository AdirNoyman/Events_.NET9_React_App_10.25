import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, MenuItem } from '@mui/material';
import { Nightlife } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/MenuItemLink';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundImage:
            'linear-gradient(to right, #000 0%, #4720d3 30%, #6813a9 58%)',
        }}
      >
        <Container maxWidth='xl'>
          {' '}
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem
                component={NavLink}
                to='/'
                sx={{ display: 'flex', gap: 2 }}
              >
                <Nightlife fontSize='large' />
                <Typography variant='h4' fontWeight='bold'>
                  Events
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <MenuItemLink to='/activities'>list of events</MenuItemLink>

              <MenuItemLink to='/create-activity'>Create event</MenuItemLink>
            </Box>
            <MenuItem>User Menu</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
