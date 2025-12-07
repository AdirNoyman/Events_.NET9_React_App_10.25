import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, LinearProgress, MenuItem } from '@mui/material';
import { Nightlife } from '@mui/icons-material';
import { NavLink } from 'react-router';
import MenuItemLink from '../shared/MenuItemLink';
import { useStore } from '../../lib/hooks/useStore';
import { Observer } from 'mobx-react-lite';

export default function NavBar() {
  const { uiStore } = useStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundImage:
            'linear-gradient(to right, #000 0%, #4720d3 30%, #6813a9 58%)',
          position: 'relative',
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
              <MenuItemLink to='/counter'>Counter</MenuItemLink>
            </Box>
            <MenuItem>User Menu</MenuItem>
          </Toolbar>
        </Container>
        {/* If in loading state (fetching events) show progress bar */}
        <Observer>
          {() =>
            uiStore.isLoading ? (
              <LinearProgress
                color='secondary'
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                }}
              />
            ) : null
          }
        </Observer>
      </AppBar>
    </Box>
  );
}
