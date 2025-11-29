import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import type { FormEvent } from 'react';
import { useActivities } from '../../../lib/hooks/useActivities';
import { useNavigate, useParams } from 'react-router';

const ActivityForm = () => {
  window.scrollTo(0, 0);
  // Get activity id from the url
  const { id } = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } =
    useActivities(id);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    for (const key in data) {
      console.log(`${key}: ${data[key as keyof typeof data]}`);
    }

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    } else {
      createActivity.mutate(data as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`);
        },
      });
    }
  };

  if (isLoadingActivity) return <Typography>Loading Activity 🙄...</Typography>;

  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant='h4' gutterBottom color='primary'>
        {activity ? 'Edit Event Details' : 'Create New Event'}
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
        <TextField
          label='Category'
          name='category'
          defaultValue={activity?.category}
        />
        <TextField
          label='Date'
          name='date'
          type='date'
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0]
          }
        />
        <TextField label='City' name='city' defaultValue={activity?.city} />
        <TextField label='Venue' name='venue' defaultValue={activity?.venue} />
        <Box display='flex' justifyContent='end' gap={3}>
          <Button
            type='button'
            color='inherit'
            onClick={() => {
              navigate('/activities');
            }}
          >
            Cancel
          </Button>
          <Button
            color='success'
            type='submit'
            variant='contained'
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
