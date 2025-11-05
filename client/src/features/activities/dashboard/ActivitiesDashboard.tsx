import { Grid } from '@mui/material';
import ActivitiesList from './ActivitiesList';
import ActivityDetails from '../details/ActivityDetails';

type Props = {
  activities: Activity[];
  selectedActivity?: Activity;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
};

const ActivitiesDashboard = ({ activities, selectActivity, selectedActivity,cancelSelectActivity }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivitiesList activities={activities} selectActivity={selectActivity} cancelSelectActivity={cancelSelectActivity} />
      </Grid>
      <Grid size={5}>
        {selectedActivity && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity}/>}
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
