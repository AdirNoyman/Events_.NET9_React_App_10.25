import { Container, CssBaseline } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ActivitiesDashboard from '../../features/activities/ActivitiesDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

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

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        <ActivitiesDashboard activities={activities} />
      </Container>
    </>
  );
}

export default App;
