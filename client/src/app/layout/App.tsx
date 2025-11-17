import { Box, Container, CssBaseline } from '@mui/material';
import { useState } from 'react';
import NavBar from './NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import { useActivities } from '../../lib/hooks/useActivities';

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    const activity = activities?.find((a) => a.id === id);
    if (!activity) return;
    setSelectedActivity(activity);
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //   setActivities([
    //     ...activities.filter((a) => a.id !== activity.id),
    //     activity,
    //   ]);
    // } else {
    //   activity.id = crypto.randomUUID();
    //   setActivities([...activities, activity]);
    // }
    setEditMode(false);
    console.log(activity);
  };

  const handleDeleteActivity = (id: string) => {
    // setActivities(activities.filter((a) => a.id !== id));
    // if (selectedActivity?.id === id) {
    //   handleCancelSelectActivity();
    // }
    console.log(id);
  };

  return (
    <Box sx={{ bgcolor: '#eee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar
        openForm={handleOpenForm}
        editMode={editMode}
        clearActivity={handleCancelSelectActivity}
      />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {isPending || !activities ? (
          <div>Loading activities 🤓...</div>
        ) : (
          <ActivitiesDashboard
            activities={activities}
            selectActivity={handleSelectActivity}
            cancelSelectActivity={handleCancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
            submitForm={handleSubmitForm}
            deleteActivity={handleDeleteActivity}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
