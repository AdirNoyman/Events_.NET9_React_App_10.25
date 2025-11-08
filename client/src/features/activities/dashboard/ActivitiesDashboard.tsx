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
  submitForm: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
};

const ActivitiesDashboard = ({ activities, selectActivity, selectedActivity,cancelSelectActivity, editMode,openForm,closeForm, submitForm, deleteActivity }: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivitiesList activities={activities} selectActivity={selectActivity} cancelSelectActivity={cancelSelectActivity} closeForm={closeForm} deleteActivity={deleteActivity}/>
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && <ActivityDetails activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />}
        {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} submitForm={submitForm}/>}
      </Grid>
    </Grid>
  );
};

export default ActivitiesDashboard;
