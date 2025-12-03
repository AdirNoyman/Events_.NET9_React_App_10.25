import { Grid, Typography } from '@mui/material';
import ActivityDetailsHeader from './ActivityDetailsHeader';
import ActivityDetailsInfo from './ActivityDetailsInfo';
import ActivityDetailsChat from './ActivityDetailsChat';
import ActivityDetailsSidebar from './ActivityDetailsSidebar';
import { useActivities } from '../../../lib/hooks/useActivities';
import { useParams } from 'react-router';

const ActivityDetailsPage = () => {
  window.scrollTo(0, 0);
  const {id} = useParams<{id: string}>()
  const { activity, isLoadingActivity} = useActivities(id)

  // If activity was not fond, do not try to display the event card
  if (isLoadingActivity) return <Typography>Loading 🙄...</Typography>;

  // If activity was not fond, do not try to display the event card
  if (!activity)
    return (
      <Typography sx={{ color: 'red', fontWeight: 'medium' }}>
        Event not found 🤷‍♂️...
      </Typography>
    );

  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityDetailsHeader activity={activity}/>
        <ActivityDetailsInfo activity={activity}/>
        <ActivityDetailsChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailsSidebar />
      </Grid>
    </Grid>
  );
};

export default ActivityDetailsPage;
