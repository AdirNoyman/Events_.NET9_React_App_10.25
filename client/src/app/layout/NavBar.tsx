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
            'linear-gradient(to right, #000 0%, #4720d3 30%, #6813a9 58%)',
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
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    color: '#ee8045',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    transform: 'translateY(0)',
                    color: '#ee8045',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderBottom: '2px solid #ee8045',
                    color: '#ee8045',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                  },
                }}
              >
                About
              </MenuItem>
              <MenuItem
                sx={{
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'semi-bold',
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    color: '#e8a079',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    transform: 'translateY(0)',
                    color: '#ee8045',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderBottom: '2px solid #ee8045',
                    color: '#ee8045',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                  },
                }}
              >
                Contact
              </MenuItem>

              <MenuItem
                sx={{
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  fontWeight: 'semi-bold',
                  transition: 'all 0.3s ease',
                  borderRadius: '4px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    color: '#ee8045',
                  },
                  '&:active': {
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    transform: 'translateY(0)',
                    color: '#ee8045',
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderBottom: '2px solid #ee8045',
                    color: '#ee8045',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    },
                  },
                }}
              >
                List of events
              </MenuItem>
            </Box>
            <Button
              color='warning'
              size='large'
              variant='contained'
              onClick={() => {}}
              // disabled={editMode}
            >
              Create Event
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
