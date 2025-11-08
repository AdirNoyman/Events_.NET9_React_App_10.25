import { Box, Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  const handleSelectActivity = (id: string) => {
    const activity = activities.find((a) => a.id === id);
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
    if (activity.id) {
      setActivities([...activities.filter(a => a.id !== activity.id), activity]);
    } else {
      activity.id = crypto.randomUUID();
      setActivities([...activities, activity]);
    }
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(a => a.id !== id));
    if (selectedActivity?.id === id) {
      handleCancelSelectActivity();
    }
  };

  return (
    <Box sx={{ bgcolor: '#eee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} editMode={editMode} clearActivity={handleCancelSelectActivity}/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
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
      </Container>
    </Box>
  );
}

export default App;
