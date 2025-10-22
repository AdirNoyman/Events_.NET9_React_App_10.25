import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, MenuItem } from '@mui/material';
import { Nightlife } from '@mui/icons-material';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundImage:
            'linear-gradient(to right, #580ab0 0%, #6244cf 30%, #bb5ee0 89%)',
        }}
      >
        <Container maxWidth='xl'>
          {' '}
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem sx={{ display: 'flex', gap: 2 }}>
                <Nightlife fontSize='large' />
                <Typography variant='h4' fontWeight='bold'>
                  Events
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <MenuItem
                sx={{
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'semi-bold',
                }}
              >
                About
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'semi-bold',
                }}
              >
                Contact
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'semi-bold',
                }}
              >
                List of events
              </MenuItem>
            </Box>
            <Button color='warning' size='large' variant='contained'>
              Create Event
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
