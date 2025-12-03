import { Group } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <Paper
      sx={{
        color: 'white',
        height: '100vh',
        display: 'flex',
        gap: 6,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundImage:
          'linear-gradient(to right, #000 0%, #4720d3 30%, #6813a9 58%)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          color: 'white',          
          fontWeight: 'bold',
          gap: 3,
        }}
      >
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant='h1'>
          Adir's Events
        </Typography>
      </Box>
      <Typography variant='h2'>
        Welcome to Adir's Events
      </Typography>
      <Button component={Link} to='/activities' variant='contained' size='large' sx={{ height: 80, borderRadius: 4, fontSize: '1.5rem' }}>
        Take me to the events!
      </Button>
    </Paper>
  );
};

// sx={{
//         color: 'white',
//         height: '100vh',
//         backgroundImage: `url('https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',

//       }}

export default HomePage;
