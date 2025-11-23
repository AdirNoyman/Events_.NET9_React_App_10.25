import { Grid } from '@mui/material';
import ActivitiesList from './ActivitiesList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';

type Props = {
  activities: Activity[];
  selectedActivity?: Activity;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;

};

const ActivitiesDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
 
}: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivitiesList
          activities={activities}
          selectActivity={selectActivity}
          cancelSelectActivity={cancelSelectActivity}
          closeForm={closeForm}
         
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            selectedActivity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
