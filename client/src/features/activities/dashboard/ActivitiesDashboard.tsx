import { Grid } from '@mui/material';
import ActivitiesList from './ActivitiesList';
import ActivityDetails from '../details/ActivityDetails';

type Props = {
  activities: Activity[];
};

const ActivitiesDashboard = ({ activities }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivitiesList activities={activities} />
      </Grid>
      <Grid size={5}>
        {activities[4] && <ActivityDetails activity={activities[4]} />}
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
