import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { FormEvent } from 'react';

type Props = {
  closeForm: () => void;
  activity?: Activity;
  submitForm: (activity: Activity) => void;
};

const ActivityForm = ({ closeForm, activity, submitForm }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    for (const key in data) {
      console.log(`${key}: ${data[key as keyof typeof data]}`);
    }

    if (activity) {
      data.id = activity.id;
    }
    submitForm(data as unknown as Activity);
  };

  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant='h4' gutterBottom color='primary'>
        Create activity
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit}
        display='flex'
        flexDirection='column'
        gap={3}
      >
        {/* Form fields will go here */}
        <TextField name='title' label='Title' defaultValue={activity?.title} />
        <TextField
          label='Description'
          name='description'
          defaultValue={activity?.description}
          multiline
          rows={3}
        />
        <TextField label='Category' name='category' defaultValue={activity?.category} />
        <TextField label='Date' name='date' type='date' defaultValue={activity?.date} />
        <TextField label='City' name='city' defaultValue={activity?.city} />
        <TextField label='Venue' name='venue' defaultValue={activity?.venue} />
        <Box display='flex' justifyContent='end' gap={3}>
          <Button color='inherit' onClick={closeForm}>
            Cancel
          </Button>
          <Button color='success' type='submit' variant='contained'>
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
