import { Grid } from '@mui/material';
import ActivitiesList from './ActivitiesList';
import ActivitiesFilters from './ActivitiesFilters';

const ActivitiesDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivitiesList />
      </Grid>
      <Grid size={4}>
        <ActivitiesFilters />
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
