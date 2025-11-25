import { Grid } from '@mui/material';
import ActivitiesList from './ActivitiesList';

const ActivitiesDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivitiesList />
      </Grid>
      <Grid size={5}>
        activity filters go here...
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
