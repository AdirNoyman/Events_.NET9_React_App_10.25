import { createBrowserRouter } from 'react-router';
import App from '../layout/App';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivitiesDashboard from '../../features/activities/dashboard/ActivitiesDashboard';
import ActivityDetailsPage from '../../features/activities/details/ActivityDetailsPage';
import Counter from '../../features/counter/Counter';

export const router = createBrowserRouter([
  // All the app routes go here
  {
    // Root Route
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'activities',
        element: <ActivitiesDashboard />,
      },
      {
        path: 'activities/:id',
        element: <ActivityDetailsPage />,
      },
      {
        path: 'create-activity',
        element: <ActivityForm key='create'/>,
      },
      {
        path: 'edit-activity/:id',
        element: <ActivityForm />,
      },
      {
        path: 'counter',
        element: <Counter />,
      },
    ],
  },
]);
