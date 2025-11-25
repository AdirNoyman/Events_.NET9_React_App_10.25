import { createBrowserRouter } from "react-router";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivitiesDashboard from "../../features/activities/dashboard/ActivitiesDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";

export const router = createBrowserRouter([

    // All the app routes go here
    {
        // Root Route
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
             {
                path: 'activities',
                element: <ActivitiesDashboard />
            },
             {
                path: 'createActivity',
                element: <ActivityForm />
            }
        ]
    }


])