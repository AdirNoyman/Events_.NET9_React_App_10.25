import { Box, Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { useStore } from '../../lib/hooks/useStore';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
  const { counterStore } = useStore();

  return (
    <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
      <Box sx={{width: '60%'}}>
          <Typography variant='h4' component='h1' gutterBottom>
        {counterStore.title}
      </Typography>
      <Typography variant='h6' component='h2'>
        Counter: {counterStore.count}
      </Typography>
      <ButtonGroup sx={{ mt: 3 }}>
        <Button
          onClick={() => counterStore.increment()}
          variant='contained'
          color='info'
        >
          Increment
        </Button>
        <Button
          onClick={() => counterStore.decrement()}
          variant='contained'
          color='error'
        >
          Decrement
        </Button>
        <Button
          onClick={() => counterStore.increment(5)}
          variant='contained'
          color='primary'
        >
          Increment Big
        </Button>
      </ButtonGroup>
      </Box>
      <Paper sx={{width: '40%', p:4}}>
        <Typography variant='h5'>
          Event Log (Total: {counterStore.eventCount})
        </Typography>
        <Typography variant='body1' sx={{whiteSpace: 'pre-line', maxHeight: '400px', overflowY: 'auto'}}>
          {counterStore.events.join('\n')}
        </Typography>
      </Paper>
    
    </Box>
  );
});

export default Counter;
