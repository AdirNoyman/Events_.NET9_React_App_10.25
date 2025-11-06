import { Box, Button, Paper, TextField, Typography } from '@mui/material';

const ActivityForm = () => {
  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant='h4' gutterBottom color='primary'>
        Create activity
      </Typography>
      <Box component='form' display='flex' flexDirection='column' gap={3}>
        {/* Form fields will go here */}
        <TextField label='Title' />
        <TextField label='Description' multiline rows={3} />
        <TextField label='Category' />
        <TextField label='Date' type='date' />
        <TextField label='City' />
        <TextField label='Venue' />
        <Box display='flex' justifyContent='end' gap={3}>
          <Button color='inherit'>Cancel</Button>
          <Button color='success' variant='contained'>
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
